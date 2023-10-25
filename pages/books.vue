<template>
  <section>
    <Notification :message="error" v-if="error" />
    <div class="flex px-6">
      <div class="w-full">
        <BookList :user="loggedInUser" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, useRouter } from "@nuxtjs/composition-api";

export default defineComponent({
  auth: "guest",
  setup() {
    const loggedInUser = computed(() => {
      return localStorage.getItem("username");
    });
    if (loggedInUser.value === "null") {
      const router = useRouter();
      router.push("/");
    }
    const error = "";
    return { error, loggedInUser };
  },
});
</script>
