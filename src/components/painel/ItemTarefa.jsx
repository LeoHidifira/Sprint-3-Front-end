/* Linha de tarefa do painel. A acao de concluir chega por props do Painel. */

const coresPrioridade = {
  alta: 'bg-red-100 text-red-700',
  media: 'bg-amber-100 text-amber-700',
  baixa: 'bg-emerald-100 text-emerald-700',
}

const rotulosPrioridade = { alta: 'Alta', media: 'Média', baixa: 'Baixa' }

/** Converte "2026-11-05" para "05/11/2026" sem depender do fuso do navegador. */
function formatarData(prazo) {
  const [ano, mes, dia] = prazo.split('-')
  return `${dia}/${mes}/${ano}`
}

export function ItemTarefa({ tarefa, aoAlternar }) {
  return (
    <li className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-[#e4e4ee] bg-white p-5 shadow-[0_8px_20px_rgba(16,20,63,0.05)]">
      <div className="min-w-[220px] flex-1">
        <h3
          className={`mb-1 font-titulo text-lg font-semibold ${
            tarefa.concluida ? 'text-cinza-texto line-through' : 'text-azul'
          }`}
        >
          {tarefa.titulo}
        </h3>
        <p className="m-0 text-sm text-cinza-texto">
          {tarefa.materia} · entrega em {formatarData(tarefa.prazo)}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            coresPrioridade[tarefa.prioridade] ?? coresPrioridade.baixa
          }`}
        >
          {rotulosPrioridade[tarefa.prioridade] ?? tarefa.prioridade}
        </span>

        <button
          type="button"
          onClick={() => aoAlternar(tarefa.id)}
          className={`cursor-pointer rounded border-2 px-4 py-2 text-sm font-semibold transition-colors ${
            tarefa.concluida
              ? 'border-[#ccced9] bg-transparent text-cinza-texto hover:border-roxo hover:text-roxo'
              : 'border-roxo bg-roxo text-white hover:border-roxo-escuro hover:bg-roxo-escuro'
          }`}
        >
          {tarefa.concluida ? 'Reabrir' : 'Concluir'}
        </button>
      </div>
    </li>
  )
}
