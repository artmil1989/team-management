<template>
  <div>
    {{ counter }}
    <v-btn @click="setCounter(1000)"> increament </v-btn>
    {{ user }}
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  name: 'IndexPage',
  middleware: ['user-auth'],
  data() {
    return {
      events: []
    }
  },
  computed: {
    ...mapGetters({
      counter: 'general/getCounter',
      user: 'user/getUser',
    })
  },
  methods: {
    ...mapActions({
      increment: 'general/incrementCounter',
      setCounter: 'general/setCounter'
    })
  },
  async created(){
    
    let { data, error } = await this.$supabase
      .from('events')
      .select('*')
    this.events = data
  }
}
</script>
