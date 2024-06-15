<!-- eslint-disable vue/valid-template-root -->
<template>
    <header class="header">
        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-item"><a href="#home">Home</a></li>
                <li class="nav-item"><a href="#about">About</a></li>
                <li class="nav-item"><a href="#services">Services</a></li>
                <li class="nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
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
}

.nav {
  display: flex;
  justify-content: center;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}

.nav-item a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-item a:hover {
  text-decoration: underline;
}
</style>