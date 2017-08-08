setInterval(
(function(id,imgs) {
var cnt, len, im;
len = imgs.length;
im = [];
for (var cnt = len; cnt > 0; cnt--) {
im[cnt] = new Image();
im[cnt].src = imgs[cnt];
}
return (function() {
   document.getElementById(id).src = imgs[(++cnt)%len];
   });
})('myimg', ['images/img1a.jpg', 'images/img2a.jpg', 'images/img3a.jpg', 'images/img4a.jpg', 'images/img5a.jpg']) ,5000);
