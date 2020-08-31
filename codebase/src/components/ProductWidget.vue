<template>
  <div>
    <v-list subheader two-line flat>
      <v-subheader>Goods Status</v-subheader>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Last checked at</v-list-item-title>
          <v-list-item-subtitle>{{checkDateConverted}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Total checked</v-list-item-title>
          <v-list-item-subtitle>{{status.itemsChecked}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <pie-chart-widget :goodPositions="status.goodPositions" :badPositions="status.badPositions" />
  </div>
</template>

<script>
import PieChartWidget from "../components/PieChartWidget";

export default {
  name: "product-widget",
  components: { PieChartWidget },
  props: {
    status: {
      lastCheckDate: String,
      itemsChecked: Number,
      goodPositions: Number,
      badPositions: Number,
    },
  },
  computed: {
    checkDateConverted: function () {
      const lastCheckDateFormat = new Date(this.status.lastCheckDate);
      const yyyy = lastCheckDateFormat.getFullYear();
      const mm = lastCheckDateFormat.getMonth() + 1;
      const dd = lastCheckDateFormat.getDate();
      const hh = lastCheckDateFormat.getHours();
      const min = lastCheckDateFormat.getMinutes();
      const ss = lastCheckDateFormat.getSeconds();

      return `${yyyy}-${mm < 10 ? '0' + mm : mm}-${dd < 10 ? '0' + dd : dd} ${hh}:${min}:${ss}`;
    },
  },
};
</script>

<style>
</style>