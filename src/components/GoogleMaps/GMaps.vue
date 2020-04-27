<template>
    <div>
        <gmap-map
                :center="center"
                :zoom="4.5"
                style="width: 100%; height: 600px">
            <gmap-marker
                    :key="index"
                    v-for="(marker, index) in markers"
                    :position="marker.position"
                    :clickable="true"
                    :draggable="false"
                    :label="marker.label"
                    @click="openWindow(marker.position, marker.weather)"

            />
            <gmap-info-window
                    @closeclick="weatherOpened=false"
                    :opened="weatherOpened"
                    :position="weatherWindows"
            >
                <span v-html="this.weather_info"></span>
            </gmap-info-window>
        </gmap-map>

        <table>
            <thead>
            <tr></tr>
            </thead>
            <tbody>
            <tr></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {

                /**
                 * Center Map, I will use Abbotsford location: 49.05, -122.316667
                 */
                center: {lat: 49.05, lng: -122.316667},

                /**
                 * Markers
                 */
                markers: [
                    //Dease Lake, geo:58.633333,-130.066667
                    {
                        label: "Dease Lake",
                        position: {lat: 58.633333, lng: -130.066667},
                        weather: "<iframe title=\"Environment Canada Weather\" width=\"287px\" height=\"191px\" src=\"https://weather.gc.ca/wxlink/wxlink.html?cityCode=bc-14&amp;lang=e\" allowtransparency=\"true\" frameborder=\"0\"></iframe>"
                    },

                    //Fort Nelson, geo:58.805917,-122.696472
                    {
                        label: "Fort Nelson",
                        position: {lat: 58.805917, lng: -122.696472},
                        weather: "<iframe title=\"Environment Canada Weather\" width=\"287px\" height=\"191px\" src=\"https://weather.gc.ca/wxlink/wxlink.html?cityCode=bc-83&amp;lang=e\" allowtransparency=\"true\" frameborder=\"0\"></iframe>"
                    },

                    //Terrace, geo:54.516389,-128.599722
                    {
                        label: "Terrace",
                        position: {lat: 54.516389, lng: -128.599722},
                        weather: "<iframe title=\"Environment Canada Weather\" width=\"287px\" height=\"191px\" src=\"https://weather.gc.ca/wxlink/wxlink.html?cityCode=bc-80&amp;lang=e\" allowtransparency=\"true\" frameborder=\"0\"></iframe>"
                    },

                    //Prince George, geo:53.916944,-122.749444
                    {
                        label: "Prince George",
                        position: {lat: 53.916944, lng: -122.749444},
                        weather: "<iframe title=\"Environment Canada Weather\" width=\"287px\" height=\"191px\" src=\"https://weather.gc.ca/wxlink/wxlink.html?cityCode=bc-79&amp;lang=e\" allowtransparency=\"true\" frameborder=\"0\"></iframe>"
                    },

                    //Whistler, geo:50.120833,-122.954444
                    {
                        label: "Whistler",
                        position: {lat: 50.120833, lng: -122.954444},
                        weather: "<iframe title=\"Environment Canada Weather\" width=\"287px\" height=\"191px\" src=\"https://weather.gc.ca/wxlink/wxlink.html?cityCode=bc-86&amp;lang=e\" allowtransparency=\"true\" frameborder=\"0\"></iframe>"
                    },

                    // Revelstoke, geo:50.998056,-118.195556
                    {
                        label: "Revelstoke",
                        position: {lat: 50.998056, lng: -118.195556},
                        weather: "<iframe title=\"Environment Canada Weather\" width=\"287px\" height=\"191px\" src=\"https://weather.gc.ca/wxlink/wxlink.html?cityCode=bc-65&amp;lang=e\" allowtransparency=\"true\" frameborder=\"0\"></iframe>"
                    },
                    // Creston, geo:49.09,-116.51
                    {
                        label: "Creston",
                        position: {lat: 49.09, lng: -116.51},
                        weather: "<iframe title=\"Environment Canada Weather\" width=\"287px\" height=\"191px\" src=\"https://weather.gc.ca/wxlink/wxlink.html?cityCode=bc-26&amp;lang=e\" allowtransparency=\"true\" frameborder=\"0\"></iframe>"
                    }

                ],

                // weather windows position
                weatherWindows: null,

                // if the weather windows is opened
                weatherOpened: false,

                // weather info
                weather_info: null,
            }
        },
        methods: {

            // open weather position method
            openWindow (position, weather) {
                console.log(this);
                this.weatherOpened = true;
                this.weatherWindows = position;
                this.weather_info = weather;
            }
        }
    }
</script>
