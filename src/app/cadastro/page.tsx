import { Button, FormControl, FormLabel, Input, Radio, RadioGroup, Textarea } from "@mui/joy"
import { Fragment } from "react"
import styles from './page.module.scss'
import Link from "next/link"
import { createProduto } from "@/actions/produto.action"

type Props = {}

export default function CadastroPage({ }: Props) {
  return (
    <Fragment>
      <div className={styles.titleContainer}>
        <h1>Cadastrar Novo Produto</h1>
        <Link href={"/"}>
          <Button variant="outlined" color="neutral">Voltar</Button>
        </Link>
      </div>

      <form action={createProduto} className={styles.formContainer}>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input placeholder="Digite o Nome do Produto" name="nome" required />
        </FormControl>

        <FormControl>
          <FormLabel>Valor</FormLabel>
          <Input placeholder="Digite o Valor do Produto" type="number" name="valor" required />
        </FormControl>

        <FormControl>
          <FormLabel>O Produto tem disponibilidade para venda?</FormLabel>
          <RadioGroup defaultValue={true} name="disponibilidade">
            <Radio value={true} label="Sim" variant="solid" />
            <Radio value={false} label="Não" variant="solid" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Descrição</FormLabel>
          <Textarea placeholder="Digite a Descrição do Produto" minRows={3} name="descricao" required>
          </Textarea>
        </FormControl>

        <Button type="submit">Adicionar Produto</Button>
      </form>
    </Fragment>

  )
}