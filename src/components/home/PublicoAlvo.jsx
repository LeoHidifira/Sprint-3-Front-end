import f3 from '../../assets/f3.jpg'
import f4 from '../../assets/f4.jpg'
import f5 from '../../assets/f5.avif'
import { Container } from '../ui/Container'
import { SectionTitle } from '../ui/SectionTitle'
import { CardPublico } from './CardPublico'

/* Conteudo da secao — cada item vira um <CardPublico> via props. */
const publicos = [
  {
    id: 'ensino-medio',
    imagem: f3,
    titulo: 'Ensino médio',
    descricao:
      'Alunos que lidam com várias matérias, provas e trabalhos e estão começando a construir uma rotina de estudos própria.',
  },
  {
    id: 'vestibulandos',
    imagem: f4,
    titulo: 'Vestibulandos',
    descricao:
      'Estudantes em preparação para vestibulares e ENEM, que precisam de disciplina, metas claras e acompanhamento constante.',
  },
  {
    id: 'universitarios',
    imagem: f5,
    titulo: 'Universitários',
    descricao:
      'Quem concilia faculdade, estágio e projetos e busca uma forma leve de organizar prazos e materiais.',
  },
]

export function PublicoAlvo() {
  return (
    <section id="publico" className="bg-lilas-claro py-[clamp(56px,9vw,90px)]">
      <Container>
        <SectionTitle titulo="Público alvo">
          O Modo Estudante foi pensado para quem precisa equilibrar muitas frentes de estudo ao
          mesmo tempo e quer manter tudo sob controle.
        </SectionTitle>

        <div className="grid gap-[clamp(20px,3vw,30px)] sm:grid-cols-2 lg:grid-cols-3">
          {publicos.map((publico) => (
            <CardPublico
              key={publico.id}
              imagem={publico.imagem}
              titulo={publico.titulo}
              descricao={publico.descricao}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
