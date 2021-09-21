<template>
  <v-container class="ma-3">
    <v-layout row>
      <v-flex xs12 sm12 md6 lg6>
        <v-autocomplete
          :items="courses"
          label="Select Your Courses"
          class="pt-3 pl-3 pr-3 pb-1"
          v-model="selectedCourses"
          menu-props="auto"
          item-text="code"
          return-object
          outline
          multiple
        ></v-autocomplete>
      </v-flex>
<!--       <v-btn class="ma-3" @click="findSchedules" color="info" :disabled="selectedCourses.length == 0"
        >Find Possible Schedules</v-btn> -->
      
      <v-btn class="ma-3" @click="clear" color="error">Clear All</v-btn>
    </v-layout>

    <div v-if="selectedCourses.length > 0" class="mt-3 mb-5">
      <div v-for="(item, i) in selectedCourses" :key="item.code">
        <span class="font-weight-bold"
          >{{ item.code }} - {{ item.course }} - ({{ item.ects }} ECTS)</span
        >
        <span class="font-weight-thin" @click="remove(i)">remove</span>
      </div>
    </div>

    <h3 v-if="show && combinationsArray.length > 1 && selectedCourses.length > 0" class="ma-3">
      There are {{ combinationsArray.length }} possible schedules.
    </h3>
    <h3 v-else-if="show && combinationsArray.length == 1 && selectedCourses.length > 0" class="ma-3">
      There is 1 possible schedule.
    </h3>
    <h3 v-else-if="show && combinationsArray.length == 0 && selectedCourses.length > 0" class="ma-3">
      There is no possible schedule.
    </h3>
    <h3 v-else class="ma-3">
     <!--  Select courses from the dropdown and click the Find Possible Schedules button. -->
      Select courses from the dropdown and click the Find Possible Schedules button.
    </h3>

    <v-layout wrap>
      <v-flex
        xs12
        sm12
        md12
        lg6
        xl6
        v-for="(combination, index) in combinationsArray"
        :key="index"
        class="pa-3"
      >
        <Schedule
          :combination="combination"
          :index="index"
          :courseNames="courseNames[index]"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import courses from "../static/courses";
import Schedule from "../components/Schedule.vue";

export default {
  data: () => {
    return {
      selectedCourses: [],
      courseNames: [],
      combinationsArray: [],
      show: false,
      courses
    };
  },
  methods: {
    findSchedules: function () {
      let arrayOfPossibilities = [];
      this.combinationsArray = [];
      this.courseNames = [];
      for (let i = 0; i < this.selectedCourses.length; i++) {
        let dummy = [];
        for (let j = 0; j < this.selectedCourses[i].time.length; j++) {
          dummy.push(j);
        }
        arrayOfPossibilities.push(dummy);
      }

      const getCombinations = (allOptionsArray, combination) => {
        if (allOptionsArray.length > 0) {
          for (let i = 0; i < allOptionsArray[0].length; i++) {
            const tmp = allOptionsArray.slice(0);
            combination.codes[combination.counter] = allOptionsArray[0][i];
            tmp.shift();
            combination.counter++;
            getCombinations(tmp, combination);
          }
        } else {
          const combi = combination.codes.slice(0);
          combination.result.push(combi);
        }
        combination.counter--;
      };

      const combination = { codes: [], result: [], counter: 0 };

      getCombinations(arrayOfPossibilities, combination);

      let tempArray;
      let finalArray = [];
      let tempCourseNamesArray;
      for (let i = 0; i < combination.result.length; i++) {
        tempArray = [];
        tempCourseNamesArray = [];
        for (let j = 0; j < this.selectedCourses.length; j++) {
          tempArray.push(
            this.selectedCourses[j].time[combination.result[i][j]]
          );
          for (
            let k = 0;
            k < this.selectedCourses[j].time[combination.result[i][j]].length;
            k++
          ) {
            tempCourseNamesArray[
              this.selectedCourses[j].time[combination.result[i][j]][k]
            ] = this.selectedCourses[j].code;
          }
        }
        finalArray.push(tempArray);
        let tempCombination = finalArray.flat(2);
        finalArray = [];
        let set = new Set(tempCombination);
        if (tempCombination.length === set.size) {
          this.combinationsArray.push(tempCombination);
          this.courseNames.push(tempCourseNamesArray);
        }
      }
      this.show = true;
    },
    clear: function () {
      this.selectedCourses = [];
      this.combinationsArray = [];
      this.courseNames = [];
      this.show = false;
    },
    remove: function (index) {
      this.selectedCourses.splice(index, 1);
    },
  },
  components: {
    Schedule
  },
  watch: {
  selectedCourses: {
    handler() {
      this.findSchedules();
    }
  }
}
};
</script>
