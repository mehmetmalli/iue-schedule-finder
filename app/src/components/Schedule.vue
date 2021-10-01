<template>
  <v-card class="pl-2 pr-2 pb-2 elevation-4" v-if="combination.length > 0">
    <h1>Variation #{{ index + 1 }}</h1>
    <table>
      <tr>
        <th class="pl-" v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>

      <tr v-for="(timePeriod, index) in timePeriods" :key="index">
        <td>{{ timePeriod }}</td>
        <td v-for="(_, i) in headers.slice(1)" :key="i">
          <span>{{ courseNames[index + (timePeriods.length * i) + 1] }}</span>
        </td>
      </tr>
    </table>
  </v-card>
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