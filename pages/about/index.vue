<template>
    <main class="page">
        <Header :title="pageData.content.header" :caption="pageData.content.tag" :summary="pageData.content.subHeader" />

        <app-footer class="next-page" :next-page="{title: 'Contact', link: '/contact'}" />
    </main>
</template>

<script>
import Header from '~/components/header'
export default {
    components: {
        Header
    },
    data() {
        return {
            title: 'Meet Matt & James',
            caption: 'One Big Family',
            summary:
                'Forged on a 30 year friendship, we have come together to offer our knowledge & experience.'
        }
    },
    head() {
        const page = this.pageData
        return {
            titleTemplate: page.pageTitle,
            meta: page.meta
        }
    },
    computed: {
        pageData() {
            return this.$store.getters['pages/page']('Who')[0]
        }
    }
}
</script>
