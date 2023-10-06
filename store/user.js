export const state = () => ({
    user: null
})

export const getters = {
    getUser(state) {
        return state.user
    }
}

export const mutations = {
    setUser(state, data) {
        state.user = data
    }
}

export const actions = {

    async signup(_, input) {
        const { data, error } = await this.$supabase.auth.signUp(input)
        return { data, error }
    },
    async login({ commit }, input) {
        const { data, error } = await this.$supabase.auth.signInWithPassword(input)
        this.$cookies.set('user', data.user, {
            path: '/',
            maxAge: 3600,
            secure: true
        })
        commit('setUser', data.user)
        return { data, error }
    },
    async signout({ commit }) {
        const { error } = await this.$supabase.auth.signOut()
        this.$cookies.remove('user')
        commit('setUser', null)
        return { error }
    },

    async updateUser ({ commit }, input){
        const { data, error } = await this.$supabase.auth.updateUser({
            data: input
        })
        this.$cookies.set('user', data.user, {
            path: '/',
            maxAge: 3600,
            secure: true
        })
        commit('setUser', data.user)
        console.log(data);
        return { data, error }
    }
}