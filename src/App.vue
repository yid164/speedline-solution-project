<template>
  <div id="app">
    <div id="title">
      <tr/>
      <h2>The North Coast Pizza</h2>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/maps">Map</router-link> |
      <router-link to="/order">Order Now</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: silver;
  background-repeat: no-repeat;
  background-image: url("./assets/background.jpg");
}


#app title{
  font-size: 36px;
}

#nav {
  padding: 30px;
  font-size: 24px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
