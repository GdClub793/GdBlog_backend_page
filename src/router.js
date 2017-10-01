//import App from './app';
const login = r => require.ensure([], () => r(require('./views/pages/login')),'login');
const home = r => require.ensure([], () => r(require('./views/pages/home')),'home');
const chart = r => require.ensure([], () => r(require('./views/components/home/chart')),'chart');
const menuManage = r => require.ensure([], () => r(require('./views/components/home/menuManage')),'menuManage');
const userManage = r => require.ensure([], () => r(require('./views/components/home/userManage')),'userManage');
const roleManage = r => require.ensure([], () => r(require('./views/components/home/roleManage')),'roleManage');
const routers = [{
    path: '/',
    meta: {
      title: 'GD后台管理系统-登陆',
    },
    component: login,
  },
  {
    path: '/home',
    redirect: '/dataStatistic',
    meta: {
      title: 'GD后台管理系统',
    },
    component: home,
    children: [
      {
        path: '/dataStatistic',
        component: chart
      },
      {
        path: '/menuManage',
        component: menuManage
      },
      {
        path: '/userManage',
        component: userManage
      },
      {
        path: '/roleManage',
        component: roleManage
      }
    ]
}];
export default routers;
