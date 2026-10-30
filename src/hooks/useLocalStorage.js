import { useCallback, useEffect, useState } from 'react'

/**
 * Hook customizado que espelha um estado do React no localStorage.
 * Usado para manter o usuario logado entre recarregamentos da pagina.
 */
export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const salvo = window.localStorage.getItem(chave)
      return salvo ? JSON.parse(salvo) : valorInicial
    } catch {
      return valorInicial
    }
  })

  useEffect(() => {
    try {
      if (valor === null || valor === undefined) {
        window.localStorage.removeItem(chave)
      } else {
        window.localStorage.setItem(chave, JSON.stringify(valor))
      }
    } catch {
      /* navegador sem acesso ao storage: o estado continua valendo em memoria */
    }
  }, [chave, valor])

  const limpar = useCallback(() => setValor(null), [])

  return [valor, setValor, limpar]
}
