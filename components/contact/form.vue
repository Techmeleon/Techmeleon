<template>
    <div class="contact-form">
        <transition name="slide">
            <div
                v-show="sectionNumber === 1"
                class="contact-form__section"
            >
                <div class="contact-form__section__title">
                    Contact Details
                </div>

                <form>
                    <input type="text" placeholder="name" required>
                    <input type="text" placeholder="company">
                    <input type="email" placeholder="email" required>
                    <input type="text" placeholder="telephone">
                </form>
            </div>
            <div
                v-show="sectionNumber === 2"
                class="contact-form__section"
            >
                <div class="contact-form__section__title">
                    Project Details
                </div>

                <form>
                    <select required name="project_type" tabindex="-1">
                        <option value disabled selected>
                            Select a service
                        </option>
                        <option value="coding">
                            Web Development
                        </option>
                        <option value="design">
                            Design and user experience
                        </option>
                        <option value="branding">
                            Branding
                        </option>
                    </select>
                    <input type="text" placeholder="Select your budget range">
                    <textarea value="Describe your project and objectives" />
                    <input type="date" placeholder="">
                    <input type="time" placeholder="">
                </form>
            </div>

            <div
                v-show="sectionNumber === 3"
                class="contact-form__section"
            >
                <div class="contact-form__section__title">
                    Confirmation
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sectionNumber: 1
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-form {
    &__section {
        &__title {
            text-align: left;
        }
    }
}
</style>
