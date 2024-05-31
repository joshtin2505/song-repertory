'use client'
import { useCallback, useEffect, useRef } from 'react'

const CursorFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((event: globalThis.MouseEvent) => {
    const { clientX, clientY } = event
    const cursorElement = cursorRef.current
    if (cursorElement) {
      cursorElement.style.left = `${clientX}px`
      cursorElement.style.top = `${clientY}px`
    }
  }, [])
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <div
      ref={cursorRef}
      style={{
        background:
          'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)'
      }}
      className="fixed w-8 h-8 rounded-full blur-lg transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
    />
  )
}

export default CursorFollower
