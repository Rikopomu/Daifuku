<template>
  <div class="post-page">
    <h1>{{ title }}</h1>
    <form @submit.prevent="submitPost">
      <div>
        <label for="title">タイトル:</label>
        <input type="text" v-model="postTitle" required />
      </div>
      <div>
        <label for="description">説明:</label>
        <textarea v-model="postDescription" required></textarea>
      </div>
      <div>
        <label for="image">画像:</label>
        <input type="file" @change="handleImageUpload" accept="image/*" required />
      </div>
      <button type="submit">投稿する</button>
    </form>

    <div v-if="submitted">
      <h2>投稿内容:</h2>
      <h3>{{ postTitle }}</h3>
      <p>{{ postDescription }}</p>
      <img :src="imagePreview" alt="Uploaded Image" v-if="imagePreview" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostPage',
  data () {
    return {
      title: '投稿する',
      postTitle: '',
      postDescription: '',
      imageFile: null,
      imagePreview: null,
      submitted: false
    }
  },
  methods: {
    handleImageUpload (event) {
      const file = event.target.files[0]
      if (file) {
        this.imageFile = file
        this.imagePreview = URL.createObjectURL(file) // プレビュー用URLを生成
      }
    },
    submitPost () {
      // ここで投稿処理を行います
      // 例: Firebaseや他のAPIにデータを送信する

      // 投稿内容をコンソールに出力（デバッグ用）
      console.log('タイトル:', this.postTitle)
      console.log('説明:', this.postDescription)
      console.log('画像ファイル:', this.imageFile)

      // 投稿成功後の処理
      this.submitted = true

      // フォームをリセット
      this.resetForm()
    },
    resetForm () {
      this.postTitle = ''
      this.postDescription = ''
      this.imageFile = null
      this.imagePreview = null
      this.submitted = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-page {
  max-width: 600px;
  margin: 7rem auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

h1 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input, textarea {
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 15px;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
