/*
 * Feedback de carregamento e de erro das chamadas de API.
 * Usado tanto na secao publica da equipe quanto no painel privado.
 */

export function Carregando({ texto = 'Carregando...', claro = false }) {
  return (
    <div
      className={`flex items-center gap-3 py-6 font-semibold ${
        claro ? 'text-white/80' : 'text-cinza-texto'
      }`}
      role="status"
    >
      <span
        className={`h-5 w-5 animate-spin rounded-full border-2 border-t-transparent ${
          claro ? 'border-white' : 'border-roxo'
        }`}
      />
      {texto}
    </div>
  )
}

export function Erro({ mensagem, aoTentarNovamente, claro = false }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-4 rounded-lg border p-5 ${
        claro ? 'border-white/25 bg-white/10 text-white' : 'border-red-200 bg-red-50 text-red-700'
      }`}
      role="alert"
    >
      <span className="font-semibold">{mensagem}</span>

      {aoTentarNovamente && (
        <button
          type="button"
          onClick={aoTentarNovamente}
          className="cursor-pointer rounded border border-current px-4 py-2 text-sm font-semibold transition-colors hover:opacity-80"
        >
          Tentar novamente
        </button>
      )}
    </div>
  )
}
