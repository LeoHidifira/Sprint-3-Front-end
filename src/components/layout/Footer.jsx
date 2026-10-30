import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-azul-escuro px-5 py-12 text-center leading-loose text-white/80">
      Modo Estudante — um projeto da{' '}
      <Link to="/" className="font-semibold text-white no-underline hover:underline">
        JOVI
      </Link>
      <br />
      Desenvolvido por{' '}
      <Link to="/" className="font-semibold text-white no-underline hover:underline">
        Pixel Analytics
      </Link>
    </footer>
  )
}
