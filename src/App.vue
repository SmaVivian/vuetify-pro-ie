<template>
  <v-app class="g-app" id="app">
    <!-- <cmpHeader></cmpHeader> -->
    <v-main :class="{'app-mobile': $vuetify.breakpoint.mobile, 'app-pc': !$vuetify.breakpoint.mobile}">
      <v-container fluid>
        <!-- <cmpBread></cmpBread> -->
        <!-- 如果使用 vue-router -->
        <router-view></router-view>
      </v-container>
      <!-- <cmpFooter></cmpFooter> -->
      <!-- <router-view></router-view> -->
    </v-main>
  </v-app>
</template>

<script>
// import cmpHeader from '@cmp/header'
// import cmpBread from '@cmp/bread'
// import cmpFooter from '@cmp/footer'
export default {
  name: 'App',
//   components: { cmpHeader, cmpBread, cmpFooter },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
// @import '@assets/css/theme.scss';
</style>
