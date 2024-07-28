<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <p ref="p">My name is {{ name }} and my age is {{ age }}</p> -->
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>

    <h2>Refs:</h2>
    <p>{{ personOne.name }} - {{ personOne.age }}</p>
    <button @click="updatePersonOne">update personOne</button>
    <h2>Reactive:</h2>
    <p>{{ personTwo.name }} - {{ personTwo.age }}</p>
    <button @click="updatePersonTwo">update personTwo</button>

    <h2>Computed:</h2>
    <input type="text" v-model="search">
    <p>search word: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>

    <h2>Watch & WatchEffect</h2>
    <button @click="stopWatching">stop watch/watchEffect</button>
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    // let nrName = "John" // variables created this are non-reactive: values do not update in the DOM upon modification
    // let nrAge = 40  // non-reactive

    // Reactive vars: using refs
    // let p = ref(null)
    const name = ref("John")
    const age = ref(40)

    const personOne = ref({ name: "Jonas", age: 23 })
    const personTwo = reactive({ name: "James", age: 28 }) // reactive with only object types
    // const nameTwo = reactive("Jenkins") // not reactive because of primitive value

    const handleClick = () => {
      // nrAge = 20  // update does not reflect in DOM
      // console.log(p, p.value);

      name.value = "Jake"
      age.value = 20
    }

    const updatePersonOne = () => {
      personOne.value.name = "Julius"
      personOne.value.age = 32
    }

    const updatePersonTwo = () => {
      personTwo.name = "Johnson"
      personTwo.age = 19
      // nameTwo = reactive("Jimmy") /* "Jimmy" */ // Error
    }

    // Computed Property
    const search = ref("")
    const names = ref(["stark", "parker", "strange", "banner", "lang", "romanof", "t'challa"])

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })

    // Watch & WatchEffect
    const stopWatch = watch(search, () => {   // runs every timme search gets updated
      console.log("watch function ran");
    })

    const stopWatchEffect = watchEffect(() => {   // runs initially when the setup() hook is fired
      console.log("watch effect function ran", search.value); // runs again when any var under its scope gets updated
    })

    const stopWatching = () => {
      stopWatch()
      stopWatchEffect()
    }

    return { name, age, handleClick, personOne, personTwo, updatePersonOne, updatePersonTwo, search, names, matchingNames, stopWatching /* p, nrName, nrAge, nameTwo */ }  // data to be used outiside the setup() function must be returned
  }
}
</script>
