<template>
	<div class="product-submit">
		<!-- 步骤条 -->
		<el-steps :active="active" simple finish-status="success">
			<el-step title="填写商品基本信息" icon="el-icon-edit"></el-step>
			<el-step title="上传商品详情图" icon="el-icon-edit"></el-step>
			<el-step title="其他相关设置" icon="el-icon-edit"></el-step>
		</el-steps>
		<!-- 商品基本信息 -->
		<div v-show='active == 0' class="product-info form-container">
			<el-form label-width="180px">
				<el-form-item label="商品名称">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="商品默认价格">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="会员价">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="商品分类">
					<el-select>
						<el-option>分类1</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="商品计量单位">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="商品SKU">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="商品库存">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="商品虚拟销量">
					<el-input></el-input>
				</el-form-item>
			</el-form>
		</div>
		<!-- 商品详情 -->
		<div v-show='active == 1' class="product-info form-container">
			<el-form label-width="180px">
				<el-form-item label="提示">
					<p class="tips">请确保商品封面图、商品主图尺寸一致，且不超过600kb</p>
				</el-form-item>
				<el-form-item label="商品封面图">
					<el-upload>
						<el-button type="primary" size="small" icon='el-icon-upload'>点击上传</el-button>
					</el-upload>
				</el-form-item>
				<el-form-item label="商品主图">
					<el-upload>
						<el-button type="primary" size="small" icon='el-icon-upload'>点击上传</el-button>
					</el-upload>
				</el-form-item>
				<el-form-item label="商品详情"  style='line-height: 30px;'>
					<editor></editor>
				</el-form-item>
			</el-form>
		</div>
		<!-- 其他设置 -->
		<div v-show='active == 2' class="product-info">
			其他设置
		</div>
		<div class="text-center padding">
			<el-button type="danger" size="small" @click='preStep' v-if='active > 0 '>上一步</el-button>
			<el-button type="danger" size="small" @click='nextStep' v-if='active != 2' >下一步</el-button>
			<el-button type="primary" size="small" v-if='active == 2'>发布商品</el-button>
		</div>
	</div>
</template>

<script>
	import editor from '@c/Editor'
	export default {
		components: {editor},
		data () {
			return {
				active : 1,//默认激活选项卡
			}
		},
		created () {
			
		},
		
		methods : {
			nextStep () {
				this.active ++;
			},
			preStep () {
				this.active --;
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
