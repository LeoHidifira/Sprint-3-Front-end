import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

/**
 * Hook customizado de acesso ao contexto de autenticacao.
 * Centraliza a leitura do contexto e avisa quando o provider esta ausente.
 */
export function useAuth() {
  const contexto = useContext(AuthContext)

  if (!contexto) {
    throw new Error('useAuth precisa ser usado dentro de <AuthProvider>.')
  }

  return contexto
}
