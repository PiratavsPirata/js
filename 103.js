 var linkRewriterplayer = function(a, b) {
  $('iframe[src*="' + a + '"]').each(function() {
   $(this).attr('src', $(this).attr('src').replace(a, b));
  });
 };

linkRewriterplayer('https://openload.co/', 'http://abrirlinks.com/iframe/co/103/openload/');
