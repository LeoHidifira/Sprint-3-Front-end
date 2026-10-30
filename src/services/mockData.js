/* Base de dados mockada consumida por src/services/api.js. */

export const usuarios = [
  {
    id: 1,
    nome: 'Leonardo Yuiti Hidifira',
    rm: 'RM569519',
    curso: 'Análise e Desenvolvimento de Sistemas',
    email: 'aluno@fiap.com.br',
    senha: '123456',
  },
]

export const equipe = [
  { id: 1, nome: 'Renan Carlos Silva Bonanno', rm: 'RM573043' },
  { id: 2, nome: 'Murillo Dourado Vieira', rm: 'RM571912' },
  { id: 3, nome: 'Gabriel Do Santos Perine Tardelli', rm: 'RM569751' },
  { id: 4, nome: 'André Peixoto Cano', rm: 'RM570429' },
  { id: 5, nome: 'Leonardo Yuiti Hidifira', rm: 'RM569519' },
]

export const tarefas = [
  {
    id: 1,
    titulo: 'Entregar o relatório de Banco de Dados',
    materia: 'Banco de Dados',
    prazo: '2026-11-05',
    prioridade: 'alta',
    concluida: false,
  },
  {
    id: 2,
    titulo: 'Revisar as listas de exercícios de Cálculo',
    materia: 'Cálculo I',
    prazo: '2026-11-08',
    prioridade: 'media',
    concluida: false,
  },
  {
    id: 3,
    titulo: 'Finalizar o protótipo da Sprint 4',
    materia: 'Front-End Design',
    prazo: '2026-11-12',
    prioridade: 'alta',
    concluida: true,
  },
  {
    id: 4,
    titulo: 'Ler o capítulo 3 do livro de Engenharia de Software',
    materia: 'Engenharia de Software',
    prazo: '2026-11-15',
    prioridade: 'baixa',
    concluida: false,
  },
  {
    id: 5,
    titulo: 'Resolver a lista de Estruturas de Dados',
    materia: 'Estruturas de Dados',
    prazo: '2026-11-18',
    prioridade: 'media',
    concluida: true,
  },
]

export const materias = [
  { id: 1, nome: 'Banco de Dados', professor: 'Profa. Helena Martins', progresso: 72 },
  { id: 2, nome: 'Cálculo I', professor: 'Prof. Rodrigo Alves', progresso: 45 },
  { id: 3, nome: 'Front-End Design', professor: 'Profa. Carla Nogueira', progresso: 88 },
  { id: 4, nome: 'Engenharia de Software', professor: 'Prof. Daniel Souza', progresso: 60 },
]
