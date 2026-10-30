import { Hero } from '../components/home/Hero'
import { Solucao } from '../components/home/Solucao'
import { PublicoAlvo } from '../components/home/PublicoAlvo'
import { Galeria } from '../components/home/Galeria'
import { Equipe } from '../components/home/Equipe'
import { Contato } from '../components/home/Contato'

/* Rota publica "/" — a landing page da Sprint 03 dividida em componentes. */
export default function Home() {
  return (
    <>
      <Hero />
      <Solucao />
      <PublicoAlvo />
      <Galeria />
      <Equipe />
      <Contato />
    </>
  )
}
