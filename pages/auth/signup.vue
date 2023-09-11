<template>
    <div class="d-flex justify-center auth-height align-center">
        <v-card width="300" class="px-5 py-5">
            <v-form v-model="isFormValid" @submit.prevent="submit">
                <v-text-field
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
                ></v-text-field>

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

                <v-btn :disabled="!isFormValid" block class="mt-2" type="submit" color="primary">Submit</v-btn>
            </v-form>
        </v-card>
    </div>
</template>  
  
<script>
import {required, email, min} from '@/helpers/validators'

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
    isFormValid: false
}),
computed: {
    passwordConfirmationRule() {
        return () => (this.password === this.rePassword) || 'Password must match'
    },
},
methods: {
    submit () {
        if(this.isFormValid){
            console.log(this.firstName);
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