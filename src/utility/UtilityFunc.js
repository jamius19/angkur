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

function getRandomInt(min, max) {
   /* min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;*/
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numToBangla(number) {
   switch (number) {
      case 1:
         return '১';
      case 2:
         return '২';
      case 3:
         return '৩';
      case 4:
         return '৪';
      case 5:
         return '৫';
      case 6:
         return '৬';
      case 7:
         return '৭';
      case 8:
         return '৮';
      case 9:
         return '৯';
      default:
         return;
   }
}

export {getCookie, deleteCookie, setCookie, getRandomInt, numToBangla};