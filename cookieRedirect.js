// Three items can be customized (values between quotation marks):
//
// 1. What URL shall the browser be redirected 
//    to if a cookie was previously set?

var RedirectURL = "index2.html";

// 2. How many days shall the cookie live in 
//    the visitor's browser (0 means remove 
//    cookie whenever browser closes)?

var DaysToLive = "7";

// 3. What name shall the cookie have (any 
//    sequence of alphabetical characters 
//    is okay, so long as the name doesn't 
//    conflict with any other cookies that 
//    this web page might be setting.)?

var CookieName = "HasVisited";

// No other customization is required.

function Action() {
location.href = RedirectURL;
}

DaysToLive = parseInt(DaysToLive);
var Value = 'bypass page next time';

function GetCookie() {
var cookiecontent = '';
if(document.cookie.length > 0) {
   var cookiename = CookieName + '=';
   var cookiebegin = document.cookie.indexOf(cookiename);
   var cookieend = 0;
   if(cookiebegin > -1) {
      cookiebegin += cookiename.length;
      cookieend = document.cookie.indexOf(";",cookiebegin);
      if(cookieend < cookiebegin) { cookieend = document.cookie.length; }
      cookiecontent = document.cookie.substring(cookiebegin,cookieend);
      }
   }
if(cookiecontent.length > 0) { return true; }
return false;
}

function SetCookie() {
var exp = '';
if(DaysToLive > 0) {
   var now = new Date();
   then = now.getTime() + (DaysToLive * 24 * 60 * 60 * 1000);
   now.setTime(then);
   exp = '; expires=' + now.toGMTString();
   }
document.cookie = CookieName + '=' + Value + exp;
return true;
}

if(GetCookie() == true) { Action(); }

SetCookie();
