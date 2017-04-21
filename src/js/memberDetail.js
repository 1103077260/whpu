$.ajax({

	type:"GET",
	dataType:"json",
	contentType:"application/json;charset=UTF-8",
	url:"http://60.205.211.59/Whpu/memberdetail?id="+GetQueryString("id"),

	success:function(data){
                  
		document.getElementById('about-box').innerHTML =
             marked(data.user_info);

	}
});

function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}



