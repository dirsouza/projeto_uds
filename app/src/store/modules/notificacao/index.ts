import { Module } from 'vuex'
import { IStateNotificacao, IRootState } from '@/interfaces'
import defaultState from '@/store/modules/notificacao/defaultState'
import getters from '@/store/modules/notificacao/getters'
import mutations from '@/store/modules/notificacao/mutations'
import actions from '@/store/modules/notificacao/actions'

const state = defaultState()

export const notificacao: Module<IStateNotificacao, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
