import { api } from '../../services/api'
import { useFetch } from '../../hooks/useFetch'
import { Container } from '../ui/Container'
import { SectionTitle } from '../ui/SectionTitle'
import { Carregando, Erro } from '../ui/StatusMensagem'

/*
 * Secao publica que consome a API: a lista de integrantes deixa de ser HTML
 * fixo e passa a vir de api.getEquipe(), tratada pelo hook useFetch.
 */
export function Equipe() {
  const { dados: integrantes, carregando, erro, recarregar } = useFetch(() => api.getEquipe())

  return (
    <section
      id="equipe"
      className="bg-gradient-to-br from-roxo-escuro to-azul py-[clamp(56px,9vw,90px)]"
    >
      <Container>
        <SectionTitle titulo="Nossa equipe" claro>
          O Modo Estudante é desenvolvido por um time da JOVI que une tecnologia e educação para
          criar ferramentas úteis no dia a dia dos estudantes.
        </SectionTitle>

        {carregando && <Carregando texto="Carregando integrantes..." claro />}

        {erro && <Erro mensagem={erro} aoTentarNovamente={recarregar} claro />}

        {integrantes && (
          <ul className="m-0 grid list-none auto-rows-fr gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {integrantes.map((integrante) => (
              <li
                key={integrante.id}
                className="grid content-start gap-1.5 rounded-lg border border-white/15 border-l-4 border-l-roxo bg-white/5 px-6 py-5"
              >
                <span className="font-titulo text-[19px] font-semibold text-white">
                  {integrante.nome}
                </span>
                <span className="text-sm tracking-wider text-white/70">{integrante.rm}</span>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  )
}
