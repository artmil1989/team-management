<template>
    <div class="d-flex justify-center auth-height align-center">
        <v-card width="300" class="px-5 py-5">
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

                <v-btn :disabled="!isFormValid" :loading="loading" block class="mt-2" type="submit" color="primary">Login</v-btn>
                <div class="mt-2 error--text">{{ errorMessage }}</div>
            </v-form>
        </v-card>
    </div>
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