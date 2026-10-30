import { useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import bg3 from '../assets/bg3.jpg'
import { useAuth } from '../hooks/useAuth'
import { useForm } from '../hooks/useForm'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'

const estiloCampo =
  'w-full rounded border border-[#ccced9] px-3.5 py-3 text-[15px] outline-0 focus:border-roxo'

/*
 * Rota publica de autenticacao. Depois do login o usuario volta para a pagina
 * privada que tentou acessar (state.de) ou cai direto no painel.
 */
export default function Login() {
  const { entrar, autenticado } = useAuth()
  const navegar = useNavigate()
  const { state } = useLocation()

  const destino = state?.de ?? '/painel'

  const autenticar = useCallback((valores) => entrar(valores), [entrar])

  const { valores, aoMudar, submeter, enviando, erro } = useForm(
    { email: '', senha: '' },
    autenticar,
  )

  // Assim que o contexto marca o usuario como autenticado, redireciona.
  useEffect(() => {
    if (autenticado) navegar(destino, { replace: true })
  }, [autenticado, destino, navegar])

  return (
    <section
      className="bg-cover bg-center py-[clamp(56px,9vw,90px)]"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(38,6,79,.92), rgba(8,10,36,.92)), url(${bg3})`,
      }}
    >
      <Container className="grid items-center gap-[clamp(32px,5vw,50px)] lg:grid-cols-2">
        <div className="text-white">
          <div className="mb-5 h-[22px] w-[168px] bg-roxo" />
          <h1 className="mb-5 font-titulo text-[clamp(2rem,5vw,3rem)] leading-tight font-bold text-white">
            Área do estudante
          </h1>
          <p className="max-w-[460px] leading-relaxed text-white/85">
            Entre para acompanhar suas tarefas, prazos e o progresso de cada matéria no painel do
            Modo Estudante.
          </p>
        </div>

        <form
          onSubmit={submeter}
          className="grid content-start gap-4 rounded-xl bg-white p-[clamp(24px,4vw,34px)]"
        >
          <h2 className="m-0 font-titulo text-2xl font-semibold text-azul">Entrar</h2>

          <label className="grid gap-2 text-sm font-semibold text-azul">
            E-mail
            <input
              type="email"
              name="email"
              required
              autoComplete="username"
              value={valores.email}
              onChange={aoMudar}
              placeholder="aluno@fiap.com.br"
              className={estiloCampo}
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-azul">
            Senha
            <input
              type="password"
              name="senha"
              required
              autoComplete="current-password"
              value={valores.senha}
              onChange={aoMudar}
              placeholder="••••••"
              className={estiloCampo}
            />
          </label>

          {erro && <p className="m-0 text-sm font-semibold text-red-600">{erro}</p>}

          <Button type="submit" disabled={enviando}>
            {enviando ? 'Entrando...' : 'Entrar'}
          </Button>

          <p className="m-0 rounded border border-dashed border-[#ccced9] p-3 text-sm leading-relaxed text-cinza-texto">
            Acesso de teste: <strong>aluno@fiap.com.br</strong> / senha <strong>123456</strong>
          </p>
        </form>
      </Container>
    </section>
  )
}
