<template>
  <div
    class="bg-error text-barlow text-lg text-white w-full p-4 rounded-lg mb-4"
  >
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "Notification",
  props: ["message"],
});
</script>
