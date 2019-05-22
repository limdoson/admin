<template>
	<div class="not-found">
		<h1>404 NOT FOUND</h1>
		<p>抱歉，您访问的页面不存在。</p>
		<p class="green">{{time}}秒后自动返回</p>
	</div>
</template>
<script>
	export default {
		components : {},
		data () {
			return {
				time : 5
			}
		},
		created  () {
			this.time_to_back();
		},
		//mounted () {},
		methods : {
			time_to_back () {
				setTimeout(()=>{
					if (this.time == 0) {
						this.$router.back();
						return;
					}
					this.time --;
					this.time_to_back();
				},1000)
			}
		}
	}
</script>
<style lang="less">
	.not-found {
		padding : 50px 300px;
		h1 {
			margin-bottom: 20px;
			font-size: 40px;
			font-weight: bold;
		}
		p {
			margin-bottom: 20px;
			font-size: 14px;
		}
	}
</style>