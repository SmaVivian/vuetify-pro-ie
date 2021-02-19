<template>
  <div class="cmp-header">
      <!-- color="#2c2529" -->
      <!-- dark -->
    <v-app-bar class="header-box" app
      elevate-on-scroll
      color="#2c2529"
      dark
    >
      <v-toolbar-title>
        <img class="logo" src="~@images/logo.png" alt="" srcset="">
      </v-toolbar-title>

      <!-- pc端菜单 -->
      <v-spacer>
        <div class="top-nav" v-if="!$vuetify.breakpoint.mobile">
          <div class="item g-pointer" :class="{'active': item.url === activeMenu}" v-for="(item, index) in menuList" :key="index" @click="handleClick(item, index)">{{item.name}}</div>
          <!-- <div class="item">展览</div>
          <div class="item">馆藏</div>
          <div class="item">教育</div>
          <div class="item">研究</div> -->
        </div>
      </v-spacer>

      <v-app-bar-nav-icon @click="drawer=true" v-if="$vuetify.breakpoint.mobile"></v-app-bar-nav-icon>
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-navigation-drawer v-if="$vuetify.breakpoint.mobile"
      v-model="drawer"
      fixed
      temporary
      right
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
        >
          <!-- active-class="deep-purple--text text--accent-4" -->
          <v-list-item v-for="(item, index) in menuList" :key="index" @click="handleClick(item, index)">
            <!-- <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon> -->
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-navigation-drawer
      app
      v-model="drawer"
      class="brown lighten-2"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index" :to="item.url">
            <v-list-item-content>
              {{ item.title }}
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer> -->
  </div>
</template>

<script>
  export default {
    watch: {
      $route() {
        this.activeMenu = '/' + this.$route.path.split('/')[1]
        this.selectedItem = this.menuList.findIndex(item => item.url === this.activeMenu)
      }
    },
    data() {
      return {
        drawer: false,
        activeMenu: '/' + this.$route.path.split('/')[1],
        selectedItem: 0,
        menuList: [
          {
            name: '首页',
            url: '/home'
          },
          {
            name: '展览',
            url: '/exhibition'
          },
          {
            name: '馆藏',
            url: '/collect'
          },
          {
            name: '教育',
            url: '/activity'
          },
          {
            name: '研究',
            url: '/demo4'
          },
          {
            name: '文创',
            url: '/demo5'
          },
          {
            name: '动态',
            url: '/demo6'
          },
          {
            name: '概览',
            url: '/demo1'
          },
          {
            name: '志愿者',
            url: '/demo7'
          },
        ]
      }
    },
    methods: {
      handleClick(item, index) {
        this.$router.push(item.url)
        this.selectedItem = index
      }
    }
  }
</script>

<style lang="scss" scoped>
.cmp-header {
  .header-box {
    background: url(~@images/bg_navigation.jpg) no-repeat center center;
    background-size: 100% 100%;
    // height: 72px !important;
  }
  // .v-toolbar::v-deep{
  //   .v-toolbar__content {
  //     width: 1200px;
  //     margin: 0 auto;
  //   }
  // }
  .logo {
    height: 50px;
  }
  .top-nav {
    display: flex;
    justify-content: flex-end;
    color: #fff;
    .item {
      margin-right: 56px;
      padding: 14px 0;
      border-bottom: solid 2px transparent;
      font-size: 16px;
      &.active {
        color: $primary;
        border-bottom-color: $border-color-tab;
      }
    }
  }
}
</style>