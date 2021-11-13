/*!
 *Размеры всплывающего окна с видео
 *
 */

$(document).ready(function() {
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
        width       : 1280,
        height      : 720,
        maxWidth    : '94%',
        maxHeight   : '87%',  
        padding     : 0,
        margin      : 0,           
		helpers : {
			media : {
			    youtube : {
			         params : {
			             theme : 'light',
                         vq    : 'hd720',
                         css   : {
                            'body' : 'color: #fff'
                         } 
			         }
			    } 
			}
		}
	});
    
    var hash = location.hash; 
    
    if(hash == '#autoplay'){
        $('#tinymce').find('.fancybox-media').trigger('click');
    }
});