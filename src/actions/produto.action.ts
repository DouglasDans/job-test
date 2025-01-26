'use server'

export async function createProduto(formData: FormData) {
  const produto : Produto = {
    nome: formData.get("nome") as string,
    valor: parseFloat(formData.get("valor") as string),
    descricao: formData.get("descricao") as string,
    disponibilidadeVenda: formData.get("disponibilidade") == 'true' ? true : false
  }
  console.log(produto);
}