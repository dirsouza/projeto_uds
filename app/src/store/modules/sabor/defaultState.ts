import { IStateSabor } from '@/interfaces'

const defaultState = (): IStateSabor => ({
  id: 0,
  nome: '',
  tempo_preparo: 0
})

export default defaultState
