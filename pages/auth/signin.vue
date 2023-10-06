<template>
    <v-card class="px-10" color="transparent" elevation="0">
        <div class="font-weight-bold my-5">Welcome back to TeamU</div>
        <div class="my-5">Continue with Google or enter your details</div>
        <v-btn block x-large outlined> <img width="24px" class="mr-2" height="24px" src="/logo-google.png" />Login with Google</v-btn>
        <v-divider class="my-5" />
        <v-form v-model="isFormValid" @submit.prevent="submit">
            
            <v-text-field
                v-model="email"
                :rules="rules.email"
                label="Email"
                outlined
            ></v-text-field>

            <v-text-field
                v-model="password"
                :rules="rules.min"
                label="Password"
                :type="showPassword ? 'text' : 'password'"
                outlined
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
            ></v-text-field>
            <div class="font-weight-bold">Forgot password</div>
            <v-btn :disabled="!isFormValid" :loading="loading" block class="mt-2" type="submit" color="primary">Login</v-btn>
            <div class="mt-2 error--text">{{ errorMessage }}</div>
        </v-form>
        <div>Don’t have an account? <nuxt-link class="font-weight-bold" to="/auth/signup">Sign up here</nuxt-link></div>
    </v-card>
</template>  
  
<script>
import {required, email, min} from '@/helpers/validators'
import {mapActions} from "vuex"

export default {
name: 'signUp',
layout: 'auth',
data: () => ({
    email: '',
    password: '',
    showPassword: false,
    rules: {
        required,
        email,
        min
    },
    isFormValid: false,
    loading: false,
    errorMessage: ''
}),
methods: {
    ...mapActions({
      login: 'user/login'
    }),
    async submit () {
        if(this.isFormValid){
            this.loading = true;
            const { data, error } = await this.login({
                email: this.email,
                password: this.password
            });
            this.loading = false;
            if (!error) {
                this.$router.push('/')
            } else{
                const err = JSON.parse(JSON.stringify(error))

                this.errorMessage = err.message
            }
            
        }
    }
}
}
</script>
  
<style>
.auth-height {
    height: 100vh;
}
</style>