<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
      <img style="width:80px" src="data:image/png;base64,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" />
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item" v-if="!loggedIn">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li class="nav-item" v-if="!loggedIn">
        <router-link class="nav-link" to="/register">Register</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0" v-if="loggedIn">
      <button class="btn btn-outline-danger my-2 my-sm-0" @click="logout" type="button">Logout</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {
    data()
    {
        return {
            loggedIn: false
        }
    },
    mounted()
    {
        if(localStorage.getItem('api_token'))
        {
            this.loggedIn = true
        }
    },
    methods:
    {
        logout()
        {
            this.$emit('logoutUser')
        }
    }
}
</script>

<style>
</style>