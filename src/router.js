import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    base : process.env.NODE_ENV == 'development' ? './' : '/admin/',
    mode : 'hash',
    routes : [
        {
            path : '/',
			component : () => import('./views/Login'),
        },{
            path : '/index',
            component : () => import('./views/Layout'),
            children : [
                {
                    path : '',
                    component : () => import('./views/Home')
                },{//基础设置
                    path : 'basic-setting',
                    component : () => import('./views/setting/BasicSetting'),
                },{//交易设置
                    path : 'transaction-config',
                    component : () => import('./views/setting/TransactionConfig'),
                },{//权限设置
                    path : 'jdt',
                    component : () => import('./views/setting/Jdt'),
                },{//角色管理
                    path : 'role',
                    component : () => import('./views/setting/Role'),
                },{//添加/编辑角色
                    path : 'role-handle/:id?',
                    component : () => import('./views/setting/RoleHandle'),
                },{//管理员
                    path : 'manager',
                    component : () => import('./views/setting/Manager'),
                },{//添加/编辑管理员
                    path : 'manager-handle/:id?',
                    component : () => import('./views/setting/ManagerHandle'),
                },{//微信设置
                    path : 'wx-config',
                    component : () => import('./views/wx-setting/WxConfig'),
                },{//公众号菜单设置
                    path : 'wx-menu',
                    component : () => import('./views/wx-setting/WxMenu'),
                },{//公众号二级菜单
                    path : 'wx-menu-sub/:id?',
                    component : () => import('./views/wx-setting/WxMenuSub'),
                },{//发布商品
					path : 'product-submit',
					component : () => import('./views/product/ProductSubmit'),
				},{//商品数据
					path : 'product-data',
					component : () => import('./views/product/ProductData'),
				},{//用户管理
					path : 'member',
					component : () => import('./views/member/Index'),
				},{//用户数据导出
					path : 'member-export',
					component : () => import('./views/member/MemberExport'),
				},{//订单数据
					path : 'order',
					component : () => import('./views/order/Index'),
				},{//订单数据导出
					path : 'order-export',
					component : () => import('./views/order/OrderExport'),
				},{//订单详情
					path : 'order-detail/:id?',
					component : () => import('./views/order/Detail'),
				},{//交易流水
					path : 'trade-data',
					component : () => import('./views/finance/TradeData'),
				},{//U币流水
					path : 'coin-data',
					component : () => import('./views/finance/CoinData'),
				},{//砸金蛋活动配置
					path : 'egg-config',
					component : () => import('./views/activity/EggConfig'),
				},{//砸金蛋中奖纪录
					path : 'egg-winning-record',
					component : () => import('./views/activity/EggWinningRecord'),
				}
            ]
        },{
			path : '/404',
			component : () => import('./views/404'),
		},{
			path : '*',
			redirect : '/404'
		}
    ]
})


export default router;