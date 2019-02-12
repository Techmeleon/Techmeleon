<template>
    <main class="page" @mousemove="coords">
        <header class="header">
            <section class="hero">
                <div class="hero__logo"><Logo class="logo" :x="x" :y="y" :activate-the-eye="true"/></div>
                <h1><Techmeleon class="header__big" /></h1>
                <h2 class="header__statement">
                    Using the right technology<br>to enhance your business<br>
                </h2>
            </section>

            <div class="under-construction bottom">
                Our website is currently under construction while we prioritise clients.
            </div>
            <app-scroll-to el=".services" />
        </header>
        <section class="services">
            <Logo class="logo left" :x="x" :y="y" :activate-the-eye="true" />

            <div class="services__container">
                <Services />
            </div>
            <app-scroll-to el=".featured" />
        </section>
        <section class="featured">
            <Featured />
        </section>

        <app-footer class="next-page" :next-page="{title: 'Solutions', link: '/services'}" />
    </main>
</template>

<script>
import Logo from '~/components/Logo'
import Techmeleon from '~/components/Techmeleon'
import Services from '~/components/services/services'
import Featured from '~/components/projects/featured'

export default {
    components: {
        Logo,
        Techmeleon,
        Services,
        Featured
    },
    data() {
        return {
            x: 0,
            y: 0,
            scrollY: 0
        }
    },
    head() {
        const page = this.$store.getters['pages/page']('Landing')[0]
        return {
            titleTemplate: page.pageTitle,
            meta: page.meta
        }
    },
    mounted() {
        document.addEventListener('mousemove', this.coords)
        document.addEventListener('touchstart', this.coords)
        document.addEventListener('touchmove', this.coords)
        console.log(this.page('Landing')[0]) //eslint-disable-line
    },
    destroyed() {
        document.removeEventListener('mousemove', this.coords)
        document.removeEventListener('touchstart', this.coords)
        document.removeEventListener('touchmove', this.coords)
    },
    methods: {
        coords(e) {
            if (e.type === 'mousemove') {
                if (!isNaN(e.clientX) && !isNaN(e.clientY)) {
                    this.x = e.clientX
                    this.y = e.clientY
                }
            }
            if (e.type === 'touchstart' || e.type === 'touchmove') {
                if (
                    !isNaN(e.touches[0].clientX) &&
                    !isNaN(e.touches[0].clientY)
                ) {
                    this.x = e.touches[0].clientX
                    this.y = e.touches[0].clientY
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/abstracts/_mixins.scss';

.header {
    position: relative;
    overflow: hidden;
    height: 100vh;
}

.hero {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    letter-spacing: 1px;
    width: 30rem;

    @include respond('ipad') {
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 50rem;
    }

    &__logo {
        width: 15rem;
        height: 22rem;
        margin: 0 auto;
        position: relative;

        @include respond('ipadPro') {
            width: 20rem;
        }
    }
}

.services {
    position: relative;
    overflow: hidden;
    height: 100vh;

    @include respond('ipadPro') {
        // height: 75vh;
    }
}

.featured {
    position: relative;
    overflow: hidden;
    height: 100vh;
}

.services__container {
    width: 100%;
    max-width: 120rem;
    display: inline-block;
    text-align: center;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;

    @include respond('Galaxy') {
        top: 50%;
    }

    @include respond('400') {
        width: 90%;
    }
}
</style>
