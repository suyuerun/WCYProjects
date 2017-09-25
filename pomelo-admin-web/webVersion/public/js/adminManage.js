
function addAdmin(){
    adminForm.reset();
    adminForm.action='/user/addAdmin';
    $('#adminForm').show();
}
function hideGoodsForm(){
    $('#adminForm').hide();
}
function onSub(){
    // for(var key in $('#editor')){
    //   document.write(key);
    //   document.write('<br/>');
    // }
    //alert($('#editor').context);
    //alert(goodsForm.editorValue.value);
    return true;
}
function delAmdin(id) {
    if(confirm('确定要执行此操作吗?'))
    {
        location.href = '/user/delAdmin?id='+id;

    }
    return false;

}
function uptpwd(oldPwd){

    $('#myModal').modal('show');
}
//   密码失去焦点验证
function ckpassword(){
    var password='<%- loginbean.pwd%>';
    var newpassword=$("#oldPwd").val();
    if(password==""){
        $("#spassword").html("密码不能为空").css("color","red");
        return false;
    }else if(!(newpassword==password)){
        $("#spassword").html("输入旧密码错误").css("color","red");
        return false;
    }else{
        $("#spassword").html("旧密码输入正确").css("color","green");
    }
}
//  确认密码的验证
function ckpassword1(){
    var password= $("#newPwd").val();
    var password1=$("#newPwd1").val();
    if(password1==""){
        $("#spassword1").html("验证密码不能为空").css("color","red");
        return false;
    }else if(password1!=password){
        $("#spassword1").html("两次密码不相同").css("color","red");
        return false;
    }else{
        $("#spassword1").html("密码确认正确").css("color","green");
    }
}
function onUptpwd(){
    return true;
}

function uptInfo(uid){
    $.get('/user/getUnameInfo?id='+uid,function(reValue){
        if(reValue!=''){
            adminForm.uname.value=reValue.uname;
            adminForm.password.value=reValue.password;
            $(adminForm.role).val(reValue.role);

        }else{
            alert('库中无此记录');
        }
    });
    adminForm.action='/user/uptInfo?id='+uid;
    $('#adminForm').show();
}
