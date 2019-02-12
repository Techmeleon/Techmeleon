const state = () => {
    return {}
}

const mutations = {
    setServices(state, services) {
        state.services.list = services
    },
    setProjects(state, projects) {
        state.projects.list = projects
    },
    setPages(state, pages) {
        state.pages.list = pages
    }
}

const actions = {
    nuxtServerInit(vuexContext, context) {
        const url = 'https://techmeleon-website.firebaseio.com/'

        const getServices = () => {
            return context.$axios
                .$get(url + 'services.json')
                .then(data => {
                    vuexContext.commit('setServices', data)
                })
                .catch(e => {
                    context.error('nuxtServerInit -> getServices - >' + e)
                })
        }
        const getProjects = () => {
            return context.$axios
                .$get(url + 'projects.json')
                .then(data => {
                    vuexContext.commit('setProjects', data)
                })
                .catch(e => {
                    context.error('nuxtServerInit -> getServices -> ' + e)
                })
        }
        const getPages = () => {
            return context.$axios
                .$get(url + 'pages.json')
                .then(data => {
                    vuexContext.commit('setPages', data)
                })
                .catch(e => {
                    context.error('nuxtServerInit -> getServices -> ' + e)
                })
        }

        return Promise.all([getServices(), getProjects(), getPages()])
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
