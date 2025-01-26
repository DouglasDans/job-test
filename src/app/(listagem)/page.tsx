import { Button } from '@mui/joy'
import styles from './page.module.scss'
import { Fragment } from 'react'
import ListItems from '@/components/list-items'
import Link from 'next/link'
import { getAllProdutos } from '@/actions/produto.action'

type Props = {}

export default async function ListagemPage({ }: Props) {
  const items: Array<Produto> = await getAllProdutos()
  return (
    <Fragment>
      <div className={styles.titleContainer}>
        <h1>Lista de Produtos</h1>
        <Link href={'cadastro'}>
          <Button>Adicionar Produtos</Button>
        </Link>
      </div>
      <ListItems items={items} />
    </Fragment>
  )
}