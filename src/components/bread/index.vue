<template>
  <!-- 面包屑 -->
  <div class="cmp-bread" v-if="breadList && breadList.length">
    <v-breadcrumbs :items="breadList" large>
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    watch: {
      $route() {
        return this.getBreadcrumb()
      }
    },
    data() {
      return {
        breadList: [], // 路由集合
        items: [
          {
            text: '首页',
            disabled: false,
            href: '/',
          },
          {
            text: '列表',
            disabled: false,
            href: 'demo3',
          },
          {
            text: '详情',
            disabled: true,
            href: 'breadcrumbs_link_2',
          },
        ]
      }
    },
    methods: {
      getBreadcrumb() {
        // matched：返回一个数组，包含当前路由的所有嵌套路径片段的路由记录 。
        // console.log(11,this.$route)
        this.breadList = this.$route.meta.breadList
      }
    }
  }
</script>

<style lang="scss" scoped>
.cmp-bread {

}
</style>