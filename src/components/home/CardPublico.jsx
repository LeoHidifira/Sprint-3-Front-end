/* Card de publico alvo. Recebe imagem, titulo e descricao por props. */
export function CardPublico({ imagem, titulo, descricao }) {
  return (
    <article className="grid grid-rows-[auto_1fr] overflow-hidden rounded-lg bg-white shadow-[0_12px_30px_rgba(16,20,63,0.08)]">
      <div
        className="h-[190px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imagem})` }}
        role="img"
        aria-label={titulo}
      />
      <div className="p-6">
        <h3 className="mb-2 font-titulo text-[1.375rem] font-semibold text-azul">{titulo}</h3>
        <p className="leading-relaxed">{descricao}</p>
      </div>
    </article>
  )
}
