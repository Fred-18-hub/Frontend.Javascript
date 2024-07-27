<template>
  <h1>{{ title }}</h1>

  <p>Using refs:</p>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>

  <p>Using emit & slots</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal"> <!-- close is an event that is emitted fron Modal component -->
      <!-- Named slot: accessed by its name -->
      <template v-slot:links> <!-- links is name of the slot -->
        <a href="#">Sign up</a>
        <a href="#">More info</a>
      </template>
      <!-- Regular slots: accessed using the default/unmodified opening and closing slot tags -->
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </Modal>
  </div>
  <button @click.alt="toggleModal">Open modal (alt)</button> <!-- Alt is used as event modifier for click -->
  
  <p>Using teleport:</p>
  <teleport to="#modals" v-if="showModalTwo"> <!-- teleport will put this element in the specified html element -->
    <Modal theme="" @close="toggleModalTwo">
      <template v-slot:links>
        <a href="#">Login</a>
        <a href="#">Useful links</a>
      </template>
      
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </Modal>
  </teleport>
  <button @click="toggleModalTwo">Open modal two</button>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {

  name: 'App',
  components: { Modal },

  data() {
    return {
      title: "Hello Vue :)",
      header: "Sign up for the giveaway!",
      text: "Grab your first package for half the price",
      showModal: false,
      showModalTwo: false
    }
  },

  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
    },

    toggleModal() {
      this.showModal = !this.showModal
    },
    
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }

}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
