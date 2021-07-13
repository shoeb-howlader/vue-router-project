<template>
    <div>
<h1>Job details page </h1>
<p>Route parameters {{id}}</p>
<div v-if="job">
  <h2>job title: {{job.title}}</h2>
  <p>job id : {{job.id}}</p>
  <p> job details: {{job.details}}</p>  
</div>
<div v-else>
    <p>loading job details .....</p>
</div>

    </div>
</template>

<script>
    export default {
        props:['id'],
        data() {
            return {
                job: null
            }
        },
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // },
        mounted () {
            fetch(`http://localhost:3000/jobs/${this.id}`)
            .then((res)=>{ return res.json()

            })
            .then((data)=>{
                this.job=data;
                console.log(data);
            })
            .catch((err)=>{
                console.log(err)
            });
        },
    }
</script>

<style lang="scss" scoped>

</style>