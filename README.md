## jquery.popoverize 0.0.1

Popovers any targetted content around any HTML element.

It is designed to be worked with Bootstrap 3.

### usage (HTML)
```html

<footer>
<div id="text_area" data-toggle="modal-popover" data-popover-target="#popover-my-modal" data-popover-location="top" data-popover-animate="yes">Text Text Text</div>
<div id="popover-my-modal">Vivamus sagittis lacus vel augue laoreet rutrum faucibus.Vivamus sagittis lacus vel augue laoreet rutrum faucibus.Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</div>
</footer>
```

### usage (Javascript)
<pre lang="javascript">
<code>
$(document).ready(function () {
	$('#text_area').on('click', function (event) {
		$(this).popoverize();
		if (!event.isPropagationStopped()) {
			event.stopPropagation();       
		}
	});
	$(document).on('click', function (event) {
		var popoverPrefix = 'popover-';
		var popoverItems = $("div[id^=" + popoverPrefix + "]");
		var len = $("div[id^=" + popoverPrefix + "]").length;
		if ($("div[id^=" + popoverPrefix + "]").length > 0 || event.target.id.indexOf(popoverPrefix) > 0) {
			for (var count = 0; count &lt; len; count++) {
				$($("div[id^=" + popoverPrefix + "]")[count]).fadeOut('normal', function () {
					return;
				});
			}
		}
	});
});
</code>
</pre>
