'use client'

import { useEffect, useRef, useState } from 'react'

const ICON_PATH = 'M7624.98 3874.98c0,2071.06 -1678.94,3750 -3749.98,3750 -2071.06,0 -3750,-1678.94 -3750,-3750 0,-2071.06 1678.94,-3749.98 3750,-3749.98 2071.04,0 3749.98,1678.92 3749.98,3749.98z M3515.49 6114.56l1197.82 -772.16c623.44,-396.53 1147.33,-899.78 1147.33,-1434.9 0,-653.28 -360.21,-934.03 -1147.33,-1469.7l-1131.25 -732.19c-144.57,-94.27 -423.19,-292.25 -554.11,-346.71 -268.17,-112.07 -510.12,85.89 -489.18,356.13 10.49,134.09 156.07,539.45 206.35,694.48 223.3,701.1 435.89,1402.2 650.16,2105.05l1.4 4.58 5.71 18.69 123.81 405.35 1.2 3.93 1.02 3.32 0.83 2.72 0.64 2.11 0.46 1.51 0.28 0.9 0.09 0.3c64.93,212.62 308.25,940.68 -15.23,1156.58z M3530.72 4957.99c0,0 -125.39,-410.46 -389.66,-1275.79 113.91,576.03 -407.46,1582.71 -558.29,2169.28 -150.83,586.59 271.28,698.66 656.76,440.98l275.84 -177.81c323.66,-215.79 80.29,-944.02 15.35,-1156.67z'

interface Ball {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  rot: number
  rotSpeed: number
}

function getAccent(): string {
  if (typeof document === 'undefined') return '#19D87D'
  return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#19D87D'
}

function isLightTheme(): boolean {
  if (typeof document === 'undefined') return false
  return !document.documentElement.classList.contains('dark')
}

function createBalls(w: number, h: number): Ball[] {
  const sizes = [80, 50, 65, 40, 60, 45, 75, 55]
  const maxDim = Math.min(w, h)
  return sizes.map(s => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 1.2,
    vy: (Math.random() - 0.5) * 1.2,
    size: (s / 100) * maxDim,
    opacity: 0.02 + Math.random() * 0.04,
    rot: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 0.8,
  }))
}

export function HeroBackground() {
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ballsRef = useRef<Ball[]>([])
  const rafRef = useRef(0)
  const accentRef = useRef('#19D87D')
  const dimsRef = useRef({ w: 0, h: 0 })

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const cvs = canvasRef.current
    if (!cvs) return
    const g = cvs.getContext('2d')
    if (!g) return
    accentRef.current = getAccent()

    function resize() {
      const c = canvasRef.current
      if (!c) return
      accentRef.current = getAccent()
      dimsRef.current = { w: window.innerWidth, h: window.innerHeight }
      c.width = window.innerWidth
      c.height = window.innerHeight
      ballsRef.current = createBalls(c.width, c.height)
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      const { w, h } = dimsRef.current
      const g = canvasRef.current?.getContext('2d')
      if (!g) return
      g.clearRect(0, 0, w, h)

      for (const b of ballsRef.current) {
        b.x += b.vx
        b.y += b.vy
        b.rot += b.rotSpeed

        if (b.x < 0) { b.x = 0; b.vx *= -1 }
        if (b.x > w) { b.x = w; b.vx *= -1 }
        if (b.y < 0) { b.y = 0; b.vy *= -1 }
        if (b.y > h) { b.y = h; b.vy *= -1 }

        const alpha = isLightTheme() ? b.opacity * 2 : b.opacity
        g.save()
        g.translate(b.x, b.y)
        g.rotate((b.rot * Math.PI) / 180)
        g.scale(b.size / 7749.98, b.size / 7749.98)
        g.globalAlpha = alpha
        g.strokeStyle = accentRef.current
        g.lineWidth = 250
        g.miterLimit = 22.9256
        const path = new Path2D(ICON_PATH)
        g.stroke(path)
        g.restore()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}
