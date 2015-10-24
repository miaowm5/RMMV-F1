(function($){

	$(function(){
		var $side_btn_arrow = $('.side__btn--arrow');

		$side_btn_arrow.on('click', function(e) {
			e.preventDefault();
			var $self = $(this);
			var $self_ul = $self.next().next();
			var state = $self_ul.css('display');
			if(state == 'none'){
				$self.html('▼');
				$self_ul.show();
			}else{
				$self.html('▶');
				$self_ul.hide();
			}
		});


		//$('.p_03_01').addClass('side--is-current').parents('ul').show().find('.side__btn--arrow').html('▼');

	});

})(jQuery);