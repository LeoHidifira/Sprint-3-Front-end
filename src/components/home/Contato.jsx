import { useCallback } from 'react'
import bg2 from '../../assets/bg2.jpg'
import { api } from '../../services/api'
import { useForm } from '../../hooks/useForm'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionTitle } from '../ui/SectionTitle'

const contatos = ['contato@jovi.com.br', '(00) 0000-0000', '@modoestudante']

const estiloCampo =
  'w-full rounded border border-[#ccced9] px-3.5 py-3 text-[15px] outline-0 focus:border-roxo'

export function Contato() {
  // useCallback mantem a mesma referencia da acao entre renders do formulario.
  const enviar = useCallback((valores) => api.enviarContato(valores), [])

  const { valores, aoMudar, submeter, enviando, erro, sucesso } = useForm(
    { nome: '', email: '', mensagem: '' },
    enviar,
  )

  return (
    <section
      id="contato"
      className="bg-cover bg-center py-[clamp(56px,9vw,90px)]"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(38,6,79,.92), rgba(8,10,36,.92)), url(${bg2})`,
      }}
    >
      <Container className="grid items-start gap-[clamp(32px,5vw,50px)] lg:grid-cols-[1fr_1.1fr]">
        <div className="text-white">
          <SectionTitle titulo="Contato" claro>
            Quer saber mais sobre o Modo Estudante ou levar o projeto para a sua escola? Fale com a
            gente.
          </SectionTitle>

          <ul className="m-0 grid list-none gap-2.5 p-0">
            {contatos.map((contato) => (
              <li key={contato} className="font-semibold break-words text-white/90">
                {contato}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={submeter}
          className="grid content-start gap-4 rounded-xl bg-white p-[clamp(24px,4vw,34px)]"
        >
          <label className="grid gap-2 text-sm font-semibold text-azul">
            Nome
            <input
              type="text"
              name="nome"
              value={valores.nome}
              onChange={aoMudar}
              placeholder="Seu nome"
              className={estiloCampo}
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-azul">
            E-mail
            <input
              type="email"
              name="email"
              value={valores.email}
              onChange={aoMudar}
              placeholder="voce@email.com"
              className={estiloCampo}
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-azul">
            Mensagem
            <textarea
              name="mensagem"
              rows="4"
              value={valores.mensagem}
              onChange={aoMudar}
              placeholder="Como podemos ajudar?"
              className={`${estiloCampo} resize-y`}
            />
          </label>

          {erro && <p className="m-0 text-sm font-semibold text-red-600">{erro}</p>}

          {sucesso && (
            <p className="m-0 text-sm font-semibold text-green-700">
              Mensagem enviada! Protocolo {sucesso.protocolo}.
            </p>
          )}

          <Button type="submit" disabled={enviando} className="justify-self-start">
            {enviando ? 'Enviando...' : 'Enviar mensagem'}
          </Button>
        </form>
      </Container>
    </section>
  )
}
