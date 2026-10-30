import { api } from '../../services/api'
import { useFetch } from '../../hooks/useFetch'
import { Carregando, Erro } from '../ui/StatusMensagem'

/* Progresso por materia — segunda chamada de API do painel privado. */
export function ListaMaterias() {
  const { dados: materias, carregando, erro, recarregar } = useFetch(() => api.getMaterias())

  if (carregando) return <Carregando texto="Carregando matérias..." />
  if (erro) return <Erro mensagem={erro} aoTentarNovamente={recarregar} />

  return (
    <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
      {materias.map((materia) => (
        <li
          key={materia.id}
          className="rounded-lg border border-[#e4e4ee] bg-white p-5 shadow-[0_8px_20px_rgba(16,20,63,0.05)]"
        >
          <h3 className="mb-1 font-titulo text-lg font-semibold text-azul">{materia.nome}</h3>
          <p className="m-0 mb-3 text-sm text-cinza-texto">{materia.professor}</p>

          <div
            className="h-2 w-full overflow-hidden rounded-full bg-lilas-claro"
            role="progressbar"
            aria-valuenow={materia.progresso}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Progresso em ${materia.nome}`}
          >
            <div className="h-full rounded-full bg-roxo" style={{ width: `${materia.progresso}%` }} />
          </div>

          <span className="mt-2 block text-sm font-semibold text-roxo">
            {materia.progresso}% concluído
          </span>
        </li>
      ))}
    </ul>
  )
}
