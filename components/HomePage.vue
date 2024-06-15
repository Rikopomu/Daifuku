<template>
  <div class="home">
    <div class="msg">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Daifuku',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background-image: url('~@/assets/daifuku_photo_02.png');
  background-size: cover; /* 背景画像をコンテナ全体に表示 */
  background-repeat: no-repeat; /* 背景画像の繰り返しを無効化 */
  background-position: center; /* 背景画像を中央に配置 */
  width: 100%; /* 幅を全体に */
  height: 100vh; /* 高さをビュー全体に */
}
</style>
