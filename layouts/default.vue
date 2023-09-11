<template>
  <v-app>
    <NavDrawer :drawer="drawer" />
    
    <Header @toggleDrawer="drawer = !drawer"  />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import NavDrawer from '~/components/NavDrawer.vue';

export default {
    name: 'DefaultLayout',
    data() {
        return {
            drawer: true
        };
    },
    components: { NavDrawer }
}
</script>
