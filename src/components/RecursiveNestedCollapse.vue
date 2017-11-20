<template>
  <div class="recursive-nested-collapse">
    <b-button
      v-b-toggle="componentID"
      variant="primary"
      class="d-flex align-items-center"
      :style="{ backgroundColor: color, borderRadius: borderRadius}"
      @click="expandDropdown()"
      block
    >
      <span><b>{{ name }}</b>  &nbsp;~&nbsp;  Color: {{ color.toUpperCase() }}</span>
    </b-button>

    <!-- Rendered After Click -->
    <b-collapse :id="componentID">
      <div v-if="isNotLastPath()">
        <recursive-nested-collapse
          v-for="child in children"
          :key="child.id"
          :name="child.name"
          :color="child.color"
          :data="child"
          :paths="childPaths"
        />
      </div>

      <div v-else>
        <location-well
          v-for="child in children"
          :key="child.id"
          :address="child.address"
          :company="child.company"
          :location="child"
        />
      </div>
    </b-collapse>
  </div>
</template>

<script>
import LocationWell from './LocationWell';

export default {
  name: 'RecursiveNestedCollapse',
  props: {
    name: String,
    color: String,
    data: Object,
    paths: Array,
  },
  components: {
    LocationWell,
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
    borderRadius() {
      // If selecting a city, change the button radii
      return this.drawerIsSelected && !this.paths.includes('cities') ? '15px 15px 0 0' : '5px';
    },
  },
  methods: {
    isNotLastPath() {
      return this.paths.length > 1;
    },
    expandDropdown() {
      this.drawerIsSelected = !this.drawerIsSelected;
    },
  },
};
</script>

<style>
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

.row {
  margin: 0 !important;
}

.recursive-nested-collapse {
  margin: 5px 15px 5px 15px;
}

.btn:hover,
button:hover {
  cursor: pointer;
}
</style>
