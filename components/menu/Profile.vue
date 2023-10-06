<template>
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            icon
            outlined
          >
            <v-icon>mdi-ambulance</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="goto(item.to)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  
  <script>

import {mapActions} from "vuex"

  export default {
    data: () => ({
      items: [
        { 
            title: 'Profile',
            to: '/profile'
        },
        { 
            title: 'Log out'

        }
      ],
    }),   
    methods: {
        ...mapActions({
            signout: 'user/signout'
        }),
        logout(){
            this.signout();
            this.$router.push('/auth/signin')
        },
        goto(to){
            if(to){
                this.$router.push(to)
            }else{
                this.logout();
            }
        }
    }
  }
</script>