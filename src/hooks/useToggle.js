import { useCallback, useState } from 'react'

/**
 * Hook customizado para estados de liga/desliga — no projeto ele controla a
 * abertura do menu hamburguer do cabecalho.
 */
export function useToggle(valorInicial = false) {
  const [ativo, setAtivo] = useState(valorInicial)

  const alternar = useCallback(() => setAtivo((valor) => !valor), [])
  const fechar = useCallback(() => setAtivo(false), [])
  const abrir = useCallback(() => setAtivo(true), [])

  return { ativo, alternar, abrir, fechar }
}
