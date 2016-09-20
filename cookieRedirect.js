/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: William Bontrager | http://www.bontragerconnection.com/ */
// Copyright 2006 Bontrager Connection, LLC
// This version of the script redirects automatically.
// The Web site has a few other methods for directing also:
// http://www.bontragerconnection.com/library/redirect_with_a_cookie.shtml

// Three items can be customized (values between quotation marks):
//
// 1. What URL shall the browser be redirected 
//    to if a cookie was previously set?

var RedirectURL = "success-page.html";

// 2. How many days shall the cookie live in 
//    the visitor's browser (0 means remove 
//    cookie whenever browser closes)?

var DaysToLive = "6";

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
