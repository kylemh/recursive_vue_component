<template>
  <div class="nested-dropdown">
    <!-- Always Visible -->
    <b-button
      v-b-toggle="componentID"
      variant="primary"
      class="d-flex align-items-center"
      @click="buttonClickFunction()"
      block
    >
      <span><b>{{ name }}</b>  -  {{ color }}</span>
    </b-button>

    <!-- Rendered After Click -->
    <b-collapse :id="componentID">
      <div v-if="isNotLastPath()">
        <recursive-dropdown
          v-for="child in children"
          :key="child.id"
          :name="child.name"
          :color="child.color"
          :data="child"
          :paths="childPaths"
        />
      </div>

      <div v-else>
        <location-display
          v-for="child in children"
          :key="child.id"
          :address="child.address"
          :company="child.company"
          :location="child"
        />
      </div>
    </b-collapse>
    <br />
  </div>
</template>

<script>
import LocationDisplay from './LocationDisplay';

export default {
  name: 'RecursiveDropdown',
  props: {
    name: String,
    color: String,
    data: Object,
    paths: Array,
  },
  components: {
    LocationDisplay,
  },
  data() {
    return {
      drawerIsSelected: false,
    };
  },
  computed: {
    pathItem() {
      return this.paths[0];
    },
    children() {
      return this.data[this.pathItem];
    },
    childPaths() {
      return this.paths.slice(1);
    },
    componentID() {
      return `${this.name}-${this.data.id}-${this.color}`;
    },
  },
  methods: {
    isNotLastPath() {
      return this.paths.length > 1;
    },
    buttonClickFunction() {
      this.drawerIsSelected = !this.drawerIsSelected;
      console.log(this.children);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.nested-dropdown {
  margin: 5px 15px 5px 15px;
}
</style>
