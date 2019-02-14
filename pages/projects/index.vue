<template>
    <main class="page">
        <div class="page__top" />
        <Header :title="pageData.content.header" :caption="pageData.content.tag" :summary="pageData.content.subHeader" />
        <app-footer class="next-page" :next-page="{title: 'Who', link: '/about'}" />
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
            title: 'Projects',
            caption: 'Passionate & focused',
            summary:
                'With over 12 years experience in business analysis, development and UX design. We are here to help you achieve your goals.'
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
            return this.$store.getters['pages/page']('Projects')[0]
        }
    }
}
</script>
