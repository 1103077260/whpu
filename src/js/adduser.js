function fsubmit(){
    var file = new FormData();   
    file.append("file",document.getElementById('uploadFile').files[0]);
    if (document.getElementById('uploadFile').files[0] != null && document.getElementById('uploadFile').files[0] != "") {
       var filepath=$("#uploadFile").val();
       var extStart=filepath.lastIndexOf(".");
       var ext=filepath.substring(extStart,filepath.length).toUpperCase();
       if(ext!=".BMP"&&ext!=".PNG"&&ext!=".GIF"&&ext!=".JPG"&&ext!=".JPEG"){
             alert("图片限于png,gif,jpeg,jpg格式");
       }else{
            $.ajax({
                      type:"POST",
                      contentType:false,
                      processData:false,
                      url:"/Whpu/upload",
                      data:file,
                      success:function(data){
                        var newData={
                                   user_img:data,
                                   user_name:$("#user_name").val(),
                                   user_time:$("#user_time").val()+"",
                                   user_age:$("#user_age").val()+"",
                                   user_info:$("#user_info").val()
                                  };
                                  $.ajax({
                                            type:"POST",          
                                            contentType:"application/json",
                                            url:"/Whpu/adduser",
                                            data:JSON.stringify(newData),
                                            dataType:"json",
                                            success:function(datastr){
                                            alert(datastr);
                                            }
                                  });
                      }
                    });
       }
    }else{
      var newData={
                    user_img:"",
                    user_name:$("#user_name").val(),
                    user_time:$("#user_time").val()+"",
                    user_age:$("#user_age").val()+"",
                    user_info:$("#user_info").val()
                  };
      $.ajax({
              type:"POST",          
              contentType:"application/json",
              url:"/Whpu/adduser",
              data:JSON.stringify(newData),
              dataType:"json",
              success:function(datastr){
                                          alert(datastr);
                                       }
            });
    } 
};

function deleteuser(){
     if ($("#deleteusername").val() != null) {
            $.ajax({
                type:"POST",
                url:"/Whpu/deleteuser",
                data:{
                  user_name:$("#deleteusername").val()
                },
                success:function(datastring){
                    alert(datastring);
                }
            });
     }
}