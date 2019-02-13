const state = () => ({
    list: []
})

const mutations = {}

const actions = {}

const getters = {
    project: state => {
        return keyword =>
            state.list.projects.filter(item => {
                return item.route === keyword
            })
    },
    front(state) {
        return state.list.filter(item => {
            return item.category === 'Featured'
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
