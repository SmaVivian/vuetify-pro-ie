<template>
  <div class="cmp-footer" :class="{'mobile': $vuetify.breakpoint.mobile}">
    <div class="footer-wrap g-wrap" v-show="!$vuetify.breakpoint.mobile" style="margin-top:200px;">
      <div class="box-code">
        <div class="code-item">
          <img src="@images/code-wechat.jpg" alt="">
          <p>官方微信</p>
        </div>
        <div class="code-item">
          <img src="@images/code-douyin.jpg" alt="">
          <p>官方抖音号</p>
        </div>
      </div>

      <div class="footer-link">
        <div class="link-tab">
          <div class="link btn-website" :class="{'active': showWeb}" @click="showWeb=!showWeb">
            <!-- trigger="hover" -->
            <popper
              trigger="clickToOpen"
              :options="{
                placement: 'top',
                modifiers: { offset: { offset: '0,0px' } }
              }">
              <div class="popper">
                <ul class="panel-website">
                  <li>
                    <router-link class="name" to="/home">首页</router-link>
                  </li>
                  <li>
                    <router-link class="name" to="/demo1">展览</router-link>
                    <router-link class="name-sub" to="/demo2">陈列展览</router-link>
                    <router-link class="name-sub" to="/demo3">临时展览</router-link>
                    <router-link class="name-sub" to="/demo4">数字展览</router-link>
                    <router-link class="name-sub" to="/demo4">数字展览</router-link>
                  </li>
                  <li>
                    <router-link class="name" to="/demo1">馆藏</router-link>
                    <router-link class="name-sub" to="/demo2">陈列展览</router-link>
                    <router-link class="name-sub" to="/demo3">临时展览</router-link>
                    <router-link class="name-sub" to="/demo4">数字展览</router-link>
                    <router-link class="name-sub" to="/demo4">数字展览</router-link>
                  </li>
                </ul>
              </div>

              <span slot="reference">
                网站地图 /
              </span>
            </popper>
          </div>
          <div class="link"><router-link to="/link/friend">友情链接 / </router-link></div>
          <div class="link"><span>联系我们 / </span></div>
          <div class="link"><router-link to="/link/copyright">版权声明 / </router-link></div>
          <div class="link"><router-link to="/link/privacy">隐私政策</router-link></div>
        </div>
        <p>京公安商量的介绍的</p>
      </div>
    </div>

    <div class="footer-suport">
      <span>版权所有：山东省博物馆</span>
      <span>网站建设：北京探景科技</span>
    </div>
  </div>
</template>

<script>
  import Popper from 'vue-popperjs';
  import 'vue-popperjs/dist/vue-popper.css';
  export default {
    components: {
      'popper': Popper
    },
    data() {
      return {
        showWeb: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.cmp-footer {
  background: url(~@images/footer-bg.jpg) no-repeat top center;
  background-size: cover;
  .footer-wrap {
    padding: 10px;
    color: #fff;
    display: flex;
    .box-code {
      position: relative;
      width: 300px;
      display: flex;
      justify-content: space-around;
      .code-item {
        text-align: center;
        img {
          margin-top: 10px;
          width: 100px;
          height: 100px;
        }
      }
      &:after {
        content: '';
        display: block;
        width: 1px;
        height: 100px;
        background: #fff;
        position: absolute;
        top: 0px;
        right: 0;
      }
    }
    .footer-link {
      padding-left: 50px;
      .link-tab {
        display: flex;
        .link {
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:last-child {
            margin-right: 0;
          }
          &.btn-website {
            position: relative;
            .panel-website {
              width: 400px;
              background: rgba(0, 0, 0, .5);
              padding: 10px;
              li {
                display: flex;
                margin-bottom: 10px;
                .name {
                  position: relative;
                  margin-right: 20px;
                  &:after {
                    display: block;
                    content: '';
                    width: 1px;
                    height: 20px;
                    background: #fff;
                    position: absolute;
                    right: -10px;
                    top: 0;
                  }
                }
                .name-sub {
                  margin-right: 10px;
                }
                &:first-child {
                  .name {
                    &:after {
                      display: none;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .footer-suport {
    text-align: center;
    color: #a49b9b;
    line-height: 50px;
    span {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>