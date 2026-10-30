# Modo Estudante — JOVI

Sprint 4 — **Front-End Design + Web Development** (FIAP).

Evolução da landing page entregue na Sprint 03: a mesma solução da Challenge, agora
integrada ao **React**, estilizada com **Tailwind CSS**, com **rotas públicas e privadas**,
**hooks customizados** e **consumo de API**.

O Modo Estudante é uma iniciativa da JOVI que reúne, em um só lugar, tudo o que o estudante
precisa para organizar a rotina acadêmica: tarefas, prazos, matérias e materiais de estudo.

---

## Links da entrega

| Item | Link |
| --- | --- |
| Repositório Git | _preencher com a URL do repositório_ |
| Deploy na Vercel | _preencher com a URL gerada pela Vercel_ |

> Os dois links ainda precisam ser preenchidos: o deploy depende da conta Vercel da equipe.
> O passo a passo está na seção [Deploy na Vercel](#deploy-na-vercel).

---

## Tecnologias utilizadas

| Tecnologia | Versão | Para que serve no projeto |
| --- | --- | --- |
| [React](https://react.dev/) | 19 | Componentização da landing page e das telas internas |
| [React Router DOM](https://reactrouter.com/) | 7 | Rotas públicas (`/`, `/login`) e privadas (`/painel`) |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Toda a estilização e a responsividade do projeto |
| [Vite](https://vite.dev/) | 7 | Servidor de desenvolvimento e build de produção |
| Node.js | 20 ou superior | Ambiente necessário para rodar o projeto |

Não há back-end próprio: a API é **mockada no front-end** (detalhes em
[Consumo de API](#consumo-de-api)).

---

## Como executar o projeto

### Pré-requisitos

- **Node.js 20 ou superior** — confira com `node -v`. Download: <https://nodejs.org>
- **npm** (já vem junto com o Node) — confira com `npm -v`

### 1. Instalar as dependências

Na raiz do projeto (a pasta onde está o `package.json`):

```bash
npm install
```

### 2. Executar em modo de desenvolvimento

```bash
npm run dev
```

O terminal mostra o endereço local — por padrão **<http://localhost:5173>**.
Abra esse endereço no navegador.

### 3. Gerar e testar a build de produção

```bash
npm run build     # gera a pasta dist/
npm run preview   # serve a build em http://localhost:4173
```

### Como executar os servidores (back-end)

**O projeto não possui back-end.** Basta rodar `npm run dev` (ou `npm run preview`) — nenhum
outro servidor precisa ser iniciado, nenhum banco de dados precisa ser configurado e não há
variáveis de ambiente obrigatórias. Os dados vêm da API mockada descrita abaixo.

---

## Usuários e senhas para teste

A rota `/painel` é **privada**: sem login, o usuário é redirecionado para `/login`.

| E-mail | Senha |
| --- | --- |
| `aluno@fiap.com.br` | `123456` |

A credencial também aparece escrita na própria tela de login, para facilitar o teste.
A sessão fica salva no `localStorage` do navegador, então ela continua ativa mesmo depois de
recarregar a página — o botão **Sair**, no cabeçalho, encerra a sessão.

---

## Rotas da aplicação

| Rota | Tipo | Descrição |
| --- | --- | --- |
| `/` | Pública | Landing page do Modo Estudante (evolução da Sprint 03) |
| `/login` | Pública | Autenticação do estudante |
| `/painel` | **Privada** | Painel com tarefas, filtros e progresso por matéria |
| `*` | Pública | Página 404 para endereços inexistentes |

A proteção fica em `src/routes/RotaPrivada.jsx`: o componente lê o contexto de autenticação e,
se não houver usuário logado, devolve um `<Navigate to="/login">` guardando a rota de origem —
assim, depois do login o usuário volta para onde tentou entrar.

---

## Consumo de API

As telas não usam dados fixos no JSX: elas pedem os dados a `src/services/api.js`.

- **Por padrão** a API é **mockada localmente** (`src/services/mockData.js`). As funções
  devolvem `Promise` com latência simulada, exatamente como uma requisição de rede — por isso
  os estados de *carregando* e de *erro* aparecem na tela de verdade.
- **Opcionalmente**, basta criar um arquivo `.env` na raiz com a URL de um recurso externo
  (MockAPI.io, por exemplo) para que as mesmas funções passem a consumir HTTP real, **sem
  alterar nenhum componente**:

  ```env
  VITE_API_URL=https://SEU-PROJETO.mockapi.io/api/v1
  ```

| Função | Onde é usada | Recurso |
| --- | --- | --- |
| `api.getEquipe()` | Seção "Nossa equipe" (pública) | `equipe` |
| `api.getTarefas()` | Painel privado | `tarefas` |
| `api.getMaterias()` | Painel privado | `materias` |
| `api.login()` | Tela de login | — |
| `api.enviarContato()` | Formulário de contato | — |

---

## Estrutura de pastas

```
src/
├── assets/                  imagens da landing page
├── components/
│   ├── home/                seções da landing page (Hero, Solucao, Galeria, Equipe...)
│   ├── layout/              Header, Footer e Layout compartilhado pelas rotas
│   ├── painel/              componentes da área logada (CardResumo, ItemTarefa...)
│   └── ui/                  componentes reutilizáveis (Button, Container, SectionTitle...)
├── context/
│   └── AuthContext.jsx      estado global do usuário autenticado
├── hooks/                   hooks customizados (a lógica do projeto)
├── pages/                   uma página por rota
├── routes/
│   └── RotaPrivada.jsx      guarda das rotas privadas
├── services/                camada de API (api.js + mockData.js)
├── App.jsx                  mapa de rotas
├── main.jsx                 ponto de entrada
└── index.css                Tailwind + tokens da identidade visual
```

### Componentização e props

Os componentes são genéricos e recebem o conteúdo por **props**, em vez de repetir HTML:

- `<Button variante="solido" | "vazado" | "claro" to="/painel">` — vira `<button>`, `<a>` ou
  `<Link>` conforme as props recebidas;
- `<SectionTitle titulo="..." claro>` — cabeçalho padrão das seções;
- `<CardPublico imagem titulo descricao>` e `<ItemTarefa tarefa aoAlternar>` — renderizados em
  `.map()` sobre os dados.

### Hooks

**Hooks nativos:** `useState`, `useEffect`, `useContext`, `useCallback`, `useMemo` e `useRef`.

**Hooks customizados** — toda a lógica fica separada da parte visual:

| Hook | Responsabilidade |
| --- | --- |
| `useFetch` | Ciclo de vida das requisições: carregando / dados / erro / recarregar |
| `useAuth` | Acesso ao contexto de autenticação |
| `useLocalStorage` | Espelha um estado do React no `localStorage` (mantém o login) |
| `useForm` | Formulários controlados: valores, envio, erro e sucesso |
| `useTarefas` | Regra do painel: busca, filtros, concluir/reabrir e o resumo |
| `useToggle` | Abertura do menu hambúrguer |

---

## Responsividade

O layout foi mantido fiel ao da Sprint 03 e validado em três larguras:

- **Desktop (≥ 1024px):** menu horizontal, "A solução" em duas colunas, cards em 3 colunas;
- **Tablet (768px – 1023px):** menu hambúrguer, cards em 2 colunas;
- **Mobile (< 768px):** tudo em coluna única, botões do topo ocupando a largura inteira e a
  marca ao lado do logo oculta para não espremer o cabeçalho.

Os tamanhos de título e os espaçamentos usam `clamp()`, então acompanham a tela de forma
contínua, sem saltos entre os breakpoints.

---

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Acesse <https://vercel.com>, clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta o Vite automaticamente. Se precisar confirmar:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Clique em **Deploy** e aguarde. A URL gerada deve ser colada na tabela
   [Links da entrega](#links-da-entrega).

O arquivo `vercel.json` já está incluído com o *rewrite* de SPA — é ele que faz
`/painel` e `/login` funcionarem ao serem abertos direto pela URL ou recarregados (F5).

---

## Uso de Inteligência Artificial no projeto

A IA (Claude, da Anthropic) foi utilizada como apoio na etapa de **migração da landing page
estática da Sprint 03 para a arquitetura React desta Sprint 4**. Na prática, ela ajudou a
recortar o HTML e o CSS originais em componentes reutilizáveis, a converter as classes CSS
escritas à mão para as utilitárias do Tailwind CSS mantendo a identidade visual já aprovada,
a estruturar os hooks customizados que separam a lógica da camada visual e a escrever esta
documentação. Todas as decisões de produto — a solução da Challenge, o público alvo, os
textos, a identidade visual e as funcionalidades do painel do estudante — foram definidas
pela equipe, e todo o código gerado foi revisado e testado pelos integrantes antes de entrar
no projeto. A IA não foi usada para gerar conteúdo da proposta nem substituiu a autoria do
trabalho: atuou como ferramenta de apoio à refatoração e à documentação.

---

## Integrantes

| Nome completo | RM |
| --- | --- |
| Renan Carlos Silva Bonanno | RM573043 |
| Murillo Dourado Vieira | RM571912 |
| Gabriel Do Santos Perine Tardelli | RM569751 |
| André Peixoto Cano | RM570429 |
| Leonardo Yuiti Hidifira | RM569519 |
