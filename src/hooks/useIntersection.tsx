'use client'
import { useEffect, useState, useRef } from 'react'

function useIntersection(opciones = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const elementoRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const elemento = elementoRef.current
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting)
      })
    }, opciones)
    if (elemento) {
      observer.observe(elemento)
    }
    return () => {
      if (elemento) {
        observer.unobserve(elemento)
      }
    }
  }, [opciones])
  return [elementoRef, isIntersecting]
}

export default useIntersection
