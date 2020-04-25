<template>
  <div>
      <div>Pizza Maps</div>
      <GMaps></GMaps>
  </div>

</template>

<script>

    import GMaps from "@/components/GoogleMaps/GMaps";
  /**
   * Load the Gmaps
   */
  export default {
      components: {
          GMaps,
      }
  }
</script>

<style>

</style>


