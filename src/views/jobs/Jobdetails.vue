<template>
    <div>
<h1>Job details page </h1>
<p>Route parameters {{id}}</p>
    </div>
</template>

<script>
    export default {
        props:['id']
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // },
    }
</script>

<style lang="scss" scoped>

</style>