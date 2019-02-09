<template>
    <main class="page">
        <Header :title="title" :caption="caption" :summary="summary" />

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
    }
}
</script>
