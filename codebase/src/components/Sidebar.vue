<template>
    <v-navigation-drawer
      absolute
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      class="deep-purple accent-4"
      dark
      permanent
    >
      <v-list>
        <v-list-item v-for="item in menu" :key="item.title" @click="navigate(item.href)" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      menu: [
        { title: "Dashboard", icon: "mdi-view-dashboard", href: "/" },
        { title: "About", icon: "mdi-help-circle", href: "/about" },
      ],
    };
  },
  methods: {
      navigate(url) {
          this.$router.push(url);
      }
  }
};
</script>

<style>
</style>