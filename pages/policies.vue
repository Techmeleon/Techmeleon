<template>
    <div class="page">
        <header class="policy__header">
            <h1 class="header__title">
                Policies
            </h1>

            <nav class="policy__links">
                <nuxt-link
                    v-for="policy in policies"
                    :key="policy.route"
                    :to="'/policies/' + policy.route"
                    class="nav__link"
                >
                    <span>{{ policy.title }}</span>
                </nuxt-link>
            </nav>
        </header>

        <nuxt-child />
    </div>
</template>

<script>
export default {
    data() {
        return {
            policies: [
                {
                    title: 'Cookies',
                    route: 'cookie-policy'
                },
                {
                    title: 'Privacy',
                    route: 'privacy-policy'
                }
            ]
        }
    },
    head() {
        const page = this.$store.getters['pages/page']('Policies')[0]
        return {
            titleTemplate: page.pageTitle,
            meta: page.meta
        }
    }
}
</script>
