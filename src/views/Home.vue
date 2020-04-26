<template>
  <div class="home">
    <GMaps></GMaps>
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
