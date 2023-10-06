<template>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="$emit('toggleDrawer')" />
      <v-spacer />
      
      <MenuProfile />
    </v-app-bar>
</template>
