/*!
 * jquery.popoverize. The jQuery source popoverizing plugin
 *
 * Copyright (c) 2014 Barış Güler
 * http://hwclass.github.io
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://docs.jquery.com/Plugins/Authoring
 * jQuery authoring guidelines
 *
 * Launch  : March 2014
 * Version : 1.0
 * Released: March 1st, 2014
 *
 *
 * popovers any targetted content around any HTML element.
 */

(function ($) {
	$.fn.popoverize = function () {
		var popoverPrefix = 'popover-',
		    $clickedEl = $(this),
		    clickedElOffset = $(this).offset(),
		    popoverContainer = $(document).find($($(this).data('popover-target'))[0]),
		    popoverContainerLeftOffset = clickedElOffset.left,
		    popoverContainerTopOffset = clickedElOffset.top;
		closeOtherPopovers(popoverContainer);
		resetOffsetOfPopoverContainer(popoverContainer);        
		if ($(this).data('toggle') == 'modal-popover' && $(this).data('popover-target') != '') {
			if ($(this).data('popover-location') == 'bottom') {
					$(popoverContainer).offset({
							top: $clickedEl.height() + popoverContainerTopOffset,
							left: popoverContainerLeftOffset
					});
			} else if ($(this).data('popover-location') == 'top') {
					$(popoverContainer).offset({
							top: ($clickedEl.outerHeight(true) + ($(popoverContainer).outerHeight(true) - $clickedEl.outerHeight(true)) - popoverContainerTopOffset) * -1,
							left: popoverContainerLeftOffset
					});
			} else if ($(this).data('popover-location') == 'right') {
					$(popoverContainer).offset({
							top: ($clickedEl.outerHeight(true) < $(this).outerHeight(true) ? popoverContainerTopOffset + (($clickedEl.outerHeight(true) / 2) + ($(popoverContainer).outerHeight(true) / 2) * -1) : popoverContainerTopOffset - $clickedEl.outerHeight(true)),
							left: $clickedEl.outerWidth(true) + popoverContainerLeftOffset
					});
			} else if ($(this).data('popover-location') == 'left') {
					$(popoverContainer).offset({
							top: ($clickedEl.outerHeight(true) < $(this).outerHeight(true) ? popoverContainerTopOffset - $clickedEl.outerHeight(true) / 2 : popoverContainerTopOffset - $clickedEl.outerHeight(true)),
							left: ($(popoverContainer).outerWidth(true) - popoverContainerLeftOffset) * -1
					});
			}
			if ($(this).data('popover-animate') == 'yes') {
					$(popoverContainer).fadeIn();
			} else {
					$(document).find($($(this).data('popover-target'))[0]).show();
			}
		}
		
		function resetOffsetOfPopoverContainer (_container) {
				$(_container).css({'top':'0','left':'0'});
		}
		
		function closeOtherPopovers (_container) {
				$(_container).css({'top':'0','left':'0'});
				$("div[id^=" + popoverPrefix + "]").not(_container).fadeOut('normal', function () {
						return;
				});
		} 
		
		return this;

	}
	
})(jQuery);

