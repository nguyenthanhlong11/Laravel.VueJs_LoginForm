<template>
<div class="container-home">
  <div class="home">
    <ul>
      <li class="logo">LOGO</li>
      <li id="home">
        <router-link to="/home"> HOME </router-link>
      </li>
      <li>
        <router-link to="/profile"> DISCOVERY </router-link>
      </li>
      <li>PHOTOS</li>
      <li>CONTACT</li>
      <li>
        <router-link to="/login"> LOGIN</router-link>
      </li>
      <li>
        <router-link to="/edit"> EDIT</router-link>
      </li>
    </ul>
  </div>
  <main class="py-4">
  <router-view></router-view></main>
</div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.container-home {
  background-image: url("https://raw.githubusercontent.com/LeMinhQuoc/API-Laravel/main/Background.png");
  width: 100%;
  height: 900px;
  background-repeat: no-repeat;
  background-size: cover;
}

ul li {
  list-style-type: none;
  margin-left: 2%;
}

ul {
  display: flex;
  width: 100%;
  background-color: #C0C0C0;
}

#home {
  margin-left: 60%;
}
</style>
