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
                                   work_img:data,
                                   work_name:$("#work_name").val(),
                                   work_info:$("#work_info").val()
                                  };
                                  $.ajax({
                                            type:"POST",          
                                            contentType:"application/json",
                                            url:"/Whpu/addwork",
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
                    work_img:"",
                    work_name:$("#work_name").val(),
                    work_info:$("#work_info").val()
                  };
      $.ajax({
              type:"POST",          
              contentType:"application/json",
              url:"/Whpu/addwork",
              data:JSON.stringify(newData),
              dataType:"json",
              success:function(datastr){
                                          alert(datastr);
                                       }
            });
    } 
};

function deletework(){
     if ($("#deleteworkname").val() != null) {
            $.ajax({
                type:"POST",
                url:"/Whpu/deletework",
                data:{
                  work_name:$("#deleteworkname").val()
                },
                success:function(datastring){
                    alert(datastring);
                }
            });
     }
}