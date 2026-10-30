import { createContext, useCallback, useMemo } from 'react'
import { api } from '../services/api'
import { useLocalStorage } from '../hooks/useLocalStorage'

/* Contexto que guarda o usuario autenticado e alimenta as rotas privadas. */
export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuario, setUsuario, limparUsuario] = useLocalStorage('modo-estudante:usuario', null)

  const entrar = useCallback(
    async (credenciais) => {
      const autenticado = await api.login(credenciais)
      setUsuario(autenticado)
      return autenticado
    },
    [setUsuario],
  )

  const sair = useCallback(() => limparUsuario(), [limparUsuario])

  // useMemo evita recriar o objeto do contexto a cada render do provider.
  const valor = useMemo(
    () => ({ usuario, autenticado: Boolean(usuario), entrar, sair }),
    [usuario, entrar, sair],
  )

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>
}
