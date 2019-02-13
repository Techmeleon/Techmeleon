const state = () => ({
    list: []
})

const mutations = {}

const actions = {}

const getters = {
    solution: state => {
        return keyword =>
            state.solutions.filter(item => {
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
