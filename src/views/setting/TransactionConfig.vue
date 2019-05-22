<template>
	<div class="transaction-config">
		<div class="spe-container">
			<div class="input-item f-s">
				<span class="input-item-title">交易频次设置</span>
				<div class='f-s'>
					每
					<el-input v-model='day_unit'   clearable></el-input>
					天可交易
					<el-input v-model='time_unit'   clearable></el-input>
					手，
					买入后<el-input clearable v-model='time_for_sale'></el-input>天可卖出。
				</div>
			</div>
			<div class="input-item f-s">
				<span class="input-item-title">默认买进价格</span>
				<el-input clearable v-model='default_buy_price'></el-input>元。
				<p class="tips">（如果商品未设置买进价格，则以该价格为默认买进价格）</p>
			</div>
			<div class="input-item f-s">
				<span class="input-item-title">默认卖出价格</span>
				<el-input clearable v-model='default_sale_price'></el-input>元。
				<p class="tips">（如果商品未设置卖出价格，则以该价格为默认卖出价格）</p>
			</div>
			<div class="input-item f-s">
				<span class="input-item-title">卖出获得U币</span>
				<el-input clearable="" v-model='coin_for_salse'></el-input>个。
			</div>
			<div class="input-item f-s">
				<span class="input-item-title">扫码进入送U币</span>
				<el-input clearable="" v-model='coin_for_reg'></el-input>个。
			</div>
			<div class="input-item f-s">
				<span class="input-item-title">U币提现设置</span>
				<el-input clearable="" v-model='coin_minimum'></el-input>个U币起可提现，
				手续费
				<el-input clearable="" v-model="coin_service_charge"></el-input>%
			</div>
			<div class="input-item f-s">
				<span class='input-item-title f-e' >会员佣金级别</span>
				<el-input v-model='rules_num' clearable readonly></el-input>级
				<el-button type='primary' size='small' @click='addRules' style='margin-left: 10px;'>添加</el-button>
				<el-button type='danger' size='small' @click='reduceRules'>减少</el-button>
			</div>
			<!--团队奖励规则-->
			<div class="input-item f-s">
				<span class='input-item-title f-e'>会员佣金规则</span>
				<ul class="rule-list">
					
					<li class="f-s">
						<div>等级名称</div>
						<div>条件</div>
						<div>返送U币数量</div>
					</li>
					<li class="f-s" v-for='(item,index) in rules_list' :key='index'>
						<div>
							<el-input v-model="item.name"></el-input>
						</div>
						<div>
							团队消费金额满
							<el-input v-model='item.price'></el-input>
							元
						</div>
						<div>
							送
							<el-input v-model='item.coin'></el-input>
							U币
						</div>
					</li>
				</ul>
			</div>
			<div class="input-item f-s">
				<span class="input-item-title">&nbsp;</span>
				<el-button type='primary' size='small' icon='el-icon-upload2' @click='save'>保存设置</el-button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		components : {},
		data () {
			return {
				day_unit : 1, //交易频次天数设置
				time_unit : 1,//交易频次交易次数设置
				time_for_sale : 7,//买入后多少天可卖出
				default_buy_price : 1840,//默认买进价格
				default_sale_price : 1990,//默认卖出价格
				coin_for_salse : null,//卖出获得U币数量
				coin_for_reg : null,//扫码进入送U币数量
				coin_minimum : 100,//多少U币起可提现
				coin_service_charge : 10,//U币提现手续费
				rules_num : 3,//奖励条数
				rules_list : [
					{
						name : '一级',
						price : 10,
						coin : 1
					},{
						name : '二级',
						price : 20,
						coin : 2
					},{
						name : '三级',
						price : 30,
						coin : 3
					}
				]
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			/*
			 * 添加奖励条数
			 */
			addRules () {
				this.rules_num ++;
				this.rules_list.push({
					price : null,
					coin : null
				})
			},
			/*
			 * 减少奖励条数
			 */
			reduceRules () {
				if (this.rules_num <= 1) {
					this.utils.msg('至少需要设置一条团队奖励规则')
					return;
				}
				this.rules_num --;
				this.rules_list.splice(this.rules_list.length - 1, 1)
			},
			/*
			 * 保存设置
			 */
			save () {
				if (this.day_unit < 1 || this.time_unit < 1) {
					this.utils.msg('交易频次最小设置值为每1天可交易1手');
					return;
				}
				if (!this.default_buy_price || !this.default_buy_price) {
					this.utils.msg('请设置默认买进价格及默认卖出价格');
					return;
				}
				if (this.default_buy_price <= 0 || this.default_sale_price <= 0) {
					this.utils.msg('默认买进价格及默认卖出价格必须大于0');
					return;
				}
				let flag = this.rules_list.every(item => {
					return item.price > 0 && item.coin > 0
				})
				if (!flag) {
					this.utils.msg('请设置正确的团队奖励规则');
					return;
				}
			}
		}
	}
</script>
<style lang="less">
	.rule-list {
		width: 800px;
		border: 1px solid #f1f1f1;
		li {
			padding: 10px 0;
			text-align: center;
			&:nth-of-type(1) {
				background: #f1f1f1;
			}
			div {
				width: 50%;
				text-align: center;
			}
		}
	}
</style>