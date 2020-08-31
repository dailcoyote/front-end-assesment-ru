<template>
  <div>
    <v-list two-line subheader>
      <v-subheader>General</v-subheader>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Company name</v-list-item-title>
          <v-list-item-subtitle>{{company.name}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Company email</v-list-item-title>
          <v-list-item-subtitle>{{company.email}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Plan</v-list-item-title>
          <v-list-item-subtitle>{{company.plan}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

   
  </div>
</template>

<script>

export default {
  name: "company-widget",
  props: {
    company: {
      email: String,
      name: String,
      plan: String,
      status: Object
    }
  },
};
</script>

<style>
</style>