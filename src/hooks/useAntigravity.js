import { useEffect } from 'react'

const COUNT    = 280
const MAGNET_R = 140
const RING_R   = 115
const LERP     = 0.08
const VLЕРP    = 0.04   // virtual mouse smoothing

function mkParticle(W, H) {
  return {
    ox: Math.random() * (W + 200) - 100,
    oy: Math.random() * (H + 200) - 100,
    cx: Math.random() * (W + 200) - 100,
    cy: Math.random() * (H + 200) - 100,
    t:      Math.random() * 100,
    speed:  0.003 + Math.random() * 0.008,
    ro:     (Math.random() - 0.5) * 30,
    size:   1.5 + Math.random() * 2.5,
    colorT: Math.random(),
  }
}

export function useAntigravity(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W, H
    const mouse  = { x: -9999, y: -9999 }
    const vMouse = { x: 0, y: 0 }
    let lastMove = 0
    let particles = []
    let time = 0
    let raf

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
      particles = Array.from({ length: COUNT }, () => mkParticle(W, H))
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x  = e.clientX - rect.left
      mouse.y  = e.clientY - rect.top
      lastMove = Date.now()
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      time += 0.016

      let destX = mouse.x, destY = mouse.y
      if (Date.now() - lastMove > 2000) {
        destX = W / 2 + Math.sin(time * 0.4)  * W * 0.28
        destY = H / 2 + Math.cos(time * 0.55) * H * 0.22
      }

      vMouse.x += (destX - vMouse.x) * VLЕРP
      vMouse.y += (destY - vMouse.y) * VLЕРP
      const tx = vMouse.x, ty = vMouse.y

      for (const p of particles) {
        p.t += p.speed
        const dx = p.cx - tx, dy = p.cy - ty
        const dist = Math.sqrt(dx * dx + dy * dy)
        let targetX = p.ox, targetY = p.oy

        if (dist < MAGNET_R) {
          const angle = Math.atan2(dy, dx)
          const wave  = Math.sin(p.t * 0.8 + angle) * 8
          const r     = RING_R + wave + p.ro * 0.3
          targetX = tx + r * Math.cos(angle)
          targetY = ty + r * Math.sin(angle)
        }

        p.cx += (targetX - p.cx) * LERP
        p.cy += (targetY - p.cy) * LERP

        const curDist   = Math.sqrt((p.cx - tx) ** 2 + (p.cy - ty) ** 2)
        const proximity = Math.max(0, 1 - Math.abs(curDist - RING_R) / 40)
        const pulse     = 0.7 + Math.sin(p.t * 4) * 0.3

        // pink(255,159,252) → cyan(0,229,255)
        const r = Math.round(255 + (0   - 255) * p.colorT)
        const g = Math.round(159 + (229 - 159) * p.colorT)
        const b = Math.round(252 + (255 - 252) * p.colorT)
        const a = (0.25 + proximity * 0.65) * pulse

        ctx.beginPath()
        ctx.arc(p.cx, p.cy, p.size * (0.5 + proximity * 0.8) * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`
        ctx.fill()

        if (proximity > 0.5) {
          ctx.beginPath()
          ctx.arc(p.cx, p.cy, p.size * 2.5 * proximity, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${r},${g},${b},${a * 0.15})`
          ctx.fill()
        }
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    canvas.parentElement?.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      canvas.parentElement?.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [canvasRef])
}
