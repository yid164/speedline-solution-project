<template>
  <div id="root-app">
    <Map
            :config="mapConfig"
            api-key="AIzaSyB9ueAgek6q0ZdoGUuAfg6rKHCoATQgaIA">
      <Markers :markers="mapMarkers"/>
    </Map>
  </div>
</template>

<script>
  /**
   * Import the Map and Markers
   */
  import Map from './components/GoogleMaps/Map';
  import Markers from './components/GoogleMaps/Markers';

  /**
   * Load the map and markers
   */
  export default {
    components: {
      Map,
      Markers,
    },

    /**
     * Set up the data in the required cities.
     * Required cities: Dease Lake, Fort Nelson, Terrace, Prince George, Whistler, Revelstoke, Creston, BC Province
     * Center city is Abbotsford BC
     * @returns {{mapMarkers: [{name: string, lat: number, long: number}, {name: string, lat: number, long: number}, {name: string, lat: number, long: number}], mapConfig: {center: {lng: number, lat: number}, zoom: number}}}
     */
    data() {
      return {
        /**
         * Abbotsford
         * 49.05, -122.316667
         */
        mapConfig: {
          zoom: 4,
          center: {
            lat: 49.05,
            lng: -122.316667
          },
        },
        /**
         * The list of the required cities
         */
        mapMarkers: [
          // Dease Lake, geo:58.633333,-130.066667
          {
            name: 'Dease Lake',
            lat: 58.633333,
            long: -130.066667,
          },

          // Fort Nelson, geo:58.805917,-122.696472
          {
            name: 'Fort Nelson',
            lat: 58.805917,
            long: -122.696472,
          },

          // Terrace, geo:54.516389,-128.599722
          {
            name: 'Terrace',
            lat: 54.516389,
            long: -128.599722,
          },

          // Terrace, geo:54.516389,-128.599722
          {
            name: 'Terrace',
            lat: 54.516389,
            long: -128.599722,
          },

          // Prince George, geo:53.916944,-122.749444
          {
            name: 'Prince George',
            lat: 53.916944,
            long: -122.749444,
          },

          // Whistler, geo:50.120833,-122.954444
          {
            name: 'Whistler',
            lat: 50.120833,
            long: -122.954444,
          },

          // Revelstoke, geo:50.998056,-118.195556
          {
            name: 'Revelstoke',
            lat: 50.998056,
            long: -118.195556,
          },

          // Creston, geo:49.09,-116.51
          {
            name: 'Revelstoke',
            lat: 49.09,
            long: -116.51,
          }
        ],
      };
    },
  }
</script>

<style>

</style>
