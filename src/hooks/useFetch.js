import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Hook customizado que concentra o ciclo de vida de uma requisicao:
 * carregando -> sucesso | erro. Os componentes so recebem o estado pronto.
 *
 * @param {() => Promise<any>} requisicao funcao que devolve a Promise da API
 * @param {Array} deps dependencias que disparam uma nova busca
 */
export function useFetch(requisicao, deps = []) {
  const [dados, setDados] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  // useRef guarda a funcao atual sem recriar o efeito a cada render.
  const requisicaoRef = useRef(requisicao)
  requisicaoRef.current = requisicao

  const [gatilho, setGatilho] = useState(0)

  /** Permite refazer a busca (botao "tentar novamente"). */
  const recarregar = useCallback(() => setGatilho((valor) => valor + 1), [])

  useEffect(() => {
    let ativo = true

    setCarregando(true)
    setErro(null)

    requisicaoRef
      .current()
      .then((resposta) => {
        if (ativo) setDados(resposta)
      })
      .catch((problema) => {
        if (ativo) setErro(problema.message ?? 'Não foi possível carregar os dados.')
      })
      .finally(() => {
        if (ativo) setCarregando(false)
      })

    // Evita atualizar o estado de um componente ja desmontado.
    return () => {
      ativo = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, gatilho])

  return { dados, carregando, erro, recarregar }
}
