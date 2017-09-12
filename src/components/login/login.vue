<template>
  <div class="login">
    <v-header></v-header>
    <div class="login-body">
      <div class="login-content">
        <h1>GdBlog后台管理系统</h1>
        <Form ref="login" :model="formItem" :rules="formRule" class="login-form">
          <FormItem prop="user">
            <Input type="text" v-model="formItem.user" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formItem.password" placeholder="密码">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <router-link tag="div" :to="routerTo">
              <Button type="primary" @click="handleSubmit('login')" long>登录</Button>
            </router-link>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from 'components/v-header/v-header'

  export default {
    data () {
      return {
        formItem: {
          user: '',
          password: ''
        },
        formRule: {
          user: [
            {
              required: true,
              message: '请填写用户名',
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '请填写密码',
              trigger: 'blur'
            },
            {
              type: 'string',
              min: 6,
              max: 10,
              message: '密码长度不能小于6位且不能大于10位',
              trigger: 'blur'
            }
          ]
        },
        routerTo: ''
      }
    },
    components: {
      VHeader
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            this.$Message.success('提交成功!')
            this.routerTo = '/backend-manager'
//            this.$router.push('/backend-manager')
          } else {
            this.$Message.error('验证失败!')
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
 .login {
   .login-body {
     height: 1030px;
     background: #d2d1d2;
     .login-content {
       position: absolute;
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       margin: auto;
       width: 600px;
       height: 300px;
       color: #a1a1a1;
       text-align: center;
       font-size: 24px;
       font-weight: bold;
       background: #f0f0f0;
       .login-form {
         width: 500px;
         margin: 30px 50px;
       }
     }
   }
 }
</style>
