<template>
    <div id = "google-maps">
        <template v-if="!!this.google && !!this.map">
            <slot/>
        </template>
    </div>
</template>

<script>
    /**
     * Maps object
     */
    // import the google maps lib
    import GoogleMapsApiLoader from 'google-maps-api-loader';
    export default {

        // name
        name: "Map",

        // mapConfig: Google Map config object
        // apiKey: my personal api key required by Google Maps
        props: {
            config: Object,
            apiKey: String,
        },
        // initial values for google and map to null
        data() {
            return {
                google: null,
                map: null,
            };
        },

        // Hook instantiate a googleMapAPI and map object from the API and set the values of google and map to created instances
        mounted() {
            GoogleMapsApiLoader({
                apiKey: this.apiKey
            }).then((google) => {
                this.google = google;
                this.initializeMap();
            });
        },
        methods: {
            initializeMap() {
                const mapContainer = this.$el;
                const { Map } = this.google.maps;
                this.map = new Map(mapContainer, this.config);
            },
        },
    }
</script>

<style scoped>
    #google-maps {
        height: 100vh;
        width: 100%;
    }
</style>
