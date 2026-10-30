import bg from '../../assets/bg.png'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Hero() {
  return (
    <section
      id="topo"
      className="bg-cover bg-center py-[clamp(64px,11vw,110px)]"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(38,6,79,.92), rgba(16,20,63,.92)), url(${bg})`,
      }}
    >
      <Container>
        <div className="max-w-[760px]">
          <div className="mb-5 h-[22px] w-[168px] bg-roxo" />

          <h1 className="mb-6 font-titulo text-[clamp(2.5rem,8vw,5rem)] leading-none font-bold text-white">
            Modo Estudante
          </h1>

          <p className="mb-9 text-[clamp(1rem,2.4vw,1.125rem)] leading-relaxed text-white/85">
            Uma iniciativa da JOVI para organizar a rotina acadêmica e reunir, em um só lugar, tudo
            o que o estudante precisa para estudar com mais autonomia.
          </p>

          <div className="flex flex-wrap gap-4 max-[560px]:w-full">
            <Button href="#solucao" className="max-[560px]:flex-1 max-[560px]:basis-full">
              Conhecer a solução
            </Button>
            <Button
              to="/login"
              variante="claro"
              className="max-[560px]:flex-1 max-[560px]:basis-full"
            >
              Acessar meu painel
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
