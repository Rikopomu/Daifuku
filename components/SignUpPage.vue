<template>
  <div class="signup-container">
    <h1>{{ title }}</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">ユーザー名</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">登録</button>
    </form>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>

import axios from 'axios' // Axiosをインポート

export default {
  name: 'SignUpPage',
  data () {
    return {
      title: '新規登録',
      username: '',
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async handleSubmit () {
      // 簡易的なバリデーション
      if (!this.username || !this.email || !this.password) {
        this.errorMessage = 'すべてのフィールドを入力してください。'
        return
      }

      try {
        // APIに新規登録リクエストを送信
        const response = await axios.post(`${'https://jsonplaceholder.typicode.com/users'}`, {
          username: this.username,
          email: this.email,
          password: this.password
        })

        // 登録が成功した場合の処理
        if (response.status === 201) {
          this.errorMessage = '' // エラーメッセージをクリア
          alert('登録が完了しました！')
          this.$router.push('/LoginPage') // ログインページにリダイレクトする
        }
      } catch (error) {
        // エラーが発生した場合の処理
        console.error(error)
        this.errorMessage = '登録に失敗しました。もう一度お試しください。'
      }
    }
  }
}
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: 7rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 95%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.5rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 1rem;
}
</style>
