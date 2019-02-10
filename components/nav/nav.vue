<template>
    <nav class="nav">
        <nuxt-link
            v-for="nav in navlinks.others"
            v-show="nav.show"
            :key="nav.path"
            class="nav__link"
            :to="nav.path"
        >
            <span>{{ nav.name }}</span>
        </nuxt-link>
    </nav>
</template>

<script>
export default {
    props: {
        navlinks: {
            type: Object,
            required: true
        }
    }
}
</script>
