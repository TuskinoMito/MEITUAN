var PN = document.querySelector(".PN");
var PD = document.querySelector(".PD");
var number = document.querySelector("#number");
var code = document.querySelector("#code");
var btn = document.querySelector(".btn");
var del1 = document.querySelector(".del1");
var del2 = document.querySelector(".del2");
var pwd = document.querySelector(".pwd");
var newlink = document.querySelector(".newlink");

var ran = parseInt(Math.random() * 10000);

number.addEventListener("focus", function () {
  PN.classList.add("active");
});
number.addEventListener("blur", function () {
  PN.classList.remove("active");
  //   console.log(number.value);
});

code.addEventListener("focus", function () {
  PD.classList.add("active");
});
code.addEventListener("blur", function () {
  PD.classList.remove("active");
});

number.addEventListener("input", function () {
  del1.classList.remove("hide");
  if (number.value != "" && code.value != "") {
    btn.classList.remove("unpass");
    pwd.style.color = "#414244";
  } else if (number.value == "123456") {
    pwd.style.color = "#fe8c00";
  } else if (number.value == "") {
    del1.classList.add("hide");
  } else {
    btn.classList.add("unpass");
    pwd.style.color = "#414244";
  }
});

code.addEventListener("input", function () {
  del2.classList.remove("hide");
  if (number.value != "" && code.value != "") {
    btn.classList.remove("unpass");
  } else if (code.value == "") {
    del2.classList.add("hide");
  } else {
    btn.classList.add("unpass");
  }
});

del1.addEventListener("click", function () {
  number.value = "";
  del1.classList.add("hide");
  pwd.style.color = "#414244";
});

del2.addEventListener("click", function () {
  code.value = "";
  del2.classList.add("hide");
});

btn.addEventListener("click", function () {
  if (number.value != "123456") {
    layer.open({
      content: "请输入正确的号码",
      style:
        "background-color:#ffbd00; color:#fff; border:none;font-size:0.4rem;border-radius:0.2rem", //自定风格
      time: 3,
    });
  } else if (code.value != ran) {
    layer.open({
      content: "请输入正确的验证码",
      style:
        "background-color:#ffbd00; color:#fff; border:none;font-size:0.4rem;border-radius:0.2rem", //自定风格
      time: 3,
    });
  } else if (number.value == "123456" && code.value == ran) {
    newlink.setAttribute("href", "user.html");
  }
});

pwd.addEventListener("click", function () {
  if (number.value == "123456") {
    console.log(ran);
  }
});
