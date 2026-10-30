import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import { Container } from '../ui/Container'
import { SectionTitle } from '../ui/SectionTitle'

const telas = [
  { id: 1, imagem: slide1, legenda: 'Captura da Imagem', alt: 'Tela do painel de rotina do Modo Estudante' },
  { id: 2, imagem: slide2, legenda: 'Análise da IA', alt: 'Tela de acompanhamento de atividades do Modo Estudante' },
  { id: 3, imagem: slide3, legenda: 'Opções Inteligentes', alt: 'Tela de materiais de estudo do Modo Estudante' },
]

export function Galeria() {
  return (
    <section id="galeria" className="py-[clamp(56px,9vw,90px)]">
      <Container>
        <SectionTitle titulo="Galeria">Protótipo do modo estudante</SectionTitle>

        <div className="grid gap-[clamp(18px,3vw,26px)] sm:grid-cols-2 lg:grid-cols-3">
          {telas.map((tela) => (
            <figure key={tela.id} className="m-0 overflow-hidden rounded-lg bg-azul">
              <img
                src={tela.imagem}
                alt={tela.alt}
                className="block h-[clamp(260px,42vw,460px)] w-full bg-azul object-contain"
              />
              <figcaption className="p-4 text-center font-semibold text-white">
                {tela.legenda}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
