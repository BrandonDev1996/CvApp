window.Cookie={set:function(e,t,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var r="expires="+i.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"},get:function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var r=n[i];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}};