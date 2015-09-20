aha = {
	search: function(){
		username = $("#username").val();
		password = $("#password").val();
		data = JSON.parse(JSON.stringify({"username":username, "password":password}));
		$.ajax({
			url : "/login",
			type : "POST",
			data : data,
			dataType : "json",
			contentType: "application/json",
			success : function(data){
				console.log(data);
				alert(data);
			}
			// error : function(){

			// }
		});
		console.log(username);
		console.log(password);
	},
	login: function(){
		$(document).ready(function(){
			// if($("#username").val()=="tanmay" && $("#password").val()=="aha3d"){
				alert("YO!!");
				aha.search();
			// }
		});
	}
}
$("#loginform").submit(function(){
	aha.login();
});