import styles from './LeftMenu.module.css'

interface LeftMenuProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function LeftMenu({ isCollapsed, onToggle }: LeftMenuProps) {
  return (
    <div className={`${styles.leftMenu} ${isCollapsed ? styles.collapsed : ''}`}>
      <button onClick={onToggle} className={styles.toggleButton}>
        {isCollapsed ? '>' : '<'}
      </button>
      {!isCollapsed && (
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      )}
    </div>
  )
}

