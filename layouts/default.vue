<template>
  <section class="theme-bg">
    <div class="flex flex-row justify-between p-4">
      <nuxt-link to="/">
        <img
          alt="Book.io logo image"
          src="https://cdn-edmbc.nitrocdn.com/cwhjsirvUYqaieilJZKJfDyTFhVLqZXs/assets/images/optimized/rev-a0ee7e7/book.io/wp-content/uploads/ct-logos/logo_da6731bea610a008565a9a32bbe2d671_1x.png"
      /></nuxt-link>
      <div v-if="loggedInUser" class="p-2">
        <a @click="logout" class="text-lg">Logout &rarr;</a>
      </div>
    </div>
    <div class="flex flex-auto justify-center">
      <Nuxt />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  auth: "guest",
  setup() {
    const loggedInUser = computed(() => {
      return localStorage.getItem("username");
    });
    return { loggedInUser };
  },
  methods: {
    async logout() {
      localStorage.setItem("username", null as any);
      this.$router.push("/");
    },
  },
});
</script>
