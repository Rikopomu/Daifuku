<!-- eslint-disable vue/valid-template-root -->
<template>
    <header class="header">
        <div class="row">
            <div class="logo">
                <router-link to="/">Daifuku</router-link>
            </div>
            <div class="link">
                <router-link to="/PostPage">投稿一覧</router-link>
                <router-link to="/DiagnosisPage">診断ページ</router-link>
                <router-link to="/LoginPage">ログイン</router-link>
                <router-link to="/SignUpPage">新規登録</router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: #333;
  color: white;
  padding: 1rem;
  top: 0;
  left: 0;
}
.logo {
  text-align: left;
}
header .row {
  text-align: right;
  display: flex;
  justify-content: space-between;
}
header a {
  color: #fff;
  text-decoration: none;
  margin-left: 2em;
}
header a:hover {
  text-decoration: underline;
}
h1 {
  margin: 0;
  color: #fff;
}
</style>
