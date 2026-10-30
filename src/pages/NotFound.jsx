import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'

/* Rota publica de fallback para qualquer endereco inexistente. */
export default function NotFound() {
  return (
    <section className="bg-lilas-claro py-[clamp(70px,12vw,130px)]">
      <Container className="text-center">
        <p className="m-0 font-titulo text-6xl font-bold text-roxo">404</p>
        <h1 className="mt-4 mb-4 font-titulo text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-azul">
          Página não encontrada
        </h1>
        <p className="mx-auto mb-8 max-w-[520px] leading-relaxed">
          O endereço acessado não existe no Modo Estudante. Volte para a página inicial para
          continuar navegando.
        </p>
        <Button to="/">Voltar para o início</Button>
      </Container>
    </section>
  )
}
