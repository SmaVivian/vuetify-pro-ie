<template>
  <!-- 仅移动端存在的页面-活动报名-登录 -->
  <div class="page-demo4">
    <v-alert
      type="success"
    >是的冯绍峰</v-alert>
    <span @click="handleConfirm">消息确认框</span>
    <span style="margin-left:20px;" @click="test">测试测试</span>
    <span style="margin-left:20px;" @click="handleNotify">消息提示框</span>

    <p class="pa-5" @click="goDetail">跳转详情</p>

    <div class="aaa pa-5">
      <p>vuetify中的变量</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      goDetail() {
        this.$router.push({path: '/demo/detail', query: {id: 2}})
      },
      getDetail() {
        console.loe('data')
      },
      handleConfirm() {
        this.$confirm({
          content: '您确定这么做吗？',
          confirmButtonText: '确定1',
          cancelButtonText: '取消1',
          type: 'warning'
        }).then(()=>{
          console.log("ok");
        }).catch(()=>{
          console.log("cancel");
        })
      },
      handleNotify() {
        this.$notify('提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示', {verticalOffset:50,showClose: true})
      },
      test() {
        this.$test('用户会话过期，请重新登录', () => {
          console.log('我被调用了')
        })
        // this.$test('用户会话过期，请重新登录', () => {
        //   console.log('我被调用了')
        // })
      }
    },
    created() {
      console.log(this.$route.query)
      // console.log(cmpAlert.show())
      // debugger
      // 登录授权
      // if (this.$store.state.user.userId) {
      //   this.getDetail()
      // } else if (this.$route.query.gz == '0') {
      //   // this.$toast('请先关注公众号')
      // } else if (this.$route.query.wxlogin) {
      //   this.$store
      //     .dispatch('user/loginWechatAuth', this.$route.query.wxlogin)
      //     .then(() => {
      //       this.getDetail()
      //     })
      //     .catch(msg => {
      //       console.log(msg)
      //       // this.$toast(msg)
      //     })
      // } else {
      //   let apiUrl = location.origin
      //   window.location.href = apiUrl + '/singleMuseum/wx/m/wxLogin.do?type=2'
      // }


      // todo dele
      // this.getDetail()
      // if (this.$route.query.wxlogin) {
      //   this.$store
      //     .dispatch('user/loginWechatAuth', this.$route.query.wxlogin)
      //     .then(() => {})
      //     .catch(msg => {
      //       this.$toast(msg)
      //     })
      // }
    }
  }
</script>

<style lang="scss" scoped>
.page-demo4 {
  .aaa {
    color: var(--v-primary-base);
    background-color: var(--v-accent-lighten2);
  }
}
</style>