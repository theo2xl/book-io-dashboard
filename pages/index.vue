<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, computed, useRouter } from "@nuxtjs/composition-api";

export default defineComponent({
  auth: "guest",
  setup() {
    // Use index as an auth guard
    const router = useRouter();
    const loggedInUser = computed(() => {
      return localStorage.getItem("username");
    });
    if (loggedInUser.value === "null") {
      router.push("/login");
    } else router.push("/books");
    return {};
  },
});
</script>
