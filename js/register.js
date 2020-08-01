// 手機號\
var phn = document.getElementById("phone");
var reb = /^1[3-9][0-9]{9}$/;
var cw ='错误'
 phn.onblur=function (){
     
 }

// 密碼
function Password() {
            var pwd = document.getElementById("txtpwd").value;
            var reg = /^[\d\w]{6,12}$/;
            var cwtxn = '错了'
            if(reg.test(pwd)){
                cwtx.innerHTML=cwtxn;
            }else{
                cwtx.innerHTML='对了';
            }
           
        }