//Events
function sayHello() {
  alert("Hello World");
}
//onClick
const clickme = document.getElementById("clickme");
clickme.addEventListener("click", function () {
  alert("Click Event Occured");
});
//onsubmit
const nameinp = document.querySelector("#name-inp");
function yourName() {
  if (nameinp.value) {
    alert(`Hey ${nameinp.value}!`);
  } else {
    alert(`Please Enter Your Name Before Submitting.`);
  }
}

//regform
const regform = document.querySelector("#regForm");
const user = document.querySelector("#user");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const address = document.querySelector("#address");
const country = document.querySelector("#country");

regform.addEventListener("submit", function () {
  if (
    user.value &&
    email.value &&
    pass.value &&
    address.value &&
    country.value
  ) {
    const confirmationBox = confirm(
      `Hello ${user.value},\n Will you confirm that \n Your Email Address is: ${email.value} \n Your Password is: ${pass.value} \n Your Address is: ${address.value} \n Your country is: ${country.value}`
    );
    if (confirmationBox === true) {
      alert("Form Submitted Successfully!");
      return true;
    } else {
      alert("Form Not Submitted!");
      return false;
    }
  } else {
    alert("Please fill all fields of Form");
  }
});

//Mouseover and Mouseout Events
const mouseevent = document.querySelector("#mouseevent");
function over() {
  mouseevent.innerHTML = "Your Mouse is in the Div";
}
function out() {
  mouseevent.innerHTML = "Your Mouse is out of the Div";
}

//Cookies in Js
function setCookie() {
  document.cookie = "username=martin";
}
function getCookie() {
  if (document.cookie.length != 0) {
    alert(document.cookie);
  } else {
    alert("Cookie not available");
  }
}

function deleteCookie(name) {
  var d = new Date();
  d.setTime(d.getTime() - 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = name + "=;" + expires + ";path=/";
  alert(document.cookie);
}

//Redirect
function redirect() {
  window.location = "https://invozone.com/";
}

//Replace
function replace() {
  window.location.replace("https://invozone.com/");
}

//Reload
function reload() {
  window.location.reload();
}

//Refreshautomatically

// function timedRefresh(timeoutPeriod) {
//   setTimeout("location.reload(true);", timeoutPeriod);
// }

// window.onload = timedRefresh(5000);

//Print
function printPage() {
  window.print();
}
