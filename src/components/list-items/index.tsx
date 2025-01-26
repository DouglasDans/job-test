import React from 'react'

type Props = {
  items: Array<Produto>
}

export default function ListItems({ items }: Props) {
  if (items.length === 0) {
    return ("Nenhum item foi adicionado")
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