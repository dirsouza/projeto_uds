import { GetterTree } from 'vuex'
import { IStateSacola, IRootState, ISacola } from '@/interfaces'
import collect from "collect.js";

const getters: GetterTree<IStateSacola, IRootState> = {
  getSacola (state): ISacola[] {
    return state.pedidos
  },

  getValorTotal (state): number {
    return collect([
      collect(state.pedidos).sum('valor'),
      collect(state.pedidos).map(p => {
        return {
          valor: collect(p.adicionais).sum('valor')
        }
      }).sum('valor')
    ]).sum() as number
  },

  getTempoTotal (state): string {
    const total = collect(state.pedidos).sum('tempo') as number
    const hora = parseInt(`${total / 60}`)
    const minuto = total % 60

    return hora > 0 ? `${hora}h${minuto}min` : `${total}min`
  }
}

export default getters
