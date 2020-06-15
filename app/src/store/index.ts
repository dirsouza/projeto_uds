import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLs from 'secure-ls'
import { IRootState } from '@/interfaces'
import { adicional, load, notificacao, produto, sabor, sacola } from '@/store/modules'

Vue.use(Vuex)

const ls = new SecureLs({
  isCompression: true,
  encodingType: 'aes',
  encryptionSecret: process.env.VUE_APP_VUEX_SECRET
})

const store: StoreOptions<IRootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    adicional,
    load,
    notificacao,
    produto,
    sabor,
    sacola
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key)
      }
    })
  ],
  strict: process.env.NODE_ENV === 'development',
  devtools: process.env.NODE_ENV === 'development'
}

export default new Vuex.Store<IRootState>(store)
