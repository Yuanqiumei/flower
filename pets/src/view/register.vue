<template>
    <div class="register">
        <div class="w3-agilesale welcome">
            <div class="regist">
                <h3>Register</h3>
            </div>
            <div class="container">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm login-container">
                    <el-form-item  prop="name">
                        <el-input class="input" placeholder="Email" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item  prop="pass">
                        <el-input  class="input" placeholder="Password" type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="text" @click="cancel">cancel</el-button>
                        <el-button type="submit" @click="submitForm">register</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            ruleForm: {
                name: '',
                pass: ''
            },
            rules: {
                name: [
                { required: true, message: 'Please write email', trigger: 'blur' }
                ],
                pass: [
                { required: true, message: 'Please write password', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        cancel() {
            this.$router.go(-1)
        },
        submitForm() {
            var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!reg.test(this.ruleForm.name)){
                this.$alert('The mailbox format is incorrect', {
                            dangerouslyUseHTMLString: true,
                            showCancelButton:false,
                            showClose: false
                });
            } else{
                var url = 'user/regist';
                const params = {
                    user_email: this.ruleForm.name,
                    password: this.ruleForm.pass
                }
                this.$http
                    .post(url,params,{
                          headers: {
                          token: params
                      }
                    })
                    .then( res => {
                        this.$confirm('Regist Successfully', {
                            dangerouslyUseHTMLString: true,
                            showCancelButton:false,
                            showClose: false
                        })
                        .then(() =>{
                            this.$router.go(-1)
                        })
                    })
            }
        }
    }
}
</script>

<style scoped>
.w3-agilesale.welcome {
    text-align: center;
    background: url('../assets/images/g6.jpg')no-repeat center 0px;
    background-size: cover;
}
.container {
    width: 92%;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 300px;
}
.regist {
    padding-top: 200px;
    color: brown;
    font-size: 32px;
    letter-spacing: 4px;
}
.input {
    width: 50%;
}
.el-button--text {
    color: #409EFF;
    background: white;
    padding-left: 0;
    padding-right: 0;
    width: 80px;
}
.el-button+.el-button {
    margin-left: 10px;
    width: 80px;
    color: #fff;
    background-color: darkorange;
    border: 1px solid darkorange;
}
.el-form-item__label {
    text-align: right;
    font-size: 18px;
    color: currentColor;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
}

</style>


