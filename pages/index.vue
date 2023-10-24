<template>
  <div class="flex md:h-screen w-11/12">
    <div class="w-full">
      <Register />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Register from "@/components/Register.vue";

export default defineComponent({
  name: "App",
  layout: "auth/layout",
  components: { Register },
  setup() {
    return {};
  },
});
</script>
