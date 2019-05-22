<template>
	<div class="">
		<div class="form-container">
			<el-form label-width="100px">
				<el-form-item label='选择导出数据'>
					<el-checkbox-group v-model='result' @change='getResult'>
						<el-checkbox v-for='(item,index) in data_list' :key='index' :label='item.label' >{{item.value}}</el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" size="small" icon="el-icon-upload">导出数据</el-button>
				</el-form-item>
			</el-form>
		</div>
		
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				data_list : [
					{
						label : 'id',
						value : 'ID'
					},{
						label : 'nick_name',
						value : '昵称'
					},{
						label : 'name',
						value : '姓名'
					},{
						label : 'team_acount',
						value : '团队成员数量'
					},{
						label : 'coin_acount',
						value : '金币账户金额'
					},{
						label : 'csp_amount',
						value : '消费总金额'
					}
				],
				result : []
			}
		},
		created () {
			
		},
		
		methods : {
			getResult () {
				console.log(this.result)
			}
		},
		//mounted () {},
		// watch () {
		// 	a (n,o) {
		// 		
		// 	}
		// },
		// computed () {
		// 	a () {
		// 		return this.a
		// 	}
		// },
	}
</script>
