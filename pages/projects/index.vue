<template>
    <main class="page">
        <Header :title="title" :caption="caption" :summary="summary" />
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
    }
}
</script>
