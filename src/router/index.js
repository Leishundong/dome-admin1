import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router);

/* Layout */
import Layout from 'components/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: _import('login/index'), hidden: true},
  {path: '/404', component: _import('errorPage/404'), hidden: true},

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index')
    }]
  },
  {
    path: '/qx',
    component: Layout,
    redirect: '/qx/index',
    name: 'qx',
    meta: {title: '权限', icon: 'example'},
    children: [
      {
        path: 'test',
        name: 'storeAdminTest',
        component: _import('permission/index'),
        meta: {title: '权限', icon: '店铺'}
      },
      {
        path: 'store',
        name: 'store',
        component: _import('permission/role'),
        meta: {title: '账号', icon: 'table'},
      },
    ]
  },


  // {
  //   path: '/md',
  //   component: Layout,
  //   redirect: '/md/test',
  //   name: 'Md',
  //   meta: {title: '门店管理', icon: 'example'},
  //   children: [
  //     {
  //       path: 'test',
  //       name: 'storeAdminTest',
  //       component: _import('storeAdmin/index'),
  //       meta: {title: '门店管理', icon: '店铺'}
  //     },
  //     {
  //       path: 'store',
  //       name: 'store',
  //       component: _import('storeAdmin/store'),
  //       meta: {title: '门店操作', icon: 'table'},
  //       hidden: true,
  //     },
  //   ]
  // },
  // {
  //   path: '/HF',
  //   component: Layout,
  //   redirect: '/HF/insurance',
  //   name: 'HF',
  //   meta: {title: '回访信息管理', icon: '客服'},
  //   children: [
  //     {
  //       path: 'index',
  //       component: _import('messageBack/insurancelist'),
  //       meta: {title: '保险回访列表', icon: '回访'}
  //     },
  //     {
  //       path: 'communication',
  //       component: _import('messageBack/insurancecommunication'),
  //       meta: {title: '保险回访', icon: '回访'},
  //       hidden: true,
  //     },
  //     {
  //       path: 'record',
  //       component: _import('messageBack/communicaterecord'),
  //       meta: {title: '回访记录', icon: '回访'},
  //       hidden: true,
  //     },
  //
  //     {
  //       path: 'buycarcommunicatelist',
  //       component: _import('messageBack/buycarcommunicatelist'),
  //       meta: {title: '买车接待表', icon: '回访'}
  //
  //     },
  //     {
  //       path: 'buycarcommunicate',
  //       component: _import('messageBack/buycarcommunicate'),
  //       meta: {title: '新增/修改/查看', icon: 'table'},
  //       hidden: true,
  //     },
  //   ]
  // },
  // // {
  // //   path: '/sale',
  // //   component: Layout,
  // //   redirect: '/sale/index',
  // //   name: 'Sale',
  // //   meta: {title: '营销管理', icon: 'example'},
  // //   children: [
  // //     {
  // //       path: 'saleAdmin',
  // //       name: 'saleAdmins',
  // //       component: _import('saleAdmin/index'),
  // //       meta: {title: '砍价表', icon: 'table'}
  // //     },
  // //     {
  // //       path: 'saleAdminsTwo',
  // //       name: 'SaleAdminsTwo',
  // //       component: _import('saleAdmin/index'),
  // //       meta: {title: '例子', icon: 'table'},
  // //     }
  // //   ]
  // // },
  // {
  //   path: '/car',
  //   redirect: '/car/index',
  //   component: Layout,
  //   name: 'Car',
  //   meta: {title: '车源管理', icon: '4S'},
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'carStart',
  //       component: _import('car/index'),
  //       meta: {title: '车源管理', icon: '4S'}
  //     },
  //     {
  //       path: 'car',
  //       name: 'caredit',
  //       component: _import('car/car'),
  //       meta: { title: '车源维护', icon: 'table' },
  //       hidden: true,
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/customer',
  //   redirect: '/customer/index',
  //   component: Layout,
  //   name: 'customer',
  //   meta: {title: '客户信息管理', icon: '客户中心'},
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'customerMessage',
  //       component: _import('customer/index'),
  //       meta: {title: '客户信息管理', icon: '客户中心'}
  //     },
  //     {
  //       hidden: true,
  //       path: 'check',
  //       name: 'check',
  //       component: _import('customer/details'),
  //       meta: {title: '查看详情', icon: 'table'}
  //     },
  //     {
  //       hidden: true,
  //       path: 'edit',
  //       name: 'edit',
  //       component: _import('customer/details'),
  //       meta: {title: '修改详情', icon: 'table'}
  //     }
  //   ]
  // },
  // {
  //   path: '/vehicle',
  //   redirect: '/vehicle/index',
  //   component: Layout,
  //   name: 'vehicle',
  //   meta: {title: '车辆管理', icon: '车辆'},
  //   children: [
  //     {
  //       path: 'index',
  //       component: _import('vehicle/index'),
  //       meta: {title: '车辆管理', icon: '车辆'}
  //     },
  //     {
  //       path: 'informationLook',
  //       name: 'information',
  //       component: _import('vehicle/information'),
  //       meta: {title: '查看车辆详情', icon: 'table'},
  //       hidden: true,
  //     },
  //     {
  //       path: 'informationUp',
  //       name: 'information',
  //       component: _import('vehicle/information'),
  //       meta: {title: '修改车辆详情', icon: 'table'},
  //       hidden: true,
  //     }
  //
  //   ]
  // },
  // {
  //   path: '/order',
  //   redirect: '/order/index',
  //   component: Layout,
  //   name: 'order',
  //   meta: {title: '订单管理', icon: '订单'},
  //   children: [
  //     {
  //       path: 'index',
  //       component: _import('order/index'),
  //       meta: {title: '订单管理', icon: '订单'},
  //     },
  //     {
  //       path: 'order',
  //       name: 'order',
  //       component: _import('order/order'),
  //       meta: {title: '处理订单', icon: 'table'},
  //       hidden: true,
  //     },
  //   ]
  // },
  //
  // {
  //   path: '/administrator',
  //   redirect: '/administrator/index',
  //   component: Layout,
  //   name: 'administrator',
  //   meta: {title: '管理员信息管理', icon: 'administrator'},
  //   children: [
  //     {
  //       path: 'administrator',
  //       name: 'administrators',
  //       component: _import('administrator/index'),
  //       meta: {title: '管理员信息管理', icon: '管理客户'}
  //     }
  //   ]
  // },
  // {
  //   path: '/salesman',
  //   redirect: '/salesman/index',
  //   component: Layout,
  //   name: 'salesman',
  //   meta: {title: '业务员信息管理', icon: '人像'},
  //   children: [
  //     {
  //       path: 'salesman',
  //       name: 'salesmen',
  //       component: _import('salesman/index'),
  //       meta: {title: '业务员信息管理', icon: '人像'}
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/basicNews',
  //   redirect: '',
  //   component: Layout,
  //   name: 'basicNews',
  //   meta: {title: '基础资料管理', icon: '设置'},
  //   children: [
  //     {
  //       path: 'advert',
  //       name: 'Advert',
  //       component: _import('basicNews/advert'),
  //       meta: {title: '广告设置', icon: '设置'}
  //     },
  //     {
  //       path: 'cutPrice',
  //       name: 'CutPrice',
  //       component: _import('basicNews/cutPrice'),
  //       meta: {title: '砍价设置', icon: '设置'},
  //     },
  //     {
  //       path: 'carOptimal',
  //       name: 'carOptimal',
  //       component: _import('basicNews/carOptimal'),
  //       meta: {title: '车辆优选', icon: '设置'},
  //     },
  //     {
  //       path: 'feedback',
  //       name: 'feedback',
  //       component: _import('basicNews/feedback'),
  //       meta: {title: '意见反馈', icon: '设置'},
  //     },
  //     {
  //       path: 'fbLook',
  //       name: 'fbLook',
  //       component: _import('basicNews/fbLook'),
  //       meta: {title: '意见反馈', icon: 'table'},
  //       hidden: true,
  //     },
  //
  //     {
  //       path: 'helpCenter',
  //       name: 'helpCenter',
  //       component: _import('basicNews/helpCenter'),
  //       meta: {title: '帮助中心', icon: '设置'},
  //     },
  //   ]
  // },
  //
  // {
  //   path: '/insurance',
  //   redirect: '/insurance/index',
  //   component: Layout,
  //   name: 'insurance',
  //   meta: {title: '保险列表', icon: '保险销售'},
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'index',
  //       component: _import('insurance/index'),
  //       meta: {title: '保险列表', icon: '保险销售'}
  //     },
  //     {
  //       path: 'insurance',
  //       name: 'insurance',
  //       component: _import('insurance/insurance'),
  //       meta: {title: '保险信息', icon: 'table'},
  //       hidden: true,
  //     }
  //   ]
  // },
  //
  // // {
  // //   path: '/financial',
  // //   redirect: '/financial/index',
  // //   component: Layout,
  // //   name: 'financial',
  // //   meta: {title: '财务管理', icon: 'table'},
  // //   children: [
  // //     {
  // //       path: 'index',
  // //       component: _import('financial/index'),
  // //       meta: {title: '财务管理', icon: 'table'}
  // //     },
  // //     {
  // //       path: 'look',
  // //       name: 'look',
  // //       component: _import('financial/look'),
  // //       meta: {title: '收支记录', icon: 'table'},
  // //       hidden: true,
  // //     }
  // //   ]
  // // },
  //
  // {
  //   path: '/carPrice',
  //   redirect: '/carPrice/index',
  //   component: Layout,
  //   name: 'carPrice',
  //   meta: {title: '车辆价格表', icon: '价格'},
  //   children: [
  //     {
  //       path: 'index',
  //       component: _import('carPrice/index'),
  //       meta: {title: '车辆价格表', icon: '价格'}
  //     },
  //     {
  //       path: 'carPrice',
  //       name: 'carPrice',
  //       component: _import('carPrice/carPrice'),
  //       meta: {title: '添加价格', icon: 'table'},
  //       hidden: true,
  //     }
  //   ]
  // },


  {path: '*', redirect: '/404', hidden: true}
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

