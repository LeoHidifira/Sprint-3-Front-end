import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

/*
 * Layout compartilhado por todas as rotas. O <Outlet> do react-router-dom
 * renderiza a pagina da rota ativa entre o cabecalho e o rodape.
 */
export function Layout() {
  return (
    <>
      <Header />
      <main className="pt-[100px]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
