<template>
    <div :class="theme">
        <div class="app">
            <Transition />
            <div class="navigation" :class="{hide: nav.hide.now && !nav.open}">
                <NavHome />
                <Nav :navlinks="nav.navlinks" />
                <NavContact />
                <NavToggle
                    :open="nav.open"
                    @toggle="nav.open = !nav.open"
                />
            </div>
            <NavSlide
                :navlinks="nav.navlinks"
                :open="nav.open"
                @toggle="nav.open = !nav.open"
            />
            <nuxt />
        </div>
    </div>
</template>
<script>
import Nav from '~/components/nav/nav'
import NavHome from '~/components/nav/nav-home'
import NavContact from '~/components/nav/nav-contact'
import NavToggle from '~/components/nav/nav-toggle'
import NavSlide from '~/components/nav/nav-slide'
import Transition from '~/components/transition'

export default {
    components: {
        Nav,
        NavHome,
        NavContact,
        NavToggle,
        NavSlide,
        Transition
    },
    data() {
        return {
            theme: 'dark',
            nav: {
                open: false,
                hide: {
                    prevScrollPosition: 10000,
                    now: false
                },
                navlinks: {
                    home: {
                        name: 'Home',
                        path: '/',
                        show: true
                    },
                    others: [
                        {
                            name: 'Projects',
                            path: '/projects',
                            show: true
                        },
                        {
                            name: 'Services',
                            path: '/services',
                            show: true
                        },
                        {
                            name: 'Who',
                            path: '/about',
                            show: true
                        }
                    ],
                    contact: {
                        name: 'Contact',
                        show: true
                    }
                }
            }
        }
    },
    mounted() {
        window.onscroll = this.hideOnScroll
    },
    methods: {
        hideOnScroll() {
            const currentScrollPos = window.pageYOffset
            const direction =
                currentScrollPos > this.nav.hide.prevScrollPosition // false = up, true = down

            if (direction === false || currentScrollPos < 75) {
                this.nav.hide.now = false
            } else {
                this.nav.hide.now = true
            }
            this.nav.hide.prevScrollPosition = currentScrollPos
        }
    }
}
</script>

<style lang="scss" scoped>
.navigation {
    position: fixed;
    display: flex;
    justify-content: space-between;
    height: 7rem;
    width: 100%;
    z-index: 99;
    align-items: center;
    transition: 0.5s transform;
    padding: 0 3rem;

    &.hide {
        transform: translateY(-100%);
    }
}
</style>
