export const actions = {
    async nuxtServerInit (_, context) {
        console.log(context);
        const user = context.app.$cookies.get('user');
        if (user) {
            context.store.commit('user/setUser', user);
        }
    }
}