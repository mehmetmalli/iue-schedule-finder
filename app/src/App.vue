<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>IUE</span>
        <span class="font-weight-light ma-3">Schedule Finder</span>
        <span class="green font-weight-light">(2019-2020 Spring)</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/mehmetmalli/iue-schedule-finder"
        target="_blank"
        text
      >
        <span class="mr-2">See on GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <ScheduleFinder />
    </v-content>
  </v-app>
</template>

<script>
import ScheduleFinder from "./components/ScheduleFinder";

export default {
  name: "App",
  components: {
    ScheduleFinder,
  },
};
</script>
