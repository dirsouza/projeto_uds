import { ActionTree } from 'vuex'
import { IRootState, IStateSacola, ISacola, IProduto, ISabor, IAdicional } from '@/interfaces'
import collect from "collect.js";

const actions: ActionTree<IStateSacola, IRootState> = {
  insertPedido ({ commit, rootGetters }): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        const produto: IProduto = rootGetters['produto/getProduto']
        const sabor: ISabor = rootGetters['sabor/getSabor']
        const adicionais: IAdicional[] = rootGetters['adicional/getAdicionais']

        const pedido: ISacola = {
          nome: produto.nome,
          tamanho: produto.tamanho,
          unidade: produto.unidade,
          sabor: sabor.nome,
          adicionais: collect(adicionais).flatMap(adc => ({
            id: adc.id,
            nome: adc.nome,
            valor: adc.valor
          })).all(),
          tempo: collect([
            produto.tempo_preparo,
            sabor.tempo_preparo
          ]).sum() as number,
          valor: produto.valor
        }
        commit('setPedido', pedido)
        commit('produto/clearProduto', null, { root: true })
        commit('sabor/clearSabor', null, { root: true })
        commit('adicional/clearAdicionais', null, { root: true })
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default actions
