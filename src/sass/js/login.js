// JavaScript Document

$(function(){
	var $login_btn=$('.login_btn');	
	$login_btn.on('click',function(){
			var  $userName=$('.userName').val();	
			var $password=$('.password').val();
			var $tanchubox=$('.tanchubox');
			var $tanchubox2=$('.tanchubox2');
		if($userName.charCodeAt(0)>=48 && $userName.charCodeAt(0)<=57){
			$tanchubox.show().html("*不能以数字开头");
		}else if($userName.length==0){
			$tanchubox.show().html("*用户名不能为空");
		}else if($userName.length<6 || $userName.length>20){
			$tanchubox.show().html("*用户名6到20之间");
		}else if(true){
			$tanchubox.show().html("用户名正确").css({"color":"blue"});
		}
		if($password.length == 0){
			$tanchubox2.show().html("*密码不能为空")
		}else if($password.length<6 || $password.length>20){
			$tanchubox2.show().html("*密码6到20之间")
		}else{
			$tanchubox2.show().html("密码正确").css({"color":"blue"});
		}
		if($tanchubox.html() == "用户名正确" && 	$tanchubox2.html() == "密码正确"){
				alert("恭喜你,登录成功");
				
		}
		
	})
	
})

/*
jQuery(function($){
		var $denglu=$('.denglu');
		$login_btn.on('click',function(){
			var $zhanghao=$('.zhanghao').val();
			var $zhanghao1=$zhanghao.replace(/ /g,"");
			var $mima=$('.mima').val();
			var $zhanghao=$('.zhanghao').val();
			var $yanzheng=$('.shuruma').val();
			console.log($zhanghao)
			if($zhanghao1.charCodeAt(0)>=48 && $zhanghao1.charCodeAt(0)<=57){
				$('.notice1').html("*不能以数字开头");
			}else if($zhanghao1.length==0){
				$('.notice1').html("*用户名不能为空");
			}else if($zhanghao1.length<6 || $zhanghao1.length>20){
				$('.notice1').html("*用户名6到20之间");
			}else if(true){
				$('.notice1').html("用户名正确").css({"color":"blue"});
			}
			if($mima.length == 0){
				$('.notice2').html("*密码不能为空")
			}else if($mima.length<6 || $mima.length>20){
				$('.notice2').html("*密码6到20之间")
			}else{
				$('.notice2').html("密码正确").css({"color":"blue"});
			}
			if($yanzheng.length == 4){
				$('.notice3').html("验证码正确").css({"color":"blue"});
			}else if($yanzheng.length == 0){
				$('.notice3').html("*请输入验证码")
			}else{
				$('.notice3').html("*验证码不正确")
			}
			if($('.notice1').html() == "用户名正确" && $('.notice2').html() == "密码正确" && $('.notice3').html() == "验证码正确"){
				alert("恭喜你,登录成功")
			}
		})
	})*/