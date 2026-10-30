/*
 * Cabecalho padrao das secoes: a barra roxa da identidade visual, o titulo e
 * um texto de apoio opcional. `claro` inverte as cores nas secoes escuras.
 */
export function SectionTitle({ titulo, children, claro = false, className = '' }) {
  return (
    <div className={className}>
      <div className="mb-5 h-[22px] w-[168px] bg-roxo" />
      <h2
        className={`mb-5 font-titulo text-[clamp(1.6rem,4vw,2.25rem)] leading-tight font-bold ${
          claro ? 'text-white' : 'text-azul'
        }`}
      >
        {titulo}
      </h2>
      {children && (
        <p
          className={`mb-10 max-w-[640px] leading-relaxed ${
            claro ? 'text-white/85' : 'text-cinza-texto'
          }`}
        >
          {children}
        </p>
      )}
    </div>
  )
}
