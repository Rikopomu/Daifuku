<template>
  <div class="a">
    <h1>{{ title }}</h1>
    <input
      type="text"
      v-model="searchTerm"
      placeholder="犬の特徴で検索"
      @input="filterBreeds"
    />
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div class="dog-breed-container">
      <div v-for="(image, breed) in filteredDogBreeds" :key="breed" class="dog-breed-card">
        <h2>{{ dogBreedNames[breed] || breed }}</h2> <!-- 日本語名を表示 -->
        <img :src="image" :alt="breed" class="dog-image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiagnosisPage',
  data () {
    return {
      title: '見つける',
      dogBreeds: {},
      dogBreedNames: {
        'akita': '秋田犬',
        'bulldog': 'ブルドッグ',
        'chihuahua': 'チワワ',
        'dalmatian': 'ダルメシアン',
        'goldenretriever': 'ゴールデンレトリーバー',
        'labrador': 'ラブラドール'
        // 他の犬種も追加する
      },
      filteredDogBreeds: {},
      errorMessage: '',
      searchTerm: ''
    }
  },
  methods: {
    async fetchDogBreeds () {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const data = await response.json()
        return data.message // 犬の種類のリストを返す
      } catch (error) {
        this.errorMessage = '犬の種類を取得できませんでした。'
      }
    },

    async fetchDogImage (breed) {
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        const data = await response.json()
        return data.message // 犬種に対応する画像のURLを返す
      } catch (error) {
        this.errorMessage = '犬種の画像を取得できませんでした。'
      }
    },

    async displayDogBreeds () {
      const breeds = await this.fetchDogBreeds()
      const breedList = Object.keys(breeds)

      for (const breed of breedList) {
        const imageUrl = await this.fetchDogImage(breed)
        this.$set(this.dogBreeds, breed, imageUrl)
      }

      // 初期表示用にすべての犬種を表示
      this.filteredDogBreeds = { ...this.dogBreeds }
    },

    filterBreeds () {
      if (this.searchTerm === '') {
        // 検索バーが空の時は全ての犬種を表示
        this.filteredDogBreeds = { ...this.dogBreeds }
      } else {
        // 検索用の正規表現を作成
        const regex = new RegExp(this.searchTerm, 'i') // 大文字小文字を無視
        this.filteredDogBreeds = Object.keys(this.dogBreeds)
          .filter(breed => regex.test(breed))
          .reduce((obj, breed) => {
            obj[breed] = this.dogBreeds[breed]
            return obj
          }, {})
      }
    }
  },
  mounted () {
    this.displayDogBreeds()
  }
}
</script>

<style scoped>
.a {
  margin-top: 5em;
}
.error-message {
  color: red;
  text-align: center;
}

.dog-breed-container {
  display: flex;
  flex-wrap: wrap; /* ラップして次の行に移動する */
  justify-content: space-between; /* 横にスペースを均等に */
  margin: 20px 0; /* 上下にマージンを追加 */
}

.dog-breed-card {
  width: calc(33.333% - 10px); /* 3つ横並びにするための幅 */
  margin-bottom: 20px; /* 下にマージンを追加 */
  text-align: center; /* テキストを中央揃え */
}

.dog-image {
  width: 100%; /* 画像をカードの幅に合わせる */
  height: auto; /* アスペクト比を維持 */
}
</style>
