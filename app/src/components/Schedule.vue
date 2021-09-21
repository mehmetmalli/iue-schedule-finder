<template>
  <div v-if="combination.length > 0">
    <h1>Variation #{{ index + 1 }}</h1>
    <table>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>

      <tr v-for="(timePeriod, index) in timePeriods" :key="index">
        <td>{{ timePeriod }}</td>
        <td v-for="(_, i) in headers.slice(1)" :key="i">
          <span>{{ courseNames[index + (timePeriods.length * i) + 1] }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import headers from "../static/headers";
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