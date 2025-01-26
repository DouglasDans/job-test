import { Button, FormControl, FormLabel, Input, Radio, RadioGroup, Textarea } from "@mui/joy"
import { Fragment } from "react"
import styles from './page.module.scss'
import Link from "next/link"
import { createProduto, getProdutoById, updateProduto } from "@/actions/produto.action"

type Props = {
  params: {
    produtoId: string
  }
}

export default async function EditarPage({ params }: Props) {
  const produto = await getProdutoById(parseInt(params.produtoId))
  const bindEditarProduto = updateProduto.bind(null, parseInt(params.produtoId));

  if (!produto) {
    return (
      <Fragment>
        <div className={styles.titleContainer}>
          <h1>Editar produto</h1>
          <Link href={"/"}>
            <Button variant="outlined" color="neutral">Voltar</Button>
          </Link>
        </div>
        <h4>O produto com o ID {params.produtoId} não foi encontrado.</h4>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <div className={styles.titleContainer}>
        <h1>Editar {produto.nome}</h1>
        <Link href={"/"}>
          <Button variant="outlined" color="neutral">Voltar</Button>
        </Link>
      </div>

      <form action={bindEditarProduto} className={styles.formContainer}>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input placeholder="Digite o Nome do Produto" name="nome" required defaultValue={produto.nome} />
        </FormControl>

        <FormControl>
          <FormLabel>Valor</FormLabel>
          <Input placeholder="Digite o Valor do Produto" type="number" name="valor" required defaultValue={produto.valor} />
        </FormControl>

        <FormControl>
          <FormLabel>O Produto tem disponibilidade para venda?</FormLabel>
          <RadioGroup name="disponibilidade" defaultValue={produto.isDisponivel}>
            <Radio value={true} label="Sim" variant="solid" />
            <Radio value={false} label="Não" variant="solid" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Descrição</FormLabel>
          <Textarea placeholder="Digite a Descrição do Produto" minRows={3} name="descricao" required defaultValue={produto.descricao}>
          </Textarea>
        </FormControl>

        <Button type="submit">Confirmar Alterações</Button>
      </form>
    </Fragment>

  )
}