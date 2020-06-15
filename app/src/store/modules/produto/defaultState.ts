import { IStateProduto } from '@/interfaces'

const defaultState = (): IStateProduto => ({
  id: 0,
  nome: '',
  descricao: '',
  categoria: '',
  tamanho: 0,
  unidade: '',
  valor: 0,
  tempo_preparo: 0
})

export default defaultState
