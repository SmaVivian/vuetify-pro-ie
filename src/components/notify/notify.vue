<template>
<!-- 提示框 -->
  <v-snackbar
    v-model="visible"
    :timeout="options.duration"
    :color="options.color"
    :style="{top: options.verticalOffset+'px'}"
    @input="close"
    top
  >
    {{ message }}
    <!-- <v-spacer></v-spacer> -->
    <template v-slot:action="{ attrs }">
      <v-btn
        text
        v-bind="attrs"
        @click="close"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
  import vuetify from '@/plugins/vuetify'
  export default {
    vuetify: vuetify,
    data() {
      return {
        visible: false,
        message: '',
        options: {
          duration: 2000,
          color: '', // 背景色
          // color: '#FB8C00', // 背景色
          showClose: false, // 可以关闭
          verticalOffset: 10, // 距离顶部
        }
      }
    },
    methods: {
      notify(message, options) {
        this.message = message
        this.options = { ...this.options, ...options}
        this.visible = true
      },
      close() {
        this.visible = false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>