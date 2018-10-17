<template>
    <div class="header_box flex">
        <div class="logo">
        	logo
        </div>
        <div class="header_main">
        	<el-row>
        		<el-col :span="16">
					<ul class="flex head_icon_box">
						<li><i class="el-icon-menu"></i></li>
						<li><i class="el-icon-refresh"></i></li>
					</ul>
        		</el-col>
        		<el-col :span="8">
					<div class="flex user_info">
						dfg
					</div>
        		</el-col>
        	</el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LayoutHeader',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
