aha = {
	search: function(){
		var username = $("#username").val();
		var password = $("#password").val();
		var data = JSON.parse(JSON.stringify({"username":username, "password":password}));
		$.ajax({
			url : "login",
			type : "POST",
			data : data,
			// dataType : "json",
			// contentType: "text/json",
			success : function(data){
				console.log(data);
				alert(data);
			},
			error : function(data){
				alert("error");
			}
		});
		alert("YO!!");
		console.log(username);
		console.log(password);
	},
	login: function(){
		$(document).ready(function(){
			// if($("#username").val()=="tanmay" && $("#password").val()=="aha3d"){
				aha.search();
			// }
		});
	}
}
// $("#loginform").submit(function(){
// 	aha.login();
// });