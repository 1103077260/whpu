$.ajax({

       dataType:"json",

       type:"GET",

       url:"/Whpu/work",

       contentType:"application/json; charset=UTF-8",
       
       success:function(data){
           
            var str="";
            for (var i = data.length - 1; i >= 0; i--) {
            	   var stry=data[i].work_img;
                   var stro = stry.substring(1,(stry.length-1));
                   str+="<a class='work-box fix mb10 l trans' href='../views/workDetail.html?id="+data[i].work_id+"'>"+
                        "<img class='work-box-img' src='../img/"+stro+
                       "'alt='查看详情'>"+
                        "<h3 class='tc mb10'>"+data[i].work_name+"</h3>"+
                        "</a>"
            }
            $("#work").html(str);
       }
});
window.onload=function(){

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
                           
                          document.getElementById("work").style.display ="none";

                          for (var i = 0; i <= data.length - 1; i++) {

                                  if (data[i].work_name != null && data[i].work_name != "") {
                                   var stry=data[i].work_img;
                                   var stro = stry.substring(1,(stry.length-1));
                                  str+="<a class='work-box fix mb10 l trans' href='../views/workDetail.html?id="+data[i].work_id+"'>"+
                                       "<img class='work-box-img' src='../img/"+stro+
                                       "'alt='查看详情'>"+
                                       "<h3 class='tc mb10'>"+data[i].work_name+"</h3>"+
                                       "</a>"
                                }
                           } 
                           if (data.length == 0) {

                                  str = "<h3>对不起！没有找到你要的任何信息！</h3>"
                                  $("#work1").html(str);
                           }
                           else{

                              $("#work1").html(str);
                           }                                                         
                      }
                  })
            
}
}