<template>
    <div class="who__section next-section">
        <h3 class="who__title">
            <span>{{ data.title }}</span>
        </h3>
        <h4 class="who__tag">
            <span> {{ data.tag }} </span>
        </h4>
        <div class="who__content" v-html="data.content" /> <!-- eslint-disable-line -->
        <div class="who__images">
            <img
                v-for="(image, index) in data.images"
                :key="index"
                :src="image.src"
                :alt="image.alt"
                class="who__image"
                :data-image="index"
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>
