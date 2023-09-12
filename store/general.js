export const state = () => ({
    counter: 0
  })
  
  export const getters = {
    getCounter(state) {
      return state.counter
    }
  }
  
  export const mutations = {
    increment(state) {
        state.counter++
    },
    setCounter(state, data) {
        state.counter = data
    }
  }
  
  export const actions = {
    incrementCounter({ commit }) {
      // make request
        commit('increment')
    },
    setCounter({ commit }, data) {
        // make request
        commit('setCounter', data)
    }
  }