const state = () => {
    return {
        pages: []
    }
}

const mutations = {
    SET_PAGES(state, pages) {
        state.pages = pages
    }
}

const actions = {
    initPages: ({ commit }) => {
        commit('SET_PAGES', commit)
    }
}

const getters = {
    pages: state => {
        return state.pages
    },
    page: state => {
        return keyword =>
            state.name.filter(item => {
                return item.name === keyword
            })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
