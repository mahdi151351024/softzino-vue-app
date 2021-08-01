<template>
  <div id="app">
    <Nav @logoutUser="logout"/>
    <router-view/>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Nav from './components/Layouts/Nav.vue'
// import Footer from './components/Layouts/Footer.vue'
export default {
  components:{
    Nav,
    // Footer
  },
  mounted()
  {
  },
  methods:
  {
    logout()
        {
            const token = localStorage.getItem('api_token')
            this.axios.post('http://127.0.0.1:8000/api/v1/logout', null,{
              headers:{
                'Accept' : 'application/json',
                'Authorization' : 'Bearer '+ token
              }
            })
            .then(response => {
                if(!response.data.status)
                {
                    alert(response.data.message)
                    return;
                }
                else
                {
                    alert(response.data.message)
                    localStorage.removeItem('api_token')
                    localStorage.removeItem('user_id')
                    window.location.href = window.location.origin
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
