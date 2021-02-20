<template>
  <!-- 首页 -->
  <div class="page-home" :class="{'mobile': $vuetify.breakpoint.mobile}">
    <div class="page-home-wrap">
      <!-- todo dele -->
      <!-- <div class="b">4444444444</div>
      <div class="test">test</div>
      <div class="cc ignore">88888888888888-ignore的不转换</div> -->
      <!-- todo dele -->


      <div class="swiper-container1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="banner-des">1</div>
          </div>
          <div class="swiper-slide">
            <div class="banner-des">2</div>
          </div>
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination swiper-pagination1"></div> -->
        <div class="swiper-count" :class="{'mobile': $vuetify.breakpoint.mobile}">
          <div class="count-box">
            <!-- Add Navigation -->
            <div class="swiper-button-prev"><v-icon>mdi-chevron-left</v-icon></div>
            
            <p class="count"><i>{{swiperBannerIndex}}</i>/5</p>
            <div class="swiper-button-next"><v-icon>mdi-chevron-right</v-icon></div>
          </div>
          <div class="pic-box">
            <img src="@images/2.jpg" alt="">
          </div>
        </div>
      </div>

      <!-- 重要公告 -->
      <div class="section-notice g-wrap pa-4 py-lg-8 px-lg-0">
        <div class="swiper-container-notice">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="item px-2 py-1 px-lg-10 py-lg-2">
                <img src="~@images/home/icon_announcement.png" alt="">
                <p class="ell ml-2 ml-lg-6">
                  <span>这是重要公告切换1这是重要公告切换1这是重要公告切换1这是重要公告切换1这是重要公告切换1这是重要公告切换1这是重要公告切换1这是重要公告切换1这是重要公告切换1这是重要公告切换1这是重要公告切换1这是重要公告切换1这是重要公告切换1</span>
                  <span class="time">2020-10-22</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <v-layout wrap class="g-wrap">
        <v-flex class="section-visit-wrap pa-4 pa-lg-0" xs12 sm12 lg4>
          <v-layout class="section-visit">
            <v-flex class="title text-center pt-8" xs3 sm3 lg3>
              <img src="~@images/home/title_guide.png" alt="">
            </v-flex>
            <v-flex class="visit-box pt-10 pb-10 pr-5" xs9 sm9 lg9>
              <div class="time-list text-center">
                <div class="time-item">
                  <p class="time mb-1">9:00</p>
                  <p>开馆</p>
                </div>
                <div class="time-item">
                  <p class="time mb-1">9:00</p>
                  <p>停止入馆</p>
                </div>
                <div class="time-item">
                  <p class="time mb-1">19:00</p>
                  <p>闭馆</p>
                </div>
              </div>
              <div class="m-line mt-5 mb-3"></div>
              <div class="addr text-center">
                <p>
                  <img class="mr-3" src="~@images/icon_location.svg" alt="">
                  博物馆地址
                </p>
                <p>济南市经十路11899时空裂缝来说调济南市</p>
              </div>

              <div class="btn-visit text-center mt-lg-10">
                <a class="px-15 py-1">预约参观</a>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex class="section-infomation pa-5" xs12 sm12 lg8>
          <v-tabs v-model="activeTab">
            <!-- <v-tabs-slider color="red" class="aaa" style="height:3px;"></v-tabs-slider> -->
            <v-tab>通知公告</v-tab>
            <v-tab>新闻资讯</v-tab>

            <a class="btn-more">查看更多 <img class="ml-2" src="~@images/icon_more.svg" alt=""></a>
          </v-tabs>

          <v-row wrap dense class="infomation-list" :class="{'pc': !$vuetify.breakpoint.mobile}" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <v-col class="item g-pointer" :class="{'active': i === activeIndex}" cols="6" lg="3" v-for="i in 4" :key="i">
              <div class="pic-box">
                <img src="@images/1.jpg" alt="">
                <p class="day-box">
                  <span class="day">08</span>
                  <i></i>
                  <span class="mon">3月</span>
                </p>
              </div>
              <div class="des">
                <p class="two-ell">中国塑料袋积分圣诞节福利是的防守打法塑料袋积分是两地分居说了对方</p>
                <p class="txt-more mt-2">More</p>
              </div>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>

      <!-- 展览 -->
      <div class="section-exhibition mt-lg-15 mb-lg-5" :class="{'pa-5 mobile':$vuetify.breakpoint.mobile, 'pc': !$vuetify.breakpoint.mobile}">
        <div class="g-wrap">
          <img class="exhi-title g-title-bg" src="~@images/home/round1.png" alt="" v-if="!$vuetify.breakpoint.mobile">
          <div class="exhi-top">
            <!-- <img class="title" src="~@images/title-1.png" alt="" v-if="!$vuetify.breakpoint.mobile"> -->
            <a class="btn-more">查看更多 <img class="ml-2" src="~@images/icon_more.svg" alt=""></a>
          </div>

          <v-layout :column="$vuetify.breakpoint.mobile">
            <v-flex class="exhi-tab g-tab-box" lg1 :class="{'mobile':$vuetify.breakpoint.mobile, 'pc': !$vuetify.breakpoint.mobile}">
              <div class="item g-pointer" :class="{'active': activeExiVal===item.val}" v-for="(item, index) in exiTabList" :key="index" @click="clickTabExi(item)">{{item.name}}</div>

              <div class="tab-line"></div>
            </v-flex>

            <v-flex class="exhi-swiper" xs12 sm12 lg11>
              <div class="swiper-container-exhi g-wrap">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="i in 5">
                    <v-layout :column="$vuetify.breakpoint.mobile">
                      <v-flex class="pic" xs12 sm12 lg8>
                        <img src="@images/3.jpg" alt="">
                      </v-flex>
                      <v-flex class="pic-info px-4 py-3 px-lg-10 py-lg-8" xs12 sm12 lg4>
                        <h3 class="mb-lg-4">这里是展览打开了圣诞节水电费开了圣诞节水电费</h3>
                        <p class="exhi-des mb-lg-4" v-if="!$vuetify.breakpoint.mobile">展览分为六个单元，集中展示了3000余件珍贵的贝类标本及贝文化相关文物，全方位展示了贝类背后蕴藏的文学、历史、医药、饮食、邮票等知识，是山东博物馆有史以…</p>
                        <div class="m-line mb-lg-4" v-if="!$vuetify.breakpoint.mobile"></div>
                        <div class="exhi-time mt-2">
                          <p class="mb-1">时间：周二到周日 09:00-17:00</p>
                          <p>地点：山东省博物馆一楼1号展厅</p>
                        </div>

                        <p class="text-center mt-lg-12" v-if="!$vuetify.breakpoint.mobile"><a class="btn-in">进入</a></p>
                      </v-flex>
                    </v-layout>
                  </div>
                </div>

                <!-- Add Pagination -->
                <!-- <div class="swiper-pagination swiper-pagination1"></div> -->
              </div>
                <div class="swiper-count" :class="{'mobile': $vuetify.breakpoint.mobile}">
                  <div class="count-box" style="height:58px;">
                    <!-- Add Navigation -->
                    <div class="swiper-button-prev"><v-icon>mdi-chevron-left</v-icon></div>
                    <p class="count"><i>{{swiperExhiIndex}}</i>/5</p>
                    <div class="swiper-button-next"><v-icon>mdi-chevron-right</v-icon></div>
                  </div>
                </div>
            </v-flex>
          </v-layout>
        </div>
      </div>

      <!-- 藏品 -->
      <div class="section-collect" :class="{'pc': !$vuetify.breakpoint.mobile}">
        <div class="g-wrap">
          <img class="collect-title g-title-bg" src="~@images/home/round2.png" alt="" v-if="!$vuetify.breakpoint.mobile">
          <div class="swiper-container3">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) in 6" :key="index">
                <div class="hexagon">
                  <div class="hexagon__item hexagon__item_left">
                    <div class="bg" style="background-image:url('https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=13897784,1115290966&fm=58')"></div>
                  </div>
                  <div class="hexagon__item hexagon__item_center">
                    <div class="bg" style="background-image:url('https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=13897784,1115290966&fm=58')"></div>
                  </div>
                  <div class="hexagon__item hexagon__item_right">
                    <div class="bg" style="background-image:url('https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=13897784,1115290966&fm=58')"></div>
                  </div>
                </div>
                <!-- <img src="@images/2.jpg" alt=""> -->
              </div>
            </div>

            <div class="swiper-count pa-1" :class="{'mobile': $vuetify.breakpoint.mobile}">
              <div class="count-box" style="height:58px;">
                <!-- Add Navigation -->
                <div class="swiper-button-prev"><v-icon>mdi-chevron-left</v-icon></div>
                <p class="count"><i>{{swiperColectIndex}}</i>/5</p>
                <div class="swiper-button-next"><v-icon>mdi-chevron-right</v-icon></div>
              </div>
            </div>

            <!-- 藏品信息 -->
            <div class="collect-info">
              <p class="name">这是藏品的名称  </p>
              <div v-if="!$vuetify.breakpoint.mobile">
                <p>年代：清</p>
                <p>类别：清</p>
                <p>级别：清</p>
                <p>质地：清</p>
                <p>尺寸：长 20 厘米，宽 10 厘米，高 30 厘米</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 其他栏目 -->
      <v-layout wrap class="section-links g-wrap px-4 py-7">
        <v-flex class="links-item" xs6 sm6 lg4>
          <img src="@images/home/image01.png" alt="">
        </v-flex>
        <v-flex class="links-item" xs6 sm6 lg4>
          <img src="@images/home/image02.png" alt="">
        </v-flex>
        <v-flex class="box" :class="{'flex-column': !$vuetify.breakpoint.mobile}" xs12 sm12 lg4>
          <!-- <v-layout class="flex-column"> -->
            <v-flex class="links-item" xs6 sm6 lg12>
              <!-- <img src="@images/home/image03.png" alt=""> -->
              <img src="@images/home/image04.png" alt="">
            </v-flex>
            <v-flex class="links-item" xs6 sm6 lg12>
              <img src="@images/home/image04.png" alt="">
            </v-flex>
          <!-- </v-layout> -->
        </v-flex>

        <v-flex class="links-item" xs4>
          <img src="@images/home/image05.png" alt="">
        </v-flex>
        <v-flex class="links-item" xs4>
          <img src="@images/home/image06.png" alt="">
        </v-flex>
        <v-flex class="links-item" xs4>
          <img src="@images/home/image07.png" alt="">
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
  import '@css/mobile/home/index.scss';

  // import Swiper from 'swiper';
  // import 'swiper/dist/css/swiper.min.css';
  // import 'swiper/swiper-bundle.css';  // 6以上 部分api有问题 eg:slidesPerColumn无效
  export default {
    data() {
      return {
        activeTab: 0,
        activeIndex: 1,
        swiperBannerIndex: 1,
        swiperExhiIndex: 1,
        swiperColectIndex: 1,
        activeExiVal: '1',
        exiTabList: [
          {
            name: '陈列展览',
            val: '1'
          },
          {
            name: '临时展览',
            val: '2'
          },
          {
            name: '数字展览',
            val: '3'
          },
        ]
      }
    },
    methods: {
      // 展览tab点击
      clickTabExi(item) {
        this.activeExiVal = item.val
      },
      getData() {
        this.initSwiperBanner()
        this.initSwiperNotice()
        this.initSwiperExhibition()
        this.initSwiperCollect()
      },
      initSwiperBanner() {
        let vm = this
        this.$nextTick(()=> {
          let swiper = new Swiper(".swiper-container1", {
            // centeredSlides: true,
            // loop: true,
            // pagination: {
            //   el: '.swiper-pagination1',
            //   clickable: true,
            // },
            navigation: {
              nextEl: '.swiper-container1 .swiper-button-next',
              prevEl: '.swiper-container1 .swiper-button-prev',
            },
            onSlideChangeEnd: function() {
              vm.swiperBannerIndex = this.realIndex + 1
            },
          })
        })
      },
      // 重要公告
      initSwiperNotice() {
        this.$nextTick(()=> {
          let swiper = new Swiper(".swiper-container-notice", {
            direction: 'vertical',
            // autoplay: true,
            speed: 300,
            loop: true,
          })
        })
      },
      // 展览
      initSwiperExhibition() {
        let vm = this
        this.$nextTick(()=> {
          let swiper = new Swiper(".swiper-container-exhi", {
            // loop: true,
            navigation: {
              nextEl: '.exhi-swiper .swiper-button-next',
              prevEl: '.exhi-swiper .swiper-button-prev',
            },
            onSlideChangeEnd: function() {
              vm.swiperExhiIndex = this.realIndex + 1
            },
          })
        })
      },
      initSwiperCollect() {
        let vm = this
        this.$nextTick(()=> {
          let swiper = new Swiper(".swiper-container3", {
            // slidesPerView: 1,
            // spaceBetween: 10,
            // // init: false,
            // pagination: {
            //   el: '.swiper-pagination',
            //   clickable: true,
            // },
            // breakpoints: {
            //   '@0.00': {
            //     slidesPerView: 1,
            //     spaceBetween: 10,
            //   },
            //   '@0.75': {
            //     slidesPerView: 2,
            //     spaceBetween: 20,
            //   },
            //   '@1.00': {
            //     slidesPerView: 3,
            //     spaceBetween: 40,
            //   },
            //   '@1.50': {
            //     slidesPerView: 4,
            //     spaceBetween: 50,
            //   },
            // }
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            pagination: {
              el: '.swiper-container3 .swiper-pagination',
              clickable: true,
            },

            breakpoints: {
              // 1920: {  //当屏幕宽度小于等于1280
              //   slidesPerView: 3,
              //   spaceBetween: 30
              // },
              // 768: {  //当屏幕宽度小于等于768
              //   slidesPerView: 2,
              //   spaceBetween: 20,
              // },
              1200: {  //当屏幕宽度小于等于320
                slidesPerView: 1,
                spaceBetween: 10,
              }
            },
            navigation: {
              nextEl: '.swiper-container3 .swiper-button-next',
              prevEl: '.swiper-container3 .swiper-button-prev',
            },
            onSlideChangeEnd: function() {
              vm.swiperColectIndex = this.realIndex + 1
            },
          })
        })
      },
      handleMouseEnter() {
        this.activeIndex = 99
      },
      handleMouseLeave() {
        this.activeIndex = 1
      },
    },
    created() {
      // this.getData()
    }
  }
</script>

<style lang="scss" scoped>
.page-home-wrap {
  .swiper-container1 {
    position: relative;
    width: 100%;
    overflow: hidden;
    .swiper-slide {
      position: relative;
      width: 100%;
      height: 760px;
      background: url(~@images/home/banner.jpg);
      // background-position: center top;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(rgba(255,255,255,0.00), rgba(241,241,241,0.05), rgba(17,17,17,0.93), #000000);
        opacity: 0.5;
      }
    }
    .swiper-count {
      position: absolute;
      left: 200px;
      bottom: 10px;
      .count-box {
        padding: 0 50px;
      }
      .swiper-button-prev {
        left: 30px;
      }
      .swiper-button-next {
        right: 30px;
      }
    }
  }
  .swiper-count {
    padding: 2px;
    position: absolute;
    // left: 200px;
    // bottom: 10px;
    z-index: 2;
    display: flex;
    align-items: center;
    background: #fff;
    .count-box {
      position: relative;
      padding: 0 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      .count {
        margin: 0 30px;
      }
      .swiper-button-prev {
        left: 16px;
      }
      .swiper-button-next {
        right: 16px;
      }
    }
    .pic-box {
      img {
        width: 178px;
        height: 76px;
      }
    }
    // &.mobile {
    //   background: rgba(0, 0, 0, .5);
    //   border-radius: 20px;
    //   left: 50%;
    //   transform: translateX(-50%);
    //   .count-box {
    //     padding: 0 10px;
    //     .count {
    //       color: #fff;
    //       margin: 0;
    //     }
    //     .swiper-button-prev,
    //     .swiper-button-next {
    //       display: none;
    //     }
    //   }
    //   .pic-box {
    //     display: none;
    //   }
    // }
  }
  .swiper-button-next, 
  .swiper-button-prev {
    height: 20px;
    margin-top: -10px;
    background: none;
    display: flex;
    align-items: center;
  }
  .swiper-container-notice {
    height: 56px;
    background: url(~@images/home/shape_border.png) no-repeat center center;
    background-size: 100% 100%;
    overflow: hidden;
    .swiper-slide {
      .item {
        display: flex;
        height: 100%;
        align-items: center;
        font-size: $font-size-base;
        color: $text-color-base;
        // padding: 12px 40px;
        box-sizing: border-box;
        img {
          height: 100%;
        }
        p {
          position: relative;
          flex: 1;
          padding-right: 100px;
          .time {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }

  .section-visit {
    // padding: 20px;
    // display: flex;
    background: #d6a884;
    .title {

      // display: flex;
      // flex-direction: column;
    }
    .visit-box {
      position: relative;
      // display: flex;
      // flex-direction: column;
      // justify-content: space-between;
      flex: 1;
      font-size: $font-size-md;
      line-height: $line-height-md;
      color: $text-color-inverse;
      .time-list {
        display: flex;
        justify-content: space-between;
        .time {
          font-size: $font-size-max;
          line-height: $line-height-max;
        }
      }
      .addr {

      }
      .btn-visit {
        a {
          display: inline-block;
          background: url(~@images/home/btn_ording_n.png) no-repeat center center;
          background-size: 100% 100%;
        }
      }
    }
  }

  .section-infomation {
    .infomation-list {
      margin-top: 20px;
      .item {
        color: $text-color-base;
        font-size: $font-size-base;
        line-height: $line-height-base;
        .pic-box {
          position: relative;
          height: 132px;
          img {
            width: 100%;
            height: 100%;
          }
          .day-box {
            position: absolute;
            left: 0;
            bottom: 0;
            padding: 5px;
            color: #fff;
            width: 54px;
            height: 54px;
            background: $primary;
            .day {
              position: absolute;
              left: 5px;
              top: 3px;
              font-size: $font-size-title-2;
            }
            i {
              position: absolute;
              left: 26px;
              top: 12px;
              width: 1px;
              height: 32px;
              background: #fff;
              transform: rotate(45deg);
            }
            .mon {
              position: absolute;
              bottom: 5px;
              right: 5px;
            }
          }
        }
        .des {
          padding: 10px;
          .txt-more {
            color: $primary;
            opacity: 0;
          }
        }
      }

      &.pc {
        display: table;
        .item {
          display: table-cell;
          // flex: 1;
          // width: 25%;
          width: 184px;
          transition: width .5s;
          &:hover,
          &.active {
            // width: 30%;
            width: 222px;
            .des {
              background: $bg-color;
              color: #fff;
              .txt-more {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }

  .section-exhibition {
    position: relative;
    // 展览pc端特有
    &.pc {
      background: $bg-color-light url(~@images/home/bg_2.png) repeat center center;
      background-size: 100% 100%;
      .exhi-top {
        width: 1200px;
        margin: 0 auto;
        position: absolute;
        height: 35px;
        top: 56px;
        z-index: 2;
        .btn-more {
          top: 0;
        }
      }
      .exhi-tab {
        padding-top: 112px;
      }
      .exhi-swiper {
        padding:106px 0;
      }
    }
    // 展览移动端特有
    &.mobile {
      
    }
    .exhi-top {
      
    }
    .exhi-tab {
      
    }
    .exhi-swiper {
      position: relative;
      // padding:106px 0;
      color: #fff;
      .swiper-container-exhi {
        background: var(--v-primary-base);
        position: relative;
        width: 100%;
        height: 420px;
        overflow: hidden;
        .swiper-slide {
          .pic {
            img {
              width: 100%;
              height: 100%;
            }
          }
          .pic-info {
            box-sizing: border-box;
            font-size: $font-size-base;
            line-height: $line-height-base;
            h3 {
              color: $text-color-emphasis;
              font-size: $font-size-tab;
              line-height: $line-height-tab;
              text-align: center;
            }
            .exhi-time {
              font-size: $font-size-md;
              line-height: $line-height-md;
            }
            .btn-in {
              display: inline-block;
              width: 52px;
              height: 52px;
              background: url(~@images/btn_in_n.png) no-repeat center center;
              background-size: 100% 100%;
              line-height: 52px;
              font-size: 14px;
            }
          }
        }
      }
      .swiper-count {
        position: absolute;
        right: 33.33%;
        bottom: 106px;
      }
    }
  }

  .section-links {
    position: relative;
    .links-item {
      // padding: 4px;
      // height: 300px;
      img {
        width: 100%;
        // height: 100%;
        object-fit: cover;
        object-position: right;
      }
    }
    .box {
      display:flex;
      // height: 50%;
      // height: 300px;
      &.flex-column {
        .links-item {
          height: 50%;
        }
      }
    }
  }

  .section-collect {
    position: relative;
    width: 100%;
    // height: 902px;
    background: url(~@images/home/bg_3.png) repeat center center;
    background-size: 100% 100%;
    
    .g-wrap {
      width: 100%;
      display: flex;
      align-items: center;
    }
    .swiper-container3 {
      position: relative;
      // padding-bottom: 200px;
      // width: 1200px;
      // margin: 0 auto;
      overflow: hidden;
      .swiper-wrapper {
        display: flex;
        align-items: center;
      }
      .swiper-slide {
        .hexagon {
          width: 104px;
          height: 60px;
          // width: 60px;
          // height: 104px;
          position: relative;
          margin: 100px auto;
          .hexagon__item {
            width: 100%;
            height: 100%;
            background: blue;
            position: absolute;
            top: 0;
            left: 0;
            visibility: hidden;
            overflow: hidden;
            &.hexagon__item_left {
              transform: rotate(60deg);
              // transform: rotate(-60deg);
            }

            &.hexagon__item_right {
              transform: rotate(-60deg);
              // transform: rotate(60deg);
            }

            .bg {
              position: absolute;
              top: 0;
              left: 0;
              content: "";
              // height: 100%;
              // width: 120px;
              width: 100%;
              height: 120px;
              visibility: visible;
              // background: url('https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=13897784,1115290966&fm=58');
              background-repeat: no-repeat;
              background-size: cover;
              transform-origin: 0 0;
            }

            &.hexagon__item_left .bg {
              transform: rotate(-60deg) translateX(-50%);
              // transform: rotate(60deg) translateY(-50%);
            }

            &.hexagon__item_right .bg {
              transform: rotate(60deg) translateY(-75%);
              // transform: rotate(-60deg) translateX(-75%);
            }

            &.hexagon__item_center .bg {
              transform: translateY(-25%);
            }
          }
        }
      }
      .swiper-slide-active {
        .hexagon {
          transform: scale(1.5);
        }
      }

      .swiper-count {
        left: 50%;
        transform: translateX(-50%);
        .count-box {
        }
      }

      // 藏品信息
      .collect-info {
        // width: 328px;
        // position: absolute;
        // bottom: 54px;
        // right: 30px;
        // color: #fff;
        // font-size: $font-size-base;
        // line-height: $line-height-base;
        // .name {
        //   margin-bottom: 20px;
        //   font-size: $font-size-tab;
        // }
      }
    }

    &.pc {
      .swiper-container3  {
        padding: 200px 0;
        width: 1200px;
        margin: 0 auto;
        // 藏品信息
        .collect-info {
          width: 328px;
          position: absolute;
          bottom: 54px;
          right: 30px;
          color: #fff;
          font-size: $font-size-base;
          line-height: $line-height-base;
          .name {
            margin-bottom: 20px;
            font-size: $font-size-tab;
          }
        }
      }
    }
  }

  // 修改tab样式
  .v-tabs {
    position: relative;
    &:after {
      position: absolute;
      bottom: 1px;
      left: 0;
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: $primary;
    }
    .v-tab {
      color: $text-color-base;
      font-size: $font-size-tab;
    }
  }
  // .theme--light.v-tabs .v-tabs-slider-wrapper::deep {
  //   height: 3px !important;
  // }
  // 修改tab默认色
  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active){
    color: $text-color-tab;
  }

  .line {
    width: 100%;
    height: 2px;
    background: #fff;
  }
  .m-line {
    width: 100%;
    height: 6px;
    border-top: solid 1px $text-color-inverse;
    border-bottom: dotted 1px $text-color-inverse;
  }

  .btn-more {
    display: flex;
    align-items: center;
    padding: 6px 16px;
    border: solid 1px $primary;
    border-radius: 3px;
    position: absolute;
    right: 0;
    top: 5px;
    color: $primary;
    font-size: $font-size-base;
    img {
      width: 16px;
    }
  }

  // &.mobile {
  //   .btn-more {
  //     border: none;
  //   }
  // }
}
</style>