<template>
	<!-- 登录onload -->
	<div id="onload">
		<div class="onload_main">
			<div class="onload_top">
				<div class="onload_top2">
					<router-link to="Home"><span class="num1"><img src="../assets/jiantou.png" alt="" id="onload-back"></span>
					<span style="color:#75a739;">登录</span></router-link><!-- <router-link to="register"><span id="onload-loading">注册</span></router-link> -->
				</div>
			</div>
			<div class="onload_bottom">
				<form action="">
					<input type="text" class="form1" placeholder="请输入手机号码" v-model = "username" maxlength="11">
					<input class="form2" type="password" placeholder="请输入您的密码" v-model = "password">
					<input type="button" value="确定" class="button" @click = "dengLu()">
				</form>
			</div>
		</div>
	</div>  
</template>

<script>
export default {
	name: 'Onload',
	data () {
		return {
			username: '',
			password: ''		
		}
	},
	methods: {
		dengLu() {
			this.$http.get("../../static/login.json").then((res)=>{

				if(this.username == res.data.userName && this.password == res.data.password){
					// console.log(123);
					sessionStorage.favour = false; //用来判断用户当前行为是新进系统，还是只是刷新页面。
					location.href = "/home"
				} else {
	                confirm("您输入的信息有误");
	            }
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin: 0;
	padding:0;
	box-sizing:border-box;
	font-family: "微软雅黑";
}
html{
	font-size: 100px;
}
body{
	font-size: 16px;
	background:url(../assets/login-bg.png);
}
ul,ol,li{
	list-style: none;
}
a{
	text-decoration: none;
}
img{
	border: none;
}
#onload{
	width:100%;
	height:6.75rem;
	z-index: 3;
}
#onload .onload_main{
	width: 100%;
	height: 2.95rem;
	padding: .2rem;
}
#onload .onload_main .onload_top{
	width: 100%;
	height: .66rem;
	text-align: center;

}
#onload .onload_main .onload_top2{
	width: 100%;
	height:100%;
	font-size: .2rem;
	/*color: #fff;*/
	position: relative;
}
#onload .onload_main .onload_top span:nth-of-type(1) img{
	position: absolute;
	left: 0;
	width: .28rem;
	height: .28rem;
	font-size: .2rem;
	color: #fff;
}
#onload .onload_main .onload_top span:nth-of-type(2){
	font-size: .2rem;
	color: #fff;
}
#onload .onload_main .onload_top #onload-loading{
	position: absolute;
	right: 0;
	top: .05rem;
	font-size: .13rem;
	color: #ff8f5c;
	display: inline-block;
}
#onload .onload_main  .onload_bottom{
	width: 100%;
	height: 1.89rem;
}
#onload .onload_main  .onload_bottom form img{
	width: .2rem;
	height: .24rem;
	position: relative;
	bottom: .29rem;
	left: -1.5rem;
}
#onload .onload_main  .onload_bottom form .form1,#onload .onload_main  .onload_bottom form .form2{
	width: 100%;
	height: .3rem;
	outline: none;
	border:none;
	border-bottom:1px solid #fff;
	color: #ccc;
	text-indent: 10px;
	margin-bottom:0.1rem;
}
#onload .onload_main  .onload_bottom form p{
	width: 100%;
	height: .29rem;
	padding: .1rem 0 0 0;
}
#onload .onload_main  .onload_bottom form p span{
	float: right;
	color: #ff8f5c;
	font-size: .14rem;
}
#onload .onload_main  .onload_bottom form .button{
	width: 100%;
    height: .4rem;
    background: rgba(222, 216, 214, 0.63);
    border: none;
    color: #877373;
    font-size: .20rem;
    margin-top: .4rem;
}
</style>
