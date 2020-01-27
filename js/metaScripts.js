WebFont.load({
	google: {
		families: [
			'Muli:regular,700',
			'Cabin:regular,700',
			'Comfortaa:regular,700',
		],
	},
});

!(function(o, c) {
	var n = c.documentElement,
		t = ' w-mod-';
	(n.className += t + 'js'),
		('ontouchstart' in o || (o.DocumentTouch && c instanceof DocumentTouch)) &&
			(n.className += t + 'touch');
})(window, document);
