import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import menuIcone from '../../assets/menu.png'
import { Container } from '../ui/Container'
import { useAuth } from '../../hooks/useAuth'
import { useToggle } from '../../hooks/useToggle'

/* Links de ancora da landing page. */
const secoes = [
  { href: '#solucao', texto: 'A solução' },
  { href: '#publico', texto: 'Público alvo' },
  { href: '#galeria', texto: 'Galeria' },
  { href: '#equipe', texto: 'Nossa equipe' },
  { href: '#contato', texto: 'Contato' },
]

export function Header() {
  const { ativo: menuAberto, alternar, fechar } = useToggle(false)
  const { autenticado, usuario, sair } = useAuth()
  const { pathname } = useLocation()

  const naHome = pathname === '/'

  function aoSair() {
    fechar()
    sair()
    // Em paginas publicas o usuario continua onde esta; se estiver no painel,
    // o guarda <RotaPrivada> leva para a tela de login.
  }

  return (
    <header className="fixed inset-x-0 top-0 z-100 bg-white shadow-[0_4px_20px_rgba(16,20,63,0.10)]">
      <div className="h-[10px] bg-gradient-to-r from-roxo to-azul" />

      <Container className="flex h-[90px] items-center justify-between">
        <Link to="/" onClick={fechar} className="flex items-center gap-3 no-underline">
          <img src={logo} alt="Modo Estudante" className="h-12 w-12" />
          <span className="hidden font-titulo text-xl font-semibold tracking-wide text-azul uppercase sm:block">
            Modo Estudante
          </span>
        </Link>

        <nav className="flex items-center">
          {/* Botao do menu hamburguer: aparece apenas abaixo de 900px */}
          <button
            type="button"
            onClick={alternar}
            aria-expanded={menuAberto}
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            className="cursor-pointer border-0 bg-transparent p-0 lg:hidden"
          >
            <img src={menuIcone} alt="" className="h-[26px] w-[26px]" />
          </button>

          <ul
            className={`absolute top-[100px] right-4 left-4 z-10 m-0 grid list-none overflow-hidden rounded-lg border border-[#e4e4ee] bg-white p-0 shadow-[0_16px_40px_rgba(16,20,63,0.15)] transition-[max-height] duration-250 sm:right-6 sm:left-6 lg:static lg:max-h-none lg:auto-cols-max lg:grid-flow-col lg:items-center lg:gap-6 lg:overflow-visible lg:rounded-none lg:border-0 lg:shadow-none xl:gap-8 ${
              menuAberto ? 'max-h-[460px]' : 'max-h-0'
            }`}
          >
            {naHome &&
              secoes.map((secao) => (
                <li key={secao.href}>
                  <a
                    href={secao.href}
                    onClick={fechar}
                    className="block border-b border-[#eee] px-5 py-4 text-[15px] font-semibold text-azul no-underline transition-colors hover:bg-lilas-claro hover:text-roxo lg:border-0 lg:p-0 lg:pb-1 lg:hover:bg-transparent lg:hover:border-b-2 lg:hover:border-roxo"
                  >
                    {secao.texto}
                  </a>
                </li>
              ))}

            {autenticado ? (
              <>
                <li>
                  <Link
                    to="/painel"
                    onClick={fechar}
                    className="block border-b border-[#eee] px-5 py-4 text-[15px] font-semibold text-azul no-underline transition-colors hover:bg-lilas-claro hover:text-roxo lg:border-0 lg:p-0 lg:pb-1 lg:hover:bg-transparent"
                  >
                    Meu painel
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={aoSair}
                    title={usuario?.nome}
                    className="w-full cursor-pointer border-0 bg-transparent px-5 py-4 text-left text-[15px] font-semibold text-roxo transition-colors hover:bg-lilas-claro lg:w-auto lg:rounded lg:border-2 lg:border-roxo lg:px-4 lg:py-2 lg:hover:bg-roxo lg:hover:text-white"
                  >
                    Sair
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  onClick={fechar}
                  className="block px-5 py-4 text-[15px] font-semibold text-roxo no-underline transition-colors hover:bg-lilas-claro lg:rounded lg:border-2 lg:border-roxo lg:px-4 lg:py-2 lg:hover:bg-roxo lg:hover:text-white"
                >
                  Entrar
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
