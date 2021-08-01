<template>
<div class="container">
    <div class="row" style="margin-top: 50px;">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="card card-outline-secondary">
              <div class="card-header">
                <h3 class="mb-0">Register Here</h3>
              </div>
              <div class="card-body">
                <form autocomplete="off" @submit.prevent="register" class="form" role="form">
                  <div class="form-group">
                    <label for="inputName">Name</label> 
					<input class="form-control" v-model="form.name" id="inputName" placeholder="Full Name" type="text">
                    <div class="error_message" v-if="errors.name" v-html="errors.name"></div>
                  </div>
                  <div class="form-group">
                    <label for="inputEmail3">Email</label> 
					<input class="form-control" v-model="form.email" id="inputEmail3" placeholder="Email" type="email">
                    <div class="error_message" v-if="errors.email" v-html="errors.email"></div>                  
                  </div>
                  <div class="form-group">
                    <label for="inputEmail3">Date of Birth</label> 
					<input class="form-control" v-model="form.dob" id="inputEmail3" type="date">
                    <div class="error_message" v-if="errors.dob" v-html="errors.dob"></div> 
                  </div>
                  <div class="form-group">
                    <label for="inputPassword3">Password</label> 
					<input class="form-control" v-model="form.password" id="inputPassword3" placeholder="Password" type="password"> 
                    <div class="error_message" v-if="errors.password" v-html="errors.password"></div>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-success btn-lg float-right" type="submit">Register</button>
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
        return{
            form:{
                name: '',
                email: '',
                dob: '',
                password: ''
            },
            errors: ''
        }
    },
    methods:
    {
        register()
        {
            this.axios.post('http://127.0.0.1:8000/api/v1/register', this.form)
            .then(response => {
                if(!response.data.status)
                {
                    if(response.data.errors)
                    {
                        this.errors = response.data.errors
                        return;
                    }
                }
                else
                {
                    alert(response.data.message)
                    this.$router.push('/login')
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