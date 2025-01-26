'use server'

import { PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation"

const prisma = new PrismaClient()

export async function createProduto(formData: FormData) {
  const produto : Produto = {
    nome: formData.get("nome") as string,
    valor: parseFloat(formData.get("valor") as string),
    descricao: formData.get("descricao") as string,
    isDisponivel: formData.get("disponibilidade") == 'true' ? true : false
  }
  
  await prisma.produto.create({
    data: {
      nome: produto.nome,
      valor: produto.valor,
      descricao: produto.descricao,
      isDisponivel: produto.isDisponivel
    }
  })

  redirect("/")
}

export async function getAllProdutos(): Promise<Array<Produto>> {
  return await prisma.produto.findMany({
    orderBy: {valor : 'asc'}
  })
}

export async function updateProduto(formData: FormData, id: number) {
  const produto : Produto = {
    nome: formData.get("nome") as string,
    valor: parseFloat(formData.get("valor") as string),
    descricao: formData.get("descricao") as string,
    isDisponivel: formData.get("disponibilidade") == 'true' ? true : false
  }
  
  await prisma.produto.update({
    where:{
      id
    },
    data: {
      nome: produto.nome,
      valor: produto.valor,
      descricao: produto.descricao,
      isDisponivel: produto.isDisponivel
    }
  })

  redirect("/")
}

export async function deleteProduto(id: number) {
  await prisma.produto.delete({
    where: {id}
  })
}