<template>
  <div>
    {{ counter }}
    <v-btn @click="setCounter(1000)"> increament </v-btn>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters({
      counter: 'general/getCounter'
    })
  },
  methods: {
    ...mapActions({
      increment: 'general/incrementCounter',
      setCounter: 'general/setCounter'
    })
  }
}
</script>
