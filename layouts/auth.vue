<template>
    <v-app>
       
      <v-main>
        <v-container fluid class="px-0 py-0 fill-height">
          
          <v-row class="mx-0" justify-content="strech">
            <v-col class="py-0 px-0" lg="4" align-self="center">
                <Nuxt />
            </v-col>
            <v-col class="py-0 px-0 d-none d-lg-block" lg="8">
                <v-img class="fullheight" src="/login-background.png"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
  
      
    </v-app>
</template>

<script>
export default {
  name: 'authLayout',
  
}
</script>

<style>
.fullheight{
  height: 100vh;
}
</style>
  