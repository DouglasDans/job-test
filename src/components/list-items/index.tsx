'use client'

import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Button } from '@mui/joy'
import Link from 'next/link'
import { deleteProduto, getAllProdutos } from '@/actions/produto.action'

export default function ListItems() {
  const [items, setItems] = useState<Array<Produto>>([])
  const loading = true

  async function updateList() {
    setItems(await getAllProdutos())
  }

  useEffect(() => {
    updateList()
  }, [])


  async function excluirProduto(item: Produto) {
    if (confirm(`Você deseja realmente excluir o produto "${item.nome}"? Esta ação é irreversível`) && item.id) {
      deleteProduto(item.id)
      setItems(await getAllProdutos())
    }
  }

  if (items.length === 0) {
    return (
      <div className={styles.placeholderContainer}>
        <span>Nenhum item foi adicionado</span>
      </div>
    )
  }

  return (
    <div className={styles.listContainer}>
      {items.map(item => {
        return (
          <div className={styles.listItem} key={item.id}>
            <div className={styles.info}>
              <h3>{item.nome}</h3>
              <span>Valor: {item.valor}</span>
              {item.isDisponivel && <span>Produto disponível</span>}
              {!item.isDisponivel && <span>Produto indisponível</span>}
              <small>{item.descricao}</small>
            </div>
            <div className={styles.actions}>
              <Link href={`/${item.id}`}>
                <Button color='neutral'>Editar</Button>
              </Link>
              <Button onClick={() => { excluirProduto(item) }} color='danger'>Excluir</Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}