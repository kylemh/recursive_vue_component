<template>
  <div id="app">
    <img src="./assets/logo.png">

    <recursive-dropdown
      v-for="state in states"
      :key="state.id"
      :name="state.name"
      :color="state.color"
      :data="state"
      :paths="['cities', 'locations']"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import RecursiveDropdown from './components/RecursiveDropdown'

export default {
  name: 'app',
  created() {
    this.fetchData();
  },
  computed: {
    states() {
      return this.$store.state.states;
    }
  },
  components: {
    RecursiveDropdown
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
