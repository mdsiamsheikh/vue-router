<template>
      <div> 
         <h1>The User Page</h1>
         <hr>
          <button @click="navigateToHoMe" class="btn btn-primary">Go to Home</button>
          <hr>
          <router-view></router-view>
      </div>

</template>

<script>
  export default {
      methods: {
          navigateToHoMe() {
              this.$router.push({ name: 'home'});
          }
      }
  }
</script>