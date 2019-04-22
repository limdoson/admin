<template>
	<div id="app">
		<el-button @click='test'>哈哈</el-button>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			test () {
				this.utils.msg('哈哈')
			}
		}
	}
</script>