var password="";
password=prompt(' 请输入密码:','');
 if (password != 'mima') {
alert(" 密码不正确!");
window. opener= null; window. close();
}else{
alert("进入成功！");
}