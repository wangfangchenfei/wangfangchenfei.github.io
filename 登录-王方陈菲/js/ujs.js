var account = [
  ["wangruipeng", "wangruipengabcd"],
  ["liaosixue", "liaosixueabcd"]
];

function validate(f) {
  var flag = false;
  var username = f.username.value;
  var password = f.password.value;
  for (var x = 0; x < account.length; x++) {
    if (account[x][0] == username && account[x][1] == password) {
      flag = true;
      alert("登录成功！");
    }
  }
  if (!flag) {
    alert("登录失败！");
  }
  return flag;
}
