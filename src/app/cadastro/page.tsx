import { Button, FormControl, FormLabel, Input, Radio, RadioGroup, Textarea } from "@mui/joy"
import { Fragment } from "react"
import styles from './page.module.scss'

type Props = {}

export default function CadastroPage({ }: Props) {
  return (
    <Fragment>
      <div>
        <h1>Cadastrar Novo Produto</h1>
      </div>

      <form className={styles.formContainer}>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input placeholder="Digite o Nome do Produto" />
        </FormControl>

        <FormControl>
          <FormLabel>Valor</FormLabel>
          <Input placeholder="Digite o Valor do Produto" type="number" />
        </FormControl>

        <FormControl>
          <FormLabel>O Produto tem disponibilidade para venda?</FormLabel>
          <RadioGroup defaultValue={true} name="disponibilidadeRadioGroup">
            <Radio value={true} label="Sim" variant="solid" />
            <Radio value={false} label="Não" variant="solid" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Descrição</FormLabel>
          <Textarea placeholder="Digite o Valor do Produto" minRows={3}>
          </Textarea>
        </FormControl>
        <Button type="submit">Adicionar Produto</Button>
      </form>
    </Fragment>

  )
}