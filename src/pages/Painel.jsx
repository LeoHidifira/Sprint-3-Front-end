import { useEffect } from 'react'
import bg4 from '../assets/bg4.jpg'
import { useAuth } from '../hooks/useAuth'
import { useTarefas } from '../hooks/useTarefas'
import { Container } from '../components/ui/Container'
import { Carregando, Erro } from '../components/ui/StatusMensagem'
import { CardResumo } from '../components/painel/CardResumo'
import { ItemTarefa } from '../components/painel/ItemTarefa'
import { ListaMaterias } from '../components/painel/ListaMaterias'

const filtros = [
  { id: 'todas', rotulo: 'Todas' },
  { id: 'pendentes', rotulo: 'Pendentes' },
  { id: 'concluidas', rotulo: 'Concluídas' },
]

/*
 * Rota PRIVADA "/painel": so e renderizada depois do RotaPrivada liberar.
 * Toda a regra de negocio vem do hook customizado useTarefas.
 */
export default function Painel() {
  const { usuario } = useAuth()
  const { tarefas, resumo, filtro, setFiltro, alternarConclusao, carregando, erro, recarregar } =
    useTarefas()

  // Hook nativo useEffect ajustando o titulo da aba para a area logada.
  useEffect(() => {
    document.title = `Painel de ${usuario.nome.split(' ')[0]} — Modo Estudante`

    return () => {
      document.title = 'Modo Estudante — JOVI'
    }
  }, [usuario.nome])

  return (
    <>
      <section
        className="bg-cover bg-center py-[clamp(48px,8vw,80px)]"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(38,6,79,.92), rgba(16,20,63,.92)), url(${bg4})`,
        }}
      >
        <Container>
          <div className="mb-5 h-[22px] w-[168px] bg-roxo" />
          <h1 className="mb-3 font-titulo text-[clamp(1.9rem,5vw,3rem)] leading-tight font-bold text-white">
            Olá, {usuario.nome.split(' ')[0]}!
          </h1>
          <p className="mb-9 max-w-[560px] leading-relaxed text-white/85">
            {usuario.curso} · {usuario.rm}. Este é o seu painel: acompanhe as entregas da semana e o
            progresso de cada matéria.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CardResumo rotulo="Tarefas" valor={resumo.total} />
            <CardResumo rotulo="Pendentes" valor={resumo.pendentes} />
            <CardResumo rotulo="Concluídas" valor={resumo.concluidas} />
            <CardResumo rotulo="Progresso" valor={resumo.progresso} sufixo="%" />
          </div>
        </Container>
      </section>

      <section className="bg-lilas-claro py-[clamp(48px,8vw,80px)]">
        <Container>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="m-0 font-titulo text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-azul">
              Minhas tarefas
            </h2>

            <div className="flex flex-wrap gap-2">
              {filtros.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFiltro(item.id)}
                  aria-pressed={filtro === item.id}
                  className={`cursor-pointer rounded border-2 border-roxo px-4 py-2 text-sm font-semibold transition-colors ${
                    filtro === item.id
                      ? 'bg-roxo text-white'
                      : 'bg-transparent text-roxo hover:bg-roxo hover:text-white'
                  }`}
                >
                  {item.rotulo}
                </button>
              ))}
            </div>
          </div>

          {carregando && <Carregando texto="Carregando tarefas..." />}

          {erro && <Erro mensagem={erro} aoTentarNovamente={recarregar} />}

          {!carregando && !erro && tarefas.length === 0 && (
            <p className="rounded-lg border border-dashed border-[#ccced9] bg-white p-6 text-center font-semibold">
              Nenhuma tarefa neste filtro.
            </p>
          )}

          {!carregando && !erro && tarefas.length > 0 && (
            <ul className="m-0 grid list-none gap-4 p-0">
              {tarefas.map((tarefa) => (
                <ItemTarefa key={tarefa.id} tarefa={tarefa} aoAlternar={alternarConclusao} />
              ))}
            </ul>
          )}

          <h2 className="mt-12 mb-6 font-titulo text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-azul">
            Progresso por matéria
          </h2>

          <ListaMaterias />
        </Container>
      </section>
    </>
  )
}
