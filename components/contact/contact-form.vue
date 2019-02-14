<template>
    <div class="contact-form">
        <transition name="fade" mode="out-in">
            <div
                v-if="sectionNumber === 1"
                key="1"
                class="contact-form__section"
            >
                <div class="contact-form__section__title">
                    Contact Details
                </div>

                <form class="contact-form__form">
                    <div class="contact-form__group">
                        <input
                            id="name"
                            v-model="contact.name"
                            name="name"
                            placeholder="Name*"
                            type="text"
                            required
                            class="contact-form__input"
                        >
                        <label for="name" class="contact-form__label">
                            Name*
                        </label>
                    </div>
                    <div class="contact-form__group">
                        <input
                            id="company"
                            v-model="contact.company"
                            name="company"
                            placeholder="Company"
                            type="text"
                            class="contact-form__input"
                        >
                        <label for="company" class="contact-form__label">
                            Company
                        </label>
                    </div>
                    <div class="contact-form__group">
                        <input
                            id="email"
                            v-model="contact.email"
                            name="email"
                            placeholder="Email*"
                            required
                            type="text"
                            class="contact-form__input"
                        >
                        <label for="email" class="contact-form__label">
                            Email*
                        </label>
                    </div>
                    <div class="contact-form__group">
                        <input
                            id="telephone"
                            v-model="contact.telephone"
                            type="tel"
                            pattern="[0-9]{5} [0-9]{6}"
                            maxlength="11"
                            name="telephone"
                            placeholder="Telephone"
                            class="contact-form__input"
                        >
                        <label for="telephone" class="contact-form__label">
                            Telephone
                        </label>
                    </div>
                </form>

                <div class="next">
                    <div class="back hide" @click="sectionNumber -= 1">
                        <span>Back</span>
                    </div>
                    <div class="forward" @click="sectionNumber += 1">
                        <span>Next</span>
                    </div>
                </div>
            </div>
            <div
                v-if="sectionNumber === 2"
                key="2"
                class="contact-form__section"
            >
                <div class="contact-form__section__title">
                    Project Details
                </div>
                <form class="contact-form__form">
                    <div class="contact-form__group">
                        <select
                            id="solution"
                            v-model="contact.solution"
                            name="solution"
                            placeholder="Select a solution"
                            class="contact-form__input"
                        >
                            <option value disabled selected>
                                Select a solution
                            </option>
                            <option
                                v-for="(solution, index) in getSolutions"
                                :key="index"
                                :value="solution.short"
                            >
                                {{ solution.name }}
                            </option>
                        </select>
                    </div>
                    <div class="contact-form__group">
                        <select
                            id="budget"
                            v-model="contact.budget"
                            name="budget"
                            class="contact-form__input"
                        >
                            <option value disabled selected>
                                Select your budget range
                            </option>
                            <option value="small">
                                £1,000 to £4,000
                            </option>
                            <option value="medium">
                                £4,000 to £10,000
                            </option>
                            <option value="large">
                                £10,000 +
                            </option>
                        </select>
                    </div>
                    <div class="contact-form__group textarea">
                        <textarea
                            v-model="contact.message"
                            rows="4"
                            class="contact-form__input"
                        >Describe your project and objectives</textarea>
                    </div>
                </form>
                <div class="next">
                    <div class="back" @click="sectionNumber -= 1">
                        <span>Back</span>
                    </div>
                    <div class="forward" @click="sectionNumber += 1">
                        <span>Next</span>
                    </div>
                </div>
            </div>

            <div
                v-if="sectionNumber === 3"
                key="3"
                class="contact-form__section"
            >
                <div class="contact-form__section__title">
                    Almost done!<br>Just book a callback time if you wish
                </div>
                <datetime
                    v-model="contact.date"
                    type="datetime"
                    :class="{off: contact.date !== ''}"
                    title="Pick a date & time 2"
                />
                <div class="next">
                    <div class="back" @click="sectionNumber -= 1">
                        <span>Back</span>
                    </div>
                    <div class="forward" @click="sendMail">
                        <span>Send!</span>
                    </div>
                </div>
            </div>
            <div
                v-if="sectionNumber === 4"
                key="4"
                class="contact-form__section"
            >
                <div class="please-wait" />
                <div class="contact-form__section__title finished" v-html="returnMessage" />  <!-- eslint-disable-line -->
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sectionNumber: 1,
            inprogress: false,
            contact: {
                name: '',
                company: '',
                email: '',
                telephone: '',
                solution: '',
                budget: '',
                message: '',
                date: ''
            },
            returnMessage: 'Sent!<br>We will send a confirmation Soon!'
        }
    },
    computed: {
        getSolutions() {
            return this.$store.state.solutions.list
        }
    },
    methods: {
        sendMail() {
            this.sectionNumber += 1
            if (!this.inprogress) {
                const _this = this
                const url =
                    window.location.protocol +
                    '//' +
                    window.location.hostname +
                    '/api/contact'
                this.inprogress = true
                this.$axios
                    .$post(url, { data: this.contact })
                    .then(response => {
                        console.log(response) //eslint-disable-line
                        if (response.message !== 'Success') {
                            this.returnMessage =
                                'Submission failed!<br>Please contact us directly.'
                        }
                        this.returnMessage =
                            'Sent!<br>We will send a confirmation Soon!'
                        _this.inprogress = false
                    })
                    .catch(err => {
                        this.returnMessage =
                            'Submission failed!<br>Please contact us directly.'
                        _this.inprogress = false
                        console.log(err) //eslint-disable-line
                    })
            }
        }
    }
}
</script>
