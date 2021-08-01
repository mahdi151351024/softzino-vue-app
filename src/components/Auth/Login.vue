<template>
<div class="container">
    <div class="row" style="margin-top: 60px;">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="card card-outline-secondary">
              <div class="card-header">
                <h3 class="mb-0">Login Here</h3>
              </div>
              <div class="card-body">
                <h5 class="error_message" v-if="login_error" v-html="login_error"></h5>  
                <form autocomplete="off" @submit.prevent="login" class="form" role="form">
                  <div class="form-group">
                    <label for="inputEmail3">Email</label> 
					<input class="form-control" v-model="form.email" id="inputEmail3" placeholder="Email" type="email">
                    <div class="error_message" v-if="errors.email" v-html="errors.email"></div>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword3">Password</label> 
					<input class="form-control" v-model="form.password" id="inputPassword3" placeholder="Password" type="password"> 
                    <div class="error_message" v-if="errors.password" v-html="errors.password"></div>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-success btn-lg float-right" type="submit">Login</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
        <div class="col-md-4"></div>
    </div>
</div>
</template>

<script>
export default {
    data()
    {
        return {
             form:{
                email: '',
                password: ''
            },
            errors: '',
            login_error: ''
        }
    },
    methods:{
        login()
        {
            this.axios.post('http://127.0.0.1:8000/api/v1/login', this.form)
            .then(response => {
                if(!response.data.status)
                {
                    if(response.data.errors)
                    {
                        this.errors = response.data.errors
                        this.login_error = ''
                        return;
                    }
                    else
                    {
                        this.login_error = response.data.message
                        this.errors = ''
                    }
                }
                else
                {
                    alert(response.data.message)
                    localStorage.setItem('api_token', response.data.data.access_token)
                    localStorage.setItem('user_id', response.data.data.id)
                    window.location.href = window.location.origin+'/dashboard'
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
    label{
        float:left;
    }
    .error_message
    {
        color: red;
        text-align: left;
    }
</style>