<template>
    <div>
        {{ user }}
        <v-text-field
            v-model="userData.firstName"
            :rules="rules.required"
            label="First Name"
            outlined
        ></v-text-field>

        <v-text-field
            v-model="userData.lastName"
            :rules="rules.required"
            label="Last Name"
            outlined
        ></v-text-field>
        <v-btn :loading="loading" block class="mt-2" @click="submit" color="primary">Submit</v-btn>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import {required} from '@/helpers/validators'

export default {
  name: 'ProfilePage',

  data () {
    return{
        rules: {
            required
        },
        loading: false
    }
  },
  
  computed: {
    ...mapGetters({
      user: 'user/getUser',
    }),
    userData(){
        return {...this.user.user_metadata}
    }
  },

  methods: {
    ...mapActions({
        update: 'user/updateUser'
    }),
    
    async submit () {
        this.loading = true;
        
        await this.update({
            firstName: this.userData.firstName,
            lastName: this.userData.lastName
        })

        this.loading = false;
    }
  },
}
</script>