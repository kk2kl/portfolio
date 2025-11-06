import { useRef, useEffect } from 'react'

export default function Starfield({ count = 120, color = '#9be7ff', interactive = true }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = 0
    let h = 0
    let particles = []
    let raf = null
    let mouse = { x: -9999, y: -9999, down: false }

    function resize() {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function init() {
      particles = []
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.6 + 0.4,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          baseA: Math.random() * 0.6 + 0.2,
        })
      }
    }

    function dist(a, b) {
      const dx = a.x - b.x
      const dy = a.y - b.y
      return Math.sqrt(dx * dx + dy * dy)
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      // subtle background tint
      ctx.fillStyle = 'rgba(0,0,0,0)'
      ctx.fillRect(0, 0, w, h)

      for (let p of particles) {
        // mouse interaction: repel
        if (interactive) {
          const m = { x: mouse.x, y: mouse.y }
          const d = dist(p, m)
          const radius = 120
          if (d < radius) {
            const force = (radius - d) / radius
            const angle = Math.atan2(p.y - m.y, p.x - m.x)
            p.vx += Math.cos(angle) * force * 0.6
            p.vy += Math.sin(angle) * force * 0.6
          }
        }

        // friction
        p.vx *= 0.98
        p.vy *= 0.98

        p.x += p.vx
        p.y += p.vy

        // wrap
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10

        ctx.beginPath()
        ctx.fillStyle = `rgba(${hexToRgb(color)}, ${p.baseA})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    function hexToRgb(hex) {
      const h = hex.replace('#', '')
      const bigint = parseInt(h, 16)
      const r = (bigint >> 16) & 255
      const g = (bigint >> 8) & 255
      const b = bigint & 255
      return `${r}, ${g}, ${b}`
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    function onLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    function start() {
      resize()
      init()
      draw()
      window.addEventListener('resize', resize)
      if (interactive) {
        canvas.addEventListener('mousemove', onMove)
        canvas.addEventListener('mouseleave', onLeave)
        canvas.addEventListener('touchmove', (ev) => {
          const t = ev.touches[0]
          onMove(t)
        })
      }
    }

    start()

    return () => {
      window.removeEventListener('resize', resize)
      if (raf) cancelAnimationFrame(raf)
      if (interactive) {
        canvas.removeEventListener('mousemove', onMove)
        canvas.removeEventListener('mouseleave', onLeave)
      }
    }
  }, [count, color, interactive])

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 w-full h-full z-0"
      aria-hidden
    />
  )
}
