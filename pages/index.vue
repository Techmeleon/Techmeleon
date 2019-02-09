<template>
    <main class="page" @mousemove="coords">
        <header class="header">
            <Logo class="logo right" />
            <section class="hero">
                <img src="~/assets/logo/Logo.svg" alt="logo" class="hero__logo">
                <h1><Techmeleon class="techmeleon" /></h1>
                <h2 class="statement">
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

        <app-footer class="next-page" :next-page="{title: 'Services', link: '/services'}" />
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
            if (
                typeof e.clientX !== 'undefined' ||
                typeof e.touches[0] !== 'undefined'
            ) {
                this.x = e.clientX || e.touches[0].clientX
                this.y = e.clientY || e.touches[0].clientY
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

    & .techmeleon {
        font-size: 5rem;

        @include respond('ipad') {
            font-size: 7rem;
        }
    }

    & .statement {
        font-size: 2rem;
        margin-bottom: 2rem;

        @include respond('ipad') {
            font-size: 2.5rem;
            margin-bottom: 4rem;
        }
    }

    &__logo {
        width: 15rem;
        height: auto;

        @include respond('ipadPro') {
            width: 20rem;
        }
    }
}

.services {
    position: relative;
    overflow: hidden;
    height: 100vh;
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

    @include respond('ipad') {
        width: 90%;
        top: 50%;
    }
}
</style>
