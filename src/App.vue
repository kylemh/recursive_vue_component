<template>
  <div id="app">
    <h1>Recursive, Nested Collapse</h1>
    <img src="./assets/logo.png">
    <h2>Vue.js</h2>

    <br />

    <!--
      NOTE: In `paths` you don't want to pass the top level
      of your nested data. Simply pass everything below it!
     -->
    <recursive-nested-collapse
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
import RecursiveNestedCollapse from './components/RecursiveNestedCollapse';

export default {
  name: 'app',
  created() {
    this.fetchData();
  },
  computed: {
    states() {
      return this.$store.state.states;
    },
  },
  components: {
    RecursiveNestedCollapse,
  },
  methods: {
    ...mapActions(['fetchData']),
  },
};
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
