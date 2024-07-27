<template>
  <div class="login-container">
    <h1>{{ title }}</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">ログイン</button>
    </form>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginPage',
  data () {
    return {
      title: 'ログイン',
      email: '',
      password: '',
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    async handleLogin () {
      // 簡易的なバリデーション
      if (!this.email || !this.password) {
        this.errorMessage = 'すべてのフィールドを入力してください。'
        return
      }

      try {
        // JSONPlaceholderでのログイン処理（実際には認証がないので仮のURLを使用）
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
          email: this.email,
          password: this.password
        })

        // ログインが成功した場合の処理
        if (response.status === 201) {
          this.successMessage = 'ログインに成功しました！'
          this.errorMessage = '' // エラーメッセージをクリア
          // 必要に応じてリダイレクトやセッション管理を行う
        }
      } catch (error) {
        // エラーが発生した場合の処理
        console.error(error)
        this.errorMessage = 'ログインに失敗しました。メールアドレスまたはパスワードを確認してください。'
        this.successMessage = '' // 成功メッセージをクリア
      }
    }
  }
}
</script>

<style scoped>
.login-container {
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

.success-message {
  color: green;
  text-align: center;
  margin-top: 1rem;
}
</style>
