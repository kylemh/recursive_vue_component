<template>
  <div class="location-display">
    <p>{{ address, company }}</p>
  </div>
</template>

<script>
export default {
  name: 'LocationDisplay',
  props: {
    address: String,
    company: String,
  },
}
</script>

<style>
</style>
