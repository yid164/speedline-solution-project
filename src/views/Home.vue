<template>
  <div id="home">
    <div id="map">
      <GMaps></GMaps>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GMaps from '@/components/GoogleMaps/GMaps'

export default {
  name: 'Home',
  components: {
    GMaps
  }
}
</script>

<style>

</style>
