<template>
<div id="login">
    <div class="login-wrap">
        <ul class="menu-tab">
            <li v-for="item in menuTab" :key="item.id" :class="{'current': item.current}" @click="toggleMenu(item)">{{ item.txt }}</li>
        </ul>
        <!-- 表单开始 -->

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-form" size="middle">
        
        <el-form-item  prop="username" class="item-form">
            <label>邮箱</label>
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
       
        
        <el-form-item  prop="password" class="item-form">
            <label>密码</label>
            <el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
        </el-form-item>
        
        
        <el-form-item  prop="code" class="item-form">
            <label>验证码</label>

            <el-row :gutter="10">
            <el-col :span="15">
                <el-input v-model.number="ruleForm.code" minlength="6" maxlength="6"></el-input>
            </el-col>
            <el-col :span="9">
                <el-button type="success" class="block">获取验证码</el-button>
                </el-col>
            </el-row>



            
        </el-form-item>
        
        <el-form-item>
            <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
        </el-form-item>
        </el-form>


    </div>
</div>
</template>
<script>
export default {
    name: 'login',
    data(){

        var validateCode = (rule, value, callback) => {
        let reg = /^[a-z0-9]{6}$/;
        if (value === '') {
            return callback(new Error('请输入验证码'));
        }else if(!reg.test(value)){
            return callback(new Error('验证码格式有误！'));
        }else{
            return callback();
        }
        
      };
      var validateUsername = (rule, value, callback) => {
        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (value === '') {
          callback(new Error('请输入登录名：邮箱'));
        } else if(!reg.test(value)){
            callback(new Error('邮箱：格式错误'))
        }else{
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        var reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).{6,}$/;
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (!reg.test(value)) {
          callback(new Error('密码：(最少6位，至少包括一个大写字母、一个小写字母、一个数字、一个特殊字符)'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          password: '',
          code: ''
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' }
          ]
        },
        menuTab:[
                { txt: "登录", current: true },
                { txt: "注册", current: false }
            ]
      };

        // return{
        //     menuTab:[
        //         { txt: "登录", current: true },
        //         { txt: "注册", current: false }
        //     ],
        //     isActive: true 
        // }
    },
    created(){},
    mounted(){},
    methods:{
        // vue 数据驱动视图的渲染
        toggleMenu(data){
            // console.log(data)
            this.menuTab.forEach(elem=>{
                elem.current = false
            });
            data.current = true;
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }

}
</script>
<style lang="scss" scoped>
#login{
    height: 100vh;
    background-color: #344a5f;
}
.login-wrap{
    width: 330px;
    margin: auto;
}
.menu-tab {
    text-align: center;
    li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: white;
        border-radius: 2px;
        cursor: pointer;
    }
    .current{
        background-color: rgba(0,0,0,.1)
    }
}
.login-form{
    margin-top: 29px;
    label{
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
        color: #fff;
    }
    .item-form{ margin-bottom: 14px}
    .block {
        width:100%;
        display:block;
    }
    .login-btn{
        margin-top: 19px
    }
}
</style>