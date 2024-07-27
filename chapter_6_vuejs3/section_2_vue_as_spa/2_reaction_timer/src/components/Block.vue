<template>
    <div v-if="showBlock" class="block" @click="stopTimer">
        click me
    </div>
</template>

<script>

export default {
    props: [ 'delay' ],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    mounted() {
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()
        }, this.delay)
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        stopTimer() {
            clearInterval(this.timer)
            this.$emit('end', this.reactionTime)
        }
    }
}
</script>

<style>
    .block {
        background: #0faf87;
        width: 400px;
        color: white;
        text-align: center;
        margin: 40px auto;
        padding: 100px 0;
        border-radius: 20px;
    }
</style>