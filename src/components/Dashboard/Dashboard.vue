<template>
<div class="container">
    <div class="row" style="margin-top: 60px;">
        <div class="col-3"></div>
        <div class="col-6">
            <h3>Your Dashboard</h3>
                <div class="card">
                <img class="card-img-top" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg" alt="Bologna">
                <div class="card-body text-center">
                <img class="avatar rounded-circle" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg" alt="Bologna">
                <h4 class="card-title">{{email}}</h4>
                <h6 class="card-subtitle mb-2 text-muted"></h6>
                <a href="#" class="btn btn-info">Date of Birth: {{dob | formatDate}}</a>
                </div>
        </div>
        <div class="col-3"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data()
    {
        return {
             user_name: '',
             email: '',
             dob: ''
        }
    },

    mounted()
    {
        this.getUser()
    },
    filters:{
        formatDate(date)
        {
            const d = new Date(date);
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return months[d.getMonth()]+', '+(d.getDate() < 10 ? '0' : '')+d.getDate()+', '+d.getFullYear()
        }
    },
    methods:
    {
        getUser()
        {
            const token = localStorage.getItem('api_token')
            this.axios.get('http://127.0.0.1:8000/api/v1/get-user-by-id'+'/'+localStorage.getItem('user_id'),{
              headers:{
                'Accept' : 'application/json',
                'Authorization' : 'Bearer '+ token
              }
            })
            .then(response => {
                if(!response.data.status)
                {
                    alert(response.data.message)
                    localStorage.removeItem('api_token')
                    localStorage.removeItem('user_id')
                    this.$router.push('/login')
                }
                else
                {
                    this.email = response.data.data.email
                    this.dob = response.data.data.dob
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
.avatar {
  border: 0.3rem solid rgba(#fff, 0.3);
  margin-top: -6rem;
  margin-bottom: 1rem;
  max-width: 9rem;
}
</style>