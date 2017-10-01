<template>
  <Card class="login-box">
    <Form>
      <h1>GDBlog后台管理系统</h1>
      <Row>
        <Col span="12" offset="6">
          <FormItem prop="user">
            <Input type="text" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend" />
            </Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12" offset="6">
          <FormItem prop="password">
            <Input type="password" placeholder="Password">
              <Icon type="ios-locked-outline" slot="prepend" />
            </Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12" offset="6">
          <FormItem>
            <Button type="primary" long v-on:click="handleLogin">登录</Button>
          </FormItem>
        </Col>
      </Row>
    </Form>
  </Card>
</template>
<script>
  import {Row, Col, Card, Form, FormItem, Input, Icon, Button} from 'iview';

  export default {
    methods: {
      handleLogin(){
        console.log(this);
        this.$router.push('/home')
      }
    }
  };
</script>
<style lang="sass" scoped>
  .login-box{
  	width: 500px;
  	height: 300px;
  	margin: 200px auto;
  	text-align: center;
  }
  .login-box h1{
  	font-size: 30px;
  	font-weight: lighter;
  	margin-bottom: 50px;
  }
</style>
