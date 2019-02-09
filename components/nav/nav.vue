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

<style lang="scss" scoped>
.nav {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
    max-width: 40rem;
    font-family: 'Techmeleon';

    &__link {
        position: relative;
        padding: 2rem 2.5rem;
    }

    &__link {
        &:after {
            content: '';
            position: absolute;
            width: 3rem;
            height: 2px;
            bottom: 1.5rem;
            left: calc(50% - 1.5rem);
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out;
        }
        &.nuxt-link-active:after {
            visibility: visible;
            transform: scaleX(1);
        }
    }
    &__link:hover {
        &::after {
            visibility: visible;
            transform: scaleX(1);
        }
    }
}
</style>
