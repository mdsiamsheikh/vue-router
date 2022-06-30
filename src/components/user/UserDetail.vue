<template>
     <div>
        <h3>Some User Details</h3>
        <p>UsEr loded ID: {{ $route.params.id }}</p>
        <router-link 
        tag="button" 
        :to="link"
        class="btn btn-primary">Edit User</router-link>
     </div>
    
</template>

<script>
 export default {
    data() {
       return {
          link: 
          { name: 'UserEdit', 
          params: { 
             id: this.$route.params.id 
             }, 
             query: { 
                locale: 'en', 
                q: 100 
             },
             hash: '#deta' 
          }
       }
    },
    beforeRouteEnter(to, from, next) {
       // eslint-disable-next-line no-constant-condition
       if (true) {
          next();
       } else {
          next(false);
       }
    }
 }
</script>