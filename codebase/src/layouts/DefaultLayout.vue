<template>
  <v-app id="inspire">
    <sidebar />
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <router-view />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
  name: "DefaultLayout",
  components: { Sidebar },
};
</script>