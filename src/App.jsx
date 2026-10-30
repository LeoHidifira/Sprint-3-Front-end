import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { RotaPrivada } from './routes/RotaPrivada'
import Home from './pages/Home'
import Login from './pages/Login'
import Painel from './pages/Painel'
import NotFound from './pages/NotFound'

/* Mapa de rotas da aplicacao: publicas e privadas. */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Rotas publicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Rotas privadas: passam pelo guarda de autenticacao */}
        <Route element={<RotaPrivada />}>
          <Route path="/painel" element={<Painel />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
