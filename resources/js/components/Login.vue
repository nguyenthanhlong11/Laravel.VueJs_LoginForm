<template>
<center>
  <form @submit.prevent="login" method="post">
    <div class="container">
      <center><h1>LOGIN FORM</h1></center>
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" v-model="username">

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" v-model="password">

      <Center><button type="submit">Login</button></Center>

    </div>
  </form>
</center>
</template>

<script>
import Vue from 'vue';

export default {
  data: function () {
    return {
      username: null,
      password: null,
      error: false
    }
  },
  methods: {
    login: function () {
      var app = this
      this.$auth.login({
        params: {
          username: app.username,
          password: app.password
        },
        success: function (response) {},
        error: function () {
          app.error = true
        },
      })
    }
  }
}
</script>

<style>
form {
  border: 3px solid #f1f1f1;
  width: 600px;
  height: auto;
  background-color: white;
  padding: 50px;
  text-align: left;
  margin-top: 10%;
}

input[type=text],
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #DE3163;
  color: white;
  margin: 30px 0;
  width: 120px;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 10px;

}

button:hover {
  opacity: 0.8;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }

  .cancelbtn {
    width: 100%;
  }
}
</style>
