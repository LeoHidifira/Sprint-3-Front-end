/* Indicador numerico do painel. Recebe rotulo, valor e sufixo por props. */
export function CardResumo({ rotulo, valor, sufixo = '' }) {
  return (
    <div className="rounded-lg border border-white/15 border-l-4 border-l-roxo bg-white/5 px-6 py-5">
      <span className="block text-sm tracking-wider text-white/70 uppercase">{rotulo}</span>
      <strong className="mt-1 block font-titulo text-3xl font-bold text-white">
        {valor}
        {sufixo}
      </strong>
    </div>
  )
}
