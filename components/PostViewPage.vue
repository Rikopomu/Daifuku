<template>
  <div class="post-view-page">
    <h1>投稿一覧</h1>
    <div v-if="posts.length === 0" class="no-posts">
      <p>投稿がありません。</p>
    </div>
    <div v-else>
      <div v-for="post in posts" :key="post.id" class="post-card">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <img :src="post.image" alt="Uploaded Image" v-if="post.image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostViewPage',
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.fetchPosts()
  },
  methods: {
    fetchPosts () {
      // ここでAPIから投稿データを取得します（ダミーデータを使用）
      this.posts = [
        {
          id: 1,
          title: '初めての投稿',
          description: 'これは私の最初の投稿です。',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 2,
          title: '楽しい一日',
          description: '今日はとても楽しい一日でした。',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 3,
          title: 'プログラミングの勉強',
          description: 'Vue.jsを使ってアプリを作っています。',
          image: 'https://via.placeholder.com/150'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-view-page {
  max-width: 600px;
  margin: 7em auto;
  padding: 80px 20px;
}

h1 {
  text-align: center;
}

.post-card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 15px;
  margin: 15px 0;
}

.post-card img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}

.no-posts {
  text-align: center;
}
</style>
