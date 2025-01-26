import React from 'react'
import styles from './index.module.scss'

type Props = {
  items: Array<Produto>
}

export default function ListItems({ items }: Props) {
  if (items.length === 0) {
    return (
      <div className={styles.placeholderContainer}>
        <span>Nenhum item foi adicionado</span>
      </div>
    )
  }

  return (
    <div>
      {items.map(item => {
        return (
          <div>
            <h3>{item.nome}</h3>
            <span>{item.valor}</span>
          </div>
        )
      })}
    </div>
  )
}