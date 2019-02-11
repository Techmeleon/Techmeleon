<template>
    <div v-show="showCarousel">
        <no-ssr>
            <carousel-3d
                :width="500"
                :height="800"
                :inverse-scaling="1600"
                :space="800"
                :controls-visible="true"
                class="services"
            >
                <slide
                    v-for="(service, index) in services"
                    :key="index"
                    :index="index"
                    class="service"
                >
                    <div class="service__content">
                        <div class="service__caption u-line-highlight">
                            <span>{{ service.tag }}</span>
                        </div>
                        <div class="service__title header__title">
                            <span>{{ service.title }}</span>
                        </div>
                        <div class="service__summary">
                            <span>{{ service.summary }}</span>
                        </div>
                        <nuxt-link class="service__link btn" :to="'/services/'+ service.name">
                            <span>{{ service.name }}</span>
                        </nuxt-link>
                    </div>
                </slide>
            </carousel-3d>
        </no-ssr>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showCarousel: false,
            caroSizes: {
                width: 500,
                height: 500
            },
            services: [
                {
                    name: 'Solve',
                    tag: 'Adaptable & Effective',
                    title: 'Business Solutions',
                    summary:
                        'We can analyse your business to provide the most cost effective and efficient solutions.'
                },
                {
                    name: 'Design',
                    tag: 'Websites & Branding',
                    title: 'Creative Design',
                    summary:
                        'Partnering with you to create exciting, memorible & meaningful experiences.'
                },
                {
                    name: 'Apps',
                    tag: 'Time & Cost Saving',
                    title: 'App Development',
                    summary:
                        'Build cost efficient apps to enhance your business and increase accuracy & transparency.'
                },
                {
                    name: 'Marketing',
                    tag: 'Targeted & effective',
                    title: 'Digital Marketing',
                    summary:
                        'Leveraging SEO, social media and online marketing we can increase your leads.'
                },
                {
                    name: 'Clarity',
                    tag: 'Transparent & Essential',
                    title: 'Data Clarity',
                    summary:
                        'Transforming data into meaningful, business driven & decisioning making paths.'
                },
                {
                    name: 'Cloud',
                    tag: 'Stable & Efficent',
                    title: 'Cloud Migration',
                    summary:
                        'Futurproofing your business with flexible, scalable and most importantly secure cloud systems.'
                }
            ]
        }
    },
    mounted() {
        this.showCarousel = true
    }
}
</script>

<style lang="scss" scoped>
.service {
    opacity: 0.2 !important;
    background-color: transparent;
    border: 1px solid transparent;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
        padding: 0 2rem;
        @media (min-width: 768px) {
            padding: 0;
        }
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    &__caption {
        margin-bottom: 3rem;
    }
    &__summary {
        margin-bottom: 3rem;
    }

    &.left-1,
    &.left-2,
    &.left-3 {
        cursor: e-resize;
    }
    &.right-1,
    &.right-2,
    &.right-3 {
        cursor: w-resize;
    }

    &.current {
        opacity: 1 !important;
        cursor: ew-resize;
    }
}
</style>
