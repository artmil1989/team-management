<template>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="$emit('toggleDrawer')" />
      <v-spacer />
      <v-btn color="primary" @click="logout"> Log out </v-btn>
    </v-app-bar>
</template>

<script>
  import {mapActions} from "vuex"
  export default {
    methods: {
    ...mapActions({
      signout: 'user/signout'
    }),
    logout(){
      this.signout();
      this.$router.push('/auth/signin')
    }
   }
  }
</script>