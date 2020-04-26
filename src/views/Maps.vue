<template>
    <div class="maps">
        <GMaps></GMaps>
    </div>
</template>

<script>
    // @ is an alias to /src
    import GMaps from '@/components/GoogleMaps/GMaps'

    export default {
        name: 'Maps',
        components: {
            GMaps
        }
    }
</script>
