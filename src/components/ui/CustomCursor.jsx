import { useCursor } from '@hooks/useCursor'

export default function CustomCursor() {
  const { dotRef, ringRef } = useCursor()

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed w-2.5 h-2.5 bg-pink rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ boxShadow: '0 0 12px #ff9ffc, 0 0 24px rgba(255,159,252,0.4)' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed w-9 h-9 border border-pink/35 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200"
      />
    </>
  )
}
