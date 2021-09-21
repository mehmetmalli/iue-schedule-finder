<template>
  <div v-if="combination.length > 0">
    <h1>Variation #{{ index + 1 }}</h1>
    <table>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>

      <tr v-for="(timePeriod, index) in timePeriods" :key="index">
        <td>{{ timePeriod }}</td>
        <td>
          <span v-if="combination.includes(index + (timePeriods.length * 0) + 1)">{{ courseNames[index + (timePeriods.length * 0) + 1] }}</span>
        </td>
        <td>
          <span v-if="combination.includes(index + (timePeriods.length * 1) + 1)">{{ courseNames[index + (timePeriods.length * 1) + 1] }}</span>
        </td>
        <td>
          <span v-if="combination.includes(index + (timePeriods.length * 2) + 1)">{{ courseNames[index + (timePeriods.length * 2) + 1] }}</span>
        </td>
        <td>
          <span v-if="combination.includes(index + (timePeriods.length * 3) + 1)">{{ courseNames[index + (timePeriods.length * 3) + 1] }}</span>
        </td>
        <td>
          <span v-if="combination.includes(index + (timePeriods.length * 4) + 1)">{{ courseNames[index + (timePeriods.length * 4) + 1] }}</span>
        </td>
        <td>
          <span v-if="combination.includes(index + (timePeriods.length * 5) + 1)">{{ courseNames[index + (timePeriods.length * 5) + 1] }}</span>
        </td>
        <td>
          <span v-if="combination.includes(index + (timePeriods.length * 6) + 1)">{{ courseNames[index + (timePeriods.length * 6) + 1] }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import headers from "../static/days";
import timePeriods from "../static/periods";

export default {
  data: () => {
    return {
      headers,
      timePeriods
    };
  },
  props: ["combination", "courseNames", "index"],
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  text-align: center;
}
table {
  width: 100%;
}
</style>