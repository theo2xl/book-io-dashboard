<template>
  <div>
    <div>
      <div class="border-2 border-teal-300 rounded-lg p-4 bg-teal-200">
        <h3>⭐️ Your Favorite Book</h3>
        <div>
          <h3>{{ favorite?.title }}</h3>
        </div>
        <div>
          <h4>{{ favorite?.author }}</h4>
        </div>
        <img :src="favorite?.cover_url" />
        <div>
          <p class="description">
            {{ favorite?.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import Book from "@/types/Book";

export default defineComponent({
  props: {
    favorite: {
      type: Object as PropType<Book> | undefined,
    },
  },
  setup() {},
});
</script>
