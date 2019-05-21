function getCookie(name) {
   var value = "; " + document.cookie;
   var parts = value.split("; " + name + "=");
   if (parts.length === 2) return parts.pop().split(";").shift();
}

function setCookie(name, value, path = '/') {
   document.cookie = name + '=' + value + '; Path=' + path + ';';
}

function deleteCookie(name, path = '/') {
   document.cookie = name + '=; Path=' + path + '; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export {getCookie, deleteCookie, setCookie};