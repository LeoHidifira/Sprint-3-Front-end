import f1 from '../../assets/f1.jpg'
import f2 from '../../assets/f2.png'
import { Button } from '../ui/Button'
import { SectionTitle } from '../ui/SectionTitle'

export function Solucao() {
  return (
    <section id="solucao" className="grid items-stretch lg:grid-cols-2">
      <div className="px-[clamp(20px,7vw,80px)] py-[clamp(40px,7vw,80px)]">
        <SectionTitle titulo="A solução" />

        <p className="mb-5 leading-relaxed">
          O Modo Estudante concentra recursos e informações importantes da vida acadêmica em uma
          única plataforma. Em vez de espalhar tarefas, prazos e materiais por vários aplicativos e
          cadernos, o estudante acompanha tudo em um espaço organizado e prático.
        </p>

        <p className="mb-5 leading-relaxed">
          A proposta é simples: usar a tecnologia para deixar a experiência de estudo mais acessível
          e eficiente, incentivando a organização e dando mais autonomia para o aluno cuidar das
          próprias responsabilidades.
        </p>

        <Button href="#publico" variante="vazado" className="mt-5">
          Ver para quem é
        </Button>
      </div>

      <div className="grid sm:grid-cols-2">
        <div
          className="min-h-[clamp(220px,38vw,420px)] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(58,16,120,.25), rgba(58,16,120,.25)), url(${f1})`,
          }}
        />
        <div
          className="min-h-[clamp(220px,38vw,420px)] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(16,20,63,.25), rgba(16,20,63,.25)), url(${f2})`,
          }}
        />
      </div>
    </section>
  )
}
