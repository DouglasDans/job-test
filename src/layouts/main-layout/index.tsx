import React, { ReactNode } from 'react'
import styles from './index.module.scss'

type Props = {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}