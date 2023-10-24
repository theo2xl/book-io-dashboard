<template>
  <div class="flex md:h-screen w-11/12">
    <div class="w-full">
      <Login />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Login from '@/components/Login.vue'
export default defineComponent({
  name: 'App',
  layout: 'auth/layout',
  components: { Login },
  setup() {
    return {}
  },
})
</script>
