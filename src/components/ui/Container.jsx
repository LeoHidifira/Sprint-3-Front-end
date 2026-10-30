/* Caixa central de 1140px (1320px em telas muito grandes), igual a Sprint 03. */
export function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[1140px] px-4 sm:px-6 2xl:max-w-[1320px] ${className}`}>
      {children}
    </div>
  )
}
