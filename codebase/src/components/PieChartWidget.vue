<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: {
      goodPositions: Number,
      badPositions: Number
  },
  mounted () {
    this.renderChart({
      labels: ['Good positions', 'Bad positions'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651'
          ],
          data: [this.goodPositions, this.badPositions]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>

<style>

</style>