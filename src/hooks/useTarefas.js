import { useCallback, useMemo, useState } from 'react'
import { api } from '../services/api'
import { useFetch } from './useFetch'

/**
 * Hook customizado com toda a regra do painel do estudante: busca as tarefas na
 * API, guarda o filtro ativo, permite concluir/reabrir e calcula o resumo.
 * A pagina Painel apenas desenha o que este hook devolve.
 */
export function useTarefas() {
  const { dados, carregando, erro, recarregar } = useFetch(() => api.getTarefas())

  const [concluidasLocais, setConcluidasLocais] = useState({})
  const [filtro, setFiltro] = useState('todas')

  /** Tarefas da API com as alteracoes feitas na tela aplicadas por cima. */
  const tarefas = useMemo(() => {
    if (!dados) return []

    return dados.map((tarefa) => ({
      ...tarefa,
      concluida: concluidasLocais[tarefa.id] ?? tarefa.concluida,
    }))
  }, [dados, concluidasLocais])

  const tarefasFiltradas = useMemo(() => {
    if (filtro === 'pendentes') return tarefas.filter((tarefa) => !tarefa.concluida)
    if (filtro === 'concluidas') return tarefas.filter((tarefa) => tarefa.concluida)
    return tarefas
  }, [tarefas, filtro])

  const resumo = useMemo(() => {
    const total = tarefas.length
    const concluidas = tarefas.filter((tarefa) => tarefa.concluida).length

    return {
      total,
      concluidas,
      pendentes: total - concluidas,
      progresso: total ? Math.round((concluidas / total) * 100) : 0,
    }
  }, [tarefas])

  const alternarConclusao = useCallback(
    (id) => {
      setConcluidasLocais((anteriores) => {
        const original = dados?.find((tarefa) => tarefa.id === id)?.concluida ?? false
        const atual = anteriores[id] ?? original
        return { ...anteriores, [id]: !atual }
      })
    },
    [dados],
  )

  return {
    tarefas: tarefasFiltradas,
    resumo,
    filtro,
    setFiltro,
    alternarConclusao,
    carregando,
    erro,
    recarregar,
  }
}
