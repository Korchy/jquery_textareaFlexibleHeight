//------------------------------------------------------------------
// textarea with flexible dynamic height
//------------------------------------------------------------------
$(window).load(function(){
	$('.textareaFlexibleHeight').textareaFlexibleHeight();
});
$(window).unload(function(){
	$('.textareaFlexibleHeight').textareaFlexibleHeight('destroy');
});
(function($){
	
	var methods = {
		init: function(options) {
			return this.each(function(){
				if($(this).data('textareaFlexibleHeightInit') == true) return this;
				else {
					correctTextAreaHeight();
					$(this).on('input', correctTextAreaHeight);
					$(this).on('correctHeight', correctTextAreaHeight);
					$(this).data('textareaFlexibleHeightInit', true);
				}
			});
		},
		destroy: function() {
			return this.each(function(){
				$(this).unbind('correctHeight', correctTextAreaHeight);
				$(this).unbind('input', correctTextAreaHeight);
				$(this).data('textareaFlexibleHeightInit', false);
			});
		}
	};
	
	function correctTextAreaHeight() {
		$(this).css('height', "1px");
		$(this).css('height', parseInt(25 + $(this).prop('scrollHeight'))+"px");
	}
	
	$.fn.textareaFlexibleHeight = function(method) {
		if(methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if(typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		}
		else {
			$.error('Undefined method: ' +  method);
		}
	};
}
)(jQuery);
