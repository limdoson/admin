<template>
	<div class="">
		<!-- 顶部 -->
		<el-row class='search-header' :gutter="10" >
			<el-col :span='6'></el-col>
			<el-col :span='3'>
				<el-select v-model='search_type'>
					<el-option label='用户ID' value='1'></el-option>
				</el-select>
			</el-col>
			<el-col :span='4'>
				<el-input></el-input>
			</el-col>
			<el-col :span='2'>
				<el-button type='primary' size="small" icon="el-icon-search">搜索</el-button>
			</el-col>
		</el-row>
		<!-- 数据表 -->
		<el-table
			:data='list'
			:header-cell-style = "{backgroundColor: '#fafafa'}"
			stripe
			ref="multipleTable">
			<el-table-column prop='id' label='ID'></el-table-column>
			<el-table-column prop='nick_name' label='昵称'></el-table-column>
			<el-table-column prop='real_name' label='真实姓名'></el-table-column>
			<el-table-column prop='team_count' label='团队人数'></el-table-column>
			<el-table-column prop='coin_count' label='金币账户'></el-table-column>
			<el-table-column prop='csp_amount' label='消费金额'></el-table-column>
			<el-table-column prop='time' label='加入时间'></el-table-column>
			<el-table-column fixed='right' label='操作' width='200'>
				<template slot-scope="scope">
					<el-button type='text' size='small' @click="$router.push('role-handle/'+scope.row.id)">查看团队成员</el-button>
					<!-- <el-button type='text' size='small' @click='deleteItem(scope.row)'>删除</el-button> -->
				</template>
			</el-table-column>
		</el-table>
		<!-- 底部分页 -->
		<div class="pagination s-b">
			<span></span>
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				search_type : '1',//搜索类型
				list : [
					{
						id :1,
						nick_name : '林',
						real_name : '林杜森',
						team_count : 100,
						coin_count : 20,
						csp_amount : 1999,
						time : '1920-08-01'
					},{
						id :1,
						nick_name : '林',
						real_name : '林杜森',
						team_count : 100,
						coin_count : 20,
						csp_amount : 1999,
						time : '1920-08-01'
					}
				]
			}
			
		},
		created () {
			
		},
		
		methods : {
			
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