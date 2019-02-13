<template>
    <main class="page">
        <Header :title="title" :caption="caption" :summary="summary" />

        <app-footer class="next-page" :next-page="{title: 'Projects', link: '/projects'}" />
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
            title: 'Services',
            caption: 'Adaptable & effective',
            summary:
                'With over 12 years experience in business analysis, development and UX design. We are here to help you achieve your goals.'
        }
    },
    head() {
        const page = this.$store.getters['pages/page']('Services')[0]
        return {
            titleTemplate: page.pageTitle,
            meta: page.meta
        }
    }
}
</script>
