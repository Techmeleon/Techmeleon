const state = () => {
    return {}
}

const mutations = {
    setServices(state, services) {
        state.services = services
    }
}

const actions = {
    nuxtServerInit(vuexContext, context) {
        const url = 'https://techmeleon-website.firebaseio.com/services.json'
        return context.$axios
            .$get(url)
            .then(data => {
                vuexContext.commit('setServices', data)
                console.log('Commited') //eslint-disable-line
            })
            .catch(e => {
                context.error(e)
            })
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
