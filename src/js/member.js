window.onload=function(){
      $.ajax({
            
            dataType: "json",

            type: "GET",

            url: "/Whpu/member",

            contentType: "application/json; charset=UTF-8",

            success:function(data){
                var str="";
                
                     for (var i = data.length - 1; i >= 0; i--) {
                       var stry=data[i].user_img;
                        var stro = stry.substring(1,(stry.length-1));
                      str+="<a class='card l fix mb10 trans' href='../views/memberDetail.html?id="+data[i].user_id+"'>"+
                        "<img class='card-face l' src='../img/"+stro+"' alt=''>"+
                        "<h3 class='tc mb0'>"+data[i].user_name+"</h3>"+
                        "<p class='tc mb0'>"+data[i].user_time+"</p>"+
                        "</a>"
                     }
                     
                     $("#member").html(str);
                    }             
            });
     $("#search-box").keydown(function(event){

          event=document.all?window.event:event;
           
           if((event.keyCode || event.which)==13 ){
                if($("#search-box").val() != "" ){ 
                   searchall($("#search-box").val());
                 }
          }
     });

    function searchall(str){
                  $.ajax({

                      type: "POST",

                      dataType:"json",
                      contentType:"application/json; charset=UTF-8",
                      url:"/Whpu/search?datastring=" + str,
                      data:{
                         datastring:$("#search-box").val(),
                      },

                      success:function(data){

                          var str="";
                          
                          document.getElementById("member").style.display ="none";

                          for (var i = 0; i <= data.length - 1; i++) {

                                  if (data[i].user_name != null && data[i].user_name != "") {

                                      var stry=data[i].user_img;
                                      var stro = stry.substring(1,(stry.length-1));
                           
                                  str+="<a class='card l fix mb10 trans' href='../views/memberDetail.html?id="+data[i].user_id+"'>"+
                                       "<img class='card-face l' src='../img/"+stro+"' alt=''>"+
                                       "<h3 class='tc mb0'>"+data[i].user_name+"</h3>"+
                                       "<p class='tc mb0'>"+data[i].user_time+"</p>"+
                                       "</a>"
                                }
                           } 
                           if (data.length == 0) {

                                  str = "<h3>对不起！没有找到你要的任何信息！</h3>"
                                  $("#member1").html(str);
                           }
                           else{

                              $("#member1").html(str);
                           }                                                         
                      }
                  })
            }
}