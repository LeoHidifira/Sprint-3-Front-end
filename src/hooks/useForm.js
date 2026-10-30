import { useCallback, useState } from 'react'

/**
 * Hook customizado que cuida de formularios controlados: valores, envio,
 * mensagem de sucesso e mensagem de erro. O componente fica so com o JSX.
 *
 * @param {object} valoresIniciais
 * @param {(valores: object) => Promise<any>} aoEnviar acao assincrona do submit
 */
export function useForm(valoresIniciais, aoEnviar) {
  const [valores, setValores] = useState(valoresIniciais)
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState(null)
  const [sucesso, setSucesso] = useState(null)

  /** Handler unico para todos os campos (usa o name do input). */
  const aoMudar = useCallback((evento) => {
    const { name, value } = evento.target
    setValores((anteriores) => ({ ...anteriores, [name]: value }))
  }, [])

  const limpar = useCallback(() => {
    setValores(valoresIniciais)
    setErro(null)
    setSucesso(null)
  }, [valoresIniciais])

  const submeter = useCallback(
    async (evento) => {
      evento.preventDefault()

      setEnviando(true)
      setErro(null)
      setSucesso(null)

      try {
        const resposta = await aoEnviar(valores)
        setSucesso(resposta ?? true)
        return resposta
      } catch (problema) {
        setErro(problema.message ?? 'Não foi possível concluir a ação.')
        return null
      } finally {
        setEnviando(false)
      }
    },
    [aoEnviar, valores],
  )

  return { valores, aoMudar, submeter, enviando, erro, sucesso, limpar, setValores }
}
