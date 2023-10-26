<template>
  <section>
    <Notification :message="error" v-if="error" />
    <div>
      <h2>Login</h2>
      <form method="post" @submit.prevent="login">
        <div class="grid gap-2 mb-4 py-2">
          <div>
            <label for="username" class="label">Username</label>
            <input
              type="text"
              class="input"
              name="username"
              v-model="username"
              required
            />
          </div>
          <div>
            <label for="password" class="label">Password</label>
            <input
              type="password"
              class="input"
              name="password"
              v-model="password"
              required
            />
          </div>
        </div>
        <div>
          <button class="button" type="submit">Login</button>
        </div>
      </form>

      <nuxt-link to="/register"
        ><div>
          Don't have an account?
          <span class="link">Register</span>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import Notification from "~/components/Notification";

export default {
  components: {
    Notification,
  },

  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },

  methods: {
    async login() {
      try {
        await this.$axios.post("login", {
          username: this.username,
          password: this.password,
        });
        localStorage.setItem("username", this.username);

        this.$router.push("/books");
      } catch (e) {
        this.error =
          "Uh, oh. Looks like something went wrong. Please try again.";
      }
    },
  },
};
</script>
