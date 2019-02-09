<template>
    <section class="header">
        <Logo class="logo left" :x="x" :y="y" :activate-the-eye="true" />

        <div class="header__container">
            <div class="header__caption u-line-highlight">
                <span>{{ caption }}</span>
            </div>

            <h3 class="header__title">
                <span>{{ title }}</span>
            </h3>
            <div class="header__summary">
                <span>{{ summary }}</span>
            </div>

        </div>
        <div class="under-construction bottom">
            Our website is currently under construction while we prioritise clients.
        </div>
        <app-scroll-to el=".next-section" />
    </section>
</template>

<script>
import Logo from '~/components/Logo'
export default {
    components: {
        Logo
    },
    props: {
        caption: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            x: 0,
            y: 0
        }
    },
    mounted() {
        document.addEventListener('mousemove', this.coords)
        document.addEventListener('touchstart', this.coords)
    },
    destroyed() {
        document.removeEventListener('mousemove', this.coords)
        document.removeEventListener('touchstart', this.coords)
    },
    methods: {
        coords(e) {
            this.x = e.clientX || e.touches[0].clientX
            this.y = e.clientY || e.touches[0].clientY
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    text-align: center;
    min-height: 100vh;
    position: relative;

    &__container {
        max-width: 60rem;
        width: 90%;
        display: inline-block;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
    }

    &__caption {
        margin-bottom: 3rem;
    }
    &__summary {
        margin-bottom: 2rem;
    }
}
</style>
