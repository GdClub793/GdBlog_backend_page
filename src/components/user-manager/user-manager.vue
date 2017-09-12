<template>
  <div class="user-manager">
    <header>
      <h1>用户管理</h1>
    </header>
    <div class="user-body">
      <div class="function-bar">
        <label>
          用户名
          <Input type="text" v-model="username" size="small" style="width: 100px;">
          </Input>
        </label>
        <label>
          邮箱
          <Input type="text" v-model="eMail" size="small" style="width: 100px;">
          </Input>
        </label>
        <label>
          Uid
          <Input type="text" v-model="Uid" size="small" style="width: 100px;">
          </Input>
        </label>
        <span>状态</span>
        <Select size="small" style="width:100px; margin-right: 5px;">
          <Option v-for="item in status" :value="item" :key="item">{{ item }}</Option>
        </Select>
        <Button type="default" size="small" style="width: 60px;">查找</Button>
      </div>
      <div class="user-content">
        <Table stripe border size="small" width="1400" :columns="titleList" :data="memberList"></Table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        eMail: '',
        Uid: '',
        selected: '',
        status: [
          '全部',
          '禁用',
          '恢复'
        ],
        titleList: [
          {
            title: 'Uid',
            key: 'uid'
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '邮箱',
            key: 'eMail'
          },
          {
            title: '性别',
            key: 'sex'
          },
          {
            title: '注册时间',
            key: 'date'
          },
          {
            title: '关注数',
            key: 'follow'
          },
          {
            title: '好友数',
            key: 'friend'
          },
          {
            title: '被关注数',
            key: 'star'
          },
          {
            title: '状态',
            key: 'status'
          },
          {
            title: '操作',
            key: 'option'
          }
        ],
        memberList: [
          {
            uid: '123321',
            name: '张三',
            eMail: '123@321.com',
            sex: '男',
            date: '2011-01-01',
            follow: '12',
            friend: '3',
            star: '21',
            status: '正常',
            option: '冻结'
          },
          {
            uid: '123322',
            name: '李四',
            eMail: '321@123.com',
            sex: '女',
            date: '2011-01-02',
            follow: '22',
            friend: '4',
            star: '31',
            status: '正常',
            option: '冻结'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .user-manager {
    text-align: left;
    header {
      height: 50px;
      line-height: 50px;
      text-indent: 10px;
      border-bottom: 1px solid #ccc;
    }
    .user-body {
      .function-bar {
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        label {
          margin-right: 5px;
        }
      }
      .user-content {
        padding: 0 10px;
        margin-top: 30px;
      }
    }
  }
</style>
