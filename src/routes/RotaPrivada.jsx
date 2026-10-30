import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

/*
 * Guarda das rotas privadas. Sem usuario autenticado, manda para /login
 * guardando o endereco de origem para voltar depois do login.
 */
export function RotaPrivada() {
  const { autenticado } = useAuth()
  const { pathname } = useLocation()

  if (!autenticado) {
    return <Navigate to="/login" state={{ de: pathname }} replace />
  }

  return <Outlet />
}
