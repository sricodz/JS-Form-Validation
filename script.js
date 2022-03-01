const uname=document.getElementById("uname");
const email=document.getElementById("email");
const pw=document.getElementById("pw");
const cpw=document.getElementById("cpw");
const phone=document.getElementById("phone");
const tc=document.getElementById("tc");
const age=document.getElementById("age");

const gender=document.getElementsByName("gender");
const form=document.getElementById("form");
const hob=form.querySelectorAll('input[type="checkbox"]');
const btn=document.getElementById("btn");

const error=document.getElementById("error");
const error1=document.getElementById("error1");
const error2=document.getElementById("error2");
const error3=document.getElementById("error3");
const error4=document.getElementById("error4");
const error5=document.getElementById("error5");
const error6=document.getElementById("error6");
const error7=document.getElementById("error7");



var isValidname=false;
var isValidemail=false;
var isValidpw=false;
var isValidcpw=false;
var isValidphone=false;
var isValidtc=false;
var isValidage=false;
var isValidhob=false;
var isVaildgender=false;

var ageValue=parseInt(age.value);



btn.addEventListener('click',(e)=>{

    e.preventDefault();
    validate();

    if(isValidname && isValidemail&&isValidpw&&isValidcpw&&isValidphone&&isValidage&&isVaildgender&&isValidhob&&isValidtc){
        form.submit();
    }
})



function validate(){

    isValidname=false;
    isValidemail=false;
    isValidpw=false;
    isValidcpw=false;
    isValidphone=false;
    isValidtc=false;
    isValidage=false;
    isVaildgender=false;
    isValidhob=false;

    //username check
    if(uname.value==""){
        var er="**Name cannot be Empty**";
        setError(uname,er,error);  
    }else{
        isValidname=true;
        setSuccess(uname,error);
    }

    //emailcheck
    
    //var reg="/^([a-zA-z0-9\.-])+@([a-zA-Z0-9-]+).([a-z]{2,10})$/";
    //var res=reg.text(email.value);
    //console.log(res);
    if(email.value==""){
        var msg="** Email cannot be Empty **";
        setError(email,msg,error1);
    }
    /* else if(!res){
        var msg="** Invalid Email **"
        setError(email,msg,error1);
    }*/
    else{
        setSuccess(email,error1);
        isValidemail=true;
    }
    //password check
    if(pw.value==""){
        var msg="** Password cannot be Empty **"
        setError(pw,msg,error2);
    }else if(pw.value.length<8){
        var msg="** Password length should be atleast 8 characters **";
        setError(pw,msg,error2);
    }else if(pw.value.search(/[0-9]/)==-1){
        var msg="** Password contains atleast 1 numeric value **"
        setError(pw,msg,error2);
    }else if(pw.value.search(/[a-z]/)==-1){
        var msg="** Password contains atleast 1 lowercase value **"
        setError(pw,msg,error2);
    }else if(pw.value.search(/[A-Z]/)==-1){
        var msg="** Password contains atleast 1 uppercase value **"
        setError(pw,msg,error2);
    }else if(pw.value.search(/[!\.\@\#\%\^\&\$\(\)\]]/)==-1){
        var msg="** Password contains atleast 1 special character **"
        setError(pw,msg,error2);
    }else{
        setSuccess(pw,error2);
        isValidpw=true;
    }

    // check confirm password
    if(cpw.value==""){
        var msg="** Confirm Password cannot be Empty **"
        setError(cpw,msg,error3);
    }else if(pw.value!==cpw.value){
        var msg="** Password and Confirm Password are not matched **"
        setError(cpw,msg,error3);
    }else{
        setSuccess(cpw,error3);
        isValidcpw=true;
    }

    // phone check
    if(phone.value==""){
        var msg="** Invalid Phone**"
        setError(phone,msg,error4);
    }else if(phone.value.length<=10){
        var mg="** Number must be 10 digits **"
        setError(phone,mg,error4);
    }else{
        setSuccess(phone,error4);
        isValidphone=true;
    }

    // age check
 
    if(age.value==""){
        var mg="** Invalid Age **"
        setError(age,mg,error7);
    }else if(ageValue<8 && ageValue>150){
        var mg="** Invalid Age **"
        setError(age,mg,error7);
    }else if(isNaN(age.value)){
        var mg="** Invalid Age **";
        setError(age,mg,error7);
    }else{
        setSuccess(age,error7);
        isValidage=true;
    }

    // gender check
    var gen=false;
    for(var i=0;i<gender.length;i++){
        if(gender[i].checked==true){
            gen=true;
            break;
        }
    }
    if(!gen){
       // console.log("not checked")
        var msg="** Select Gender **"
        error5.innerText=msg;
    }else{
        isVaildgender=true;
        error5.innerText="";
    }

    // hobbies check
    var c=0;
    hob.forEach((item)=>{
        if(item.checked){
            c=c+1;
        }
    })
    if(c<3){
        error6.innerText="** Select Atleast 3 Hobbies **";
    }else{
        isValidhob=true;
        error6.innerText="";
    }

    //terms and conditions check
    var tandc=document.getElementById("tandc");
    if(tc.checked){
        isValidtc=true;
        tandc.style.color="rgb(66, 150, 153)";
    }else{
        tandc.style.color="red";
    }
}

function setError(nam,msg,err){
    nam.style.borderColor="red";
    err.innerText=msg;
}
function setSuccess(nam,er){
    nam.style.borderColor="green";
    er.innerText="";
}