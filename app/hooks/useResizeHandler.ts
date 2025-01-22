import { useState, useEffect } from 'react'

export default function useResizeHandler() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width > 1600 || width <= 992 && width > 767) {
        setScale(1)
      } else if (width <= 1600 && width > 992) {
        setScale(0.9)
      } else if (width <= 767 && width > 700) {
        setScale(0.8)
      } else if (width <= 700 && width > 600) {
        setScale(0.75)
      } else if (width <= 600) {
        setScale(0.5)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call once to set initial scale

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return scale
}

