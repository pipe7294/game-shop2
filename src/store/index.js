import { createStore } from 'vuex'
import juegos from "./juegos.json"

export default createStore({
  state: {
    juegos
  },
  getters: {
  },
  mutations: {
    setJuegos(state, juegos) {
      state.juegos = juegos
    }
  },
  actions: {
    incrementar(context, i) {
      context.state.juegos[i].stock = context.state.juegos[i].stock + 1
      context.commit("setJuegos", context.state.juegos)
    },
    decrementar(context, i) {
      context.state.juegos[i].stock = context.state.juegos[i].stock - 1
      context.commit("setJuegos", context.state.juegos)
    }
  },
  modules: {
  }
})
