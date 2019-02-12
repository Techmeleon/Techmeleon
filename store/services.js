const state = {
    services: []
}

const mutations = {}

const actions = {}

const getters = {
    services: state => {
        return state.services
    },
    service: state => {
        return keyword =>
            state.services.filter(item => {
                return item.route === keyword
            })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
