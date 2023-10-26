<template>
  <section>
    <Notification :message="error" v-if="error" />
    <div>
      <h2>Register</h2>
      <form method="post" @submit.prevent="register">
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
            <label for="email" class="label">Email</label>
            <input
              type="email"
              class="input"
              name="email"
              v-model="email"
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
          <button class="button" type="submit">Register</button>
        </div>
      </form>

      <nuxt-link to="/login">
        <div>
          Already got an account?
          <span class="link">Login </span>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import Notification from "@/components/Notification";

export default {
  components: {
    Notification,
  },

  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        await this.$axios.post("users/new", {
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
