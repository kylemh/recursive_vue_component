<template>
  <div class="location-well">
    <b-card>
      <div class="d-flex justify-content-between align-items-center flex-row flex-wrap">
        <span><b>Company:</b> {{ company }}</span>
        <span><b>Address:</b> {{ address }}</span>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'LocationWell',
  props: {
    address: String,
    company: String,
  },
}
</script>

<style>
div .card {
  border-radius: 0;
  padding: 5px;
}

.card span {
  text-align: left;
  width: 50%;
}

@media screen and (max-width: 600px) {
  .card p {
    font-size: 14px;
  }
}

@media screen and (max-width: 500px) {
  .card p {
    font-size: 12px;
  }

  .card span {
    width: 320px;
  }
}
</style>
