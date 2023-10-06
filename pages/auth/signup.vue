<template>
    <v-card class="px-10" color="transparent" elevation="0">
        <v-form v-model="isFormValid" @submit.prevent="submit">
            <!-- <v-text-field
                v-model="firstName"
                :rules="rules.required"
                label="First Name"
                outlined
            ></v-text-field>

            <v-text-field
                v-model="lastName"
                :rules="rules.required"
                label="Last Name"
                outlined
            ></v-text-field> -->

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

            <v-text-field
                v-model="rePassword"
                :rules="[...rules.min, passwordConfirmationRule]"
                label="re-Password"
                :type="showPassword ? 'text' : 'password'"
                outlined
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
            ></v-text-field>

            <v-btn :disabled="!isFormValid" :loading="loading" block class="mt-2" type="submit" color="primary">Submit</v-btn>
        </v-form>
    </v-card>
</template>  
  
<script>
import {required, email, min} from '@/helpers/validators'
import {mapActions} from "vuex"

export default {
name: 'signUp',
layout: 'auth',
data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
    showPassword: false,
    rules: {
        required,
        email,
        min
    },
    isFormValid: false,
    loading: false
}),
computed: {
    passwordConfirmationRule() {
        return () => (this.password === this.rePassword) || 'Password must match'
    },
},
methods: {
    ...mapActions({
      signup: 'user/signup'
    }),
    async submit () {
        if(this.isFormValid){
            this.loading = true;
            await this.signup({
                email: this.email,
                password: this.password
            });
            this.loading = false;
            this.$router.push('/auth/signin')
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