<template>
  <header>
    <Row>
      <Col :xs="24" :sm="10">
        <h1><a href="javascript:;">GD后台管理系统</a></h1>
      </Col>
      <div class="logout pull-right">
        <p>
          <span>欢迎您，哈哈哈</span>
          <a href="javascript:;">登出</a>
        </p>
      </div>
    </Row>
  </header>
</template>
<script>
  // import {Row, Col} from 'iview';
  export default{

  };
</script>
<style lang="sass" scoped>
  header{
  	height: 80px;
    padding: 0 48px;
  	background: #495060;
    box-shadow: 0 1px 1px rgba(0,0,0,.08);
    h1{
      font-size: 32px;
      line-height: 80px;
      font-weight: bold;
      a{
        color: #2d8cf0;
      }
    }
    .logout{
      height: 80px;
      padding: 30px 0;
      font-size: 14px;
      color: #fff;
      p{
        line-height: 20px;
        span{
          padding-right: 10px;
          border-right: 1px solid #ccc;
        }
        a{
          padding-left: 10px;
        }
      }
    }
  }
</style>
