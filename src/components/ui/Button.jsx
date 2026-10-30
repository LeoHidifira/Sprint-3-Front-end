import { Link } from 'react-router-dom'

/*
 * Botao reutilizavel do projeto. Recebe por props a variante visual e,
 * conforme o uso, vira <button>, <a> (ancora interna) ou <Link> do router.
 */

const base =
  'inline-block rounded border-2 px-7 py-3 text-center font-semibold no-underline transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60'

const variantes = {
  solido: 'border-roxo bg-roxo text-white hover:border-roxo-escuro hover:bg-roxo-escuro',
  vazado: 'border-roxo bg-transparent text-roxo hover:bg-roxo hover:text-white',
  claro: 'border-white bg-transparent text-white hover:bg-white hover:text-roxo',
}

export function Button({
  children,
  variante = 'solido',
  href,
  to,
  className = '',
  ...resto
}) {
  const classes = `${base} ${variantes[variante] ?? variantes.solido} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...resto}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...resto}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...resto}>
      {children}
    </button>
  )
}
