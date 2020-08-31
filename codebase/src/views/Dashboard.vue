<template>
  <div v-if="!isLoading">
    <company-widget v-if="company" :company="company"></company-widget>

    <product-widget v-if="company.status" :status="company.status"></product-widget>
  </div>
</template>

<script>
import CompanyWidget from "../components/CompanyWidget";
import ProductWidget from "../components/ProductWidget";
import httpService from "../services/httpService";

export default {
  name: "Dashboard",
  components: { CompanyWidget, ProductWidget },
  data() {
    return {
      isLoading: false,
      company: {},
    };
  },
  methods: {
    async callServerAction() {
      this.isLoading = true;
      try {
        const { status, data } = await httpService.json();
        if (status == 200 && data) {
          const { email, name, plan, status } = data;
          this.company = { email, name, plan, status };
        } else {
          alert("Invalid status received");
        }
        this.isLoading = !this.isLoading;
      } catch (error) {
        alert(error.message);
      }
    },
  },
  beforeMount() {
    this.callServerAction();
  },
};
</script>

<style>
</style>