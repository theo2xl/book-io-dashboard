<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div v-if="hasFavorite(favorite)" class="row-span-2">
        <Favorite :favorite="favorite" />
      </div>
      <div v-else class="justify-center mx-8 py-10 row-span-2">
        <h1>
          <span class="text-teal-600 dark:text-teal-300"
            >Hello {{ user }}.</span
          >
          Please select your favorite book from our collection.
        </h1>
      </div>
      <div v-for="book in books" :key="book.id">
        <div @click="handleFavorite(book.id)">
          <div class="flex flex-row">
            <h3 class="pr-2" v-show="hasFavorite(favorite) === book.id">⭐️</h3>
            <h3>{{ book.title }}</h3>
          </div>
          <div>
            <h4>{{ book.author }}</h4>
          </div>
          <img :src="book.cover_url" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import Book from "@/types/Book";
import Favorite from "@/components/Favorite.vue";
import getBook from "@/utils/getBook";

export default defineComponent({
  components: { Favorite },
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  setup() {
    const error = "";
    const favorite = ref<Book>() as any;

    const hasFavorite = (favorite: Book | undefined) => {
      return !!favorite?.id ? favorite.id : false;
    };

    return {
      hasFavorite,
      error,
      favorite,
    };
  },
  data() {
    return {
      books: new Array<Book>(),
    };
  },
  async mounted() {
    try {
      // Get all the books
      const {
        data: { books },
      } = await this.$axios.$get("books");
      this.books = books;

      // Get the favorites
      const {
        data: { favorites },
      } = await this.$axios.$get(`users/${this.user}/favorites`);

      const id: string = favorites.book;
      this.favorite = getBook(id, this.books);
    } catch (e) {
      console.warn("Uh, oh. Looks like something went wrong.", e);
    }
  },
  methods: {
    async handleFavorite(id: string) {
      try {
        const {
          data: { message },
        } = await this.$axios.post(`users/${this.user}/favorites`, {
          book: id,
        });

        console.log(message);
        if (message === `success`) {
          this.favorite = getBook(id, this.books);
        }
      } catch (e) {
        console.warn("Uh, oh. Looks like something went wrong.", e);
      }
    },
  },
});
</script>
