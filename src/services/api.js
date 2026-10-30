/*
 * Camada de acesso a dados do Modo Estudante.
 *
 * O projeto consome uma API mockada. Por padrao usamos o mock local
 * (src/services/mockData.js), que responde com a mesma assinatura de um fetch
 * real (Promise + latencia + erro de rede). Se a variavel VITE_API_URL estiver
 * definida (ex.: um recurso criado no MockAPI.io), as mesmas funcoes passam a
 * falar com o endpoint HTTP, sem precisar mexer nos componentes.
 */

import { equipe, materias, tarefas, usuarios } from './mockData'

const BASE_URL = import.meta.env.VITE_API_URL ?? ''
const LATENCIA_MS = 600

/** Simula o tempo de resposta de uma requisicao de rede. */
function delay(ms = LATENCIA_MS) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** Requisicao HTTP real, usada quando VITE_API_URL esta configurada. */
async function http(recurso) {
  const resposta = await fetch(`${BASE_URL}/${recurso}`)

  if (!resposta.ok) {
    throw new Error(`Falha ao carregar "${recurso}" (HTTP ${resposta.status})`)
  }

  return resposta.json()
}

/** Decide entre o mock local e a API remota. */
async function buscar(recurso, dadosLocais) {
  if (BASE_URL) return http(recurso)

  await delay()
  return dadosLocais
}

export const api = {
  /** Integrantes da equipe — usado na secao publica "Nossa equipe". */
  getEquipe: () => buscar('equipe', equipe),

  /** Tarefas do estudante — usado no painel privado. */
  getTarefas: () => buscar('tarefas', tarefas),

  /** Materias acompanhadas — usado no painel privado. */
  getMaterias: () => buscar('materias', materias),

  /**
   * Autenticacao mockada. Devolve o usuario sem a senha quando as credenciais
   * batem e rejeita a Promise caso contrario.
   */
  async login({ email, senha }) {
    await delay(400)

    const usuario = usuarios.find(
      (item) => item.email.toLowerCase() === email.trim().toLowerCase() && item.senha === senha,
    )

    if (!usuario) {
      throw new Error('E-mail ou senha incorretos.')
    }

    const { senha: _senha, ...dadosPublicos } = usuario
    return { ...dadosPublicos, token: `jovi-${usuario.id}-${Date.now()}` }
  },

  /** Envio do formulario de contato da landing page. */
  async enviarContato({ nome, email, mensagem }) {
    await delay(500)

    if (!nome || !email || !mensagem) {
      throw new Error('Preencha todos os campos para enviar a mensagem.')
    }

    return { protocolo: `JOVI-${Date.now().toString().slice(-6)}` }
  },
}
