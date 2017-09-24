<script>
  import {Row, Col, Card, Form, FormItem, Input, Icon, Button} from 'iview';

  export default {
    methods: {
      handleStart() {
        this.$Modal.info({
          title: 'Bravo',
          content: 'Now, enjoy the convenience of iView.',
        });
      },
    },
    render(h) { // eslint-disable-line no-unused-vars

      return (
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
                  <Button type="primary" long>登录</Button>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Card>
      );
    },
  };
</script>
