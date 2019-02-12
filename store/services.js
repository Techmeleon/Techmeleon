const state = () => ({
    list: []
})

const mutations = {}

const actions = {}

const getters = {
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
