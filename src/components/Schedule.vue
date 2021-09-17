<template>
  <div>
    <h1>Variation #{{ index + 1 }}</h1>
    <table>
      <tr>
        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      </tr>

      <tr v-for="(timePeriod, index) in timePeriods" :key="index">
        <td>{{ timePeriod }}</td>
        <td>
          <span v-if="combination.includes(index + 1)">{{ courseNames[index + 1] }}</span>
        </td>
        <td>
          <span v-if="combination.includes(index + 15)">{{ courseNames[index + 15] }}</span>
        </td>
        <td>
          <span v-if="combination.includes(index + 29)">{{ courseNames[index + 29] }}</span>
        </td>
        <td>
          <span v-if="combination.includes(index + 43)">{{ courseNames[index + 43] }}</span>
        </td>
        <td>
          <span v-if="combination.includes(index + 57)">{{ courseNames[index + 57] }}</span>
        </td>
        <td>
          <span v-if="combination.includes(index + 71)">{{ courseNames[index + 71] }}</span>
        </td>
        <td>
          <span v-if="combination.includes(index + 85)">{{ courseNames[index + 85] }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      headers: [
        "Time",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      timePeriods: [
        '9:00-9:50',
        '10:00-10:50',
        '11:00-11:50',
        '12:00-12:50',
        '13:00-13:50',
        '14:00-14:50',
        '15:00-15:50',
        '16:00-16:50',
        '17:00-17:50',
        '18:00-18:50',
        '19:00-19:50',
        '20:00-20:50',
        '21:00-21:50',
        '22:00-22:50'
      ],
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