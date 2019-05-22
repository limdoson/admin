/*
 * 侧边栏菜单数据文件
 */
import store from '@/store.js';

let menu = [
    {
        title : '系统设置',
        index :'1',
        sub_menu : [
            {
                id : '1-1',
                name : '基本设置',
                path : '/index/basic-setting'
            },{
                id : '1-5',
                name : '交易设置',
                path : '/index/transaction-config'
            },{
                id : '1-2',
                name : '权限管理',
                path : '/index/jdt'
            },{
                id : '1-3',
                name : '角色管理',
                path : '/index/role'
            },{
                id : '1-4',
                name : '管理员',
                path : '/index/manager'
            }
        ]
    },{
        title : '微信设置',
        index : '2',
        sub_menu : [
            {
                id : '2-1',
                name : '公众号配置',
                path : '/index/wx-config'
            },{
                id : '2-2',
                name : '公众号菜单设置',
                path : '/index/wx-menu'
            }
        ]
    },{
		title : '商品管理',
		index : '7',
		sub_menu : [
			{
				id : '7-1',
				name : '发布商品',
				path : '/index/product-submit'
			},{
				id : '7-2',
				name : '商品数据',
				path : '/index/product-data'
			}
		]
	},{
        title : '用户管理',
        index : '3',
        sub_menu : [
            {
                id : '3-1',
                name : '用户数据',
                path : '/index/member'
            },{
				id : '3-2',
				name : '数据导出',
				path : '/index/member-export'
			}
        ]
    },{
        title : '订单管理',
        index : '4',
        sub_menu : [
            {
                id : '4-1',
                name : '订单数据',
                path : '/index/order'
            },{
                id : '4-2',
                name : '订单数据导出',
                path : '/index/order-export'
            }
        ]
    },{
        title : '财务管理',
        index : '5',
        sub_menu : [
            {
                id : '5-1',
                name : '交易流水数据',
                path : '/index/trade-data'
            },{
				id : '5-3',
				name : 'U币流水记录',
				path : '/index/coin-data'
			},{
                id : '5-2',
                name : '导出财务数据',
                path : '/index/trade-data-export'
            }
        ]
    },{
		title : '活动管理',
		index : '6',
		sub_menu : [
			{
				id : '6-1',
				name : '砸金蛋活动设置',
				path : '/index/egg-config'
			},{
				id : '6-2',
				name : '砸金蛋中奖纪录',
				path : '/index/egg-winning-record'
			}
		]
	}
]

export default menu;