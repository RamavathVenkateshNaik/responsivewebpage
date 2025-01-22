'use client'

import { useState } from 'react'
import styles from './ResponsivePage.module.css'
import Navbar from './Navbar'
import LeftMenu from './LeftMenu'
import Content from './Content'
import RightPanel from './RightPanel'
import Footer from './Footer'
import useResizeHandler from '../hooks/useResizeHandler'

export default function ResponsivePage() {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false)
  const scale = useResizeHandler()

  const toggleMenu = () => {
    setIsMenuCollapsed(!isMenuCollapsed)
  }

  return (
    <div className={styles.container} style={{ transform: `scale(${scale})` }}>
      <Navbar />
      <div className={styles.mainContent}>
        <LeftMenu isCollapsed={isMenuCollapsed} onToggle={toggleMenu} />
        <Content />
        <RightPanel />
      </div>
      <Footer />
    </div>
  )
}

