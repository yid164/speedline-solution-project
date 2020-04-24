<script>
    /**
     * Marker's object
     */
    export default {
        name: "Markers",

        /**
         * Markers should be stored in an array
         */
        props: {
            markers: Array,
        },

        /**
         * Get maps
         */
        computed: {
            map() {
                return this.$parent.map;
            },
            google() {
                return this.$parent.google;
            },
        },

        /**
         * get each markers in lat and long
         */
        mounted() {
            this.markers.forEach(marker => {
                const { Marker, LatLng } = this.google.maps;
                new Marker({
                    title: marker.name,
                    position: new LatLng(marker.lat, marker.long),
                    map: this.map,
                });
            });
        },
        render() {
            return null;
        }
    }
</script>

<style scoped>

</style>
