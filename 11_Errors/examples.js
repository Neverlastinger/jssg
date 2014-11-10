// the following try catch is required to handle cross domain access to the export plugin
// the plugin is global for all browser tabs and, if loaded in one, it throws exception when another
// tab from a different domain tries to use its methods
try {
	this.installed = !!plugin.EnqueueExportTask;
} catch (exception) {
	this.installed = false;
}

/////////////////

try { 
	var status = ajaxRequest.status;
} catch (e) {
	// http://stackoverflow.com/questions/7287706/ie-9-javascript-error-c00c023f
	return;
}

/////////////////

var Events = new function() {
	
	this.fire = function(name, data) {
		var e = new CustomEvent(name, {'detail': data});
		document.dispatchEvent(e);
	};
};

/////////////////

// polyfill for IE9 and IE10
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
try {
	new CustomEvent('x');
} catch (ex) {
	(function () {
		function CustomEvent ( event, params ) {
			params = params || { bubbles: false, cancelable: false, detail: undefined };
			var evt = document.createEvent( 'CustomEvent' );
			evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
			return evt;
		};

		CustomEvent.prototype = window.Event.prototype;

		window.CustomEvent = CustomEvent;
	})();
}

///////////////////

if (navigations.length == 0) {
	console.log('[Navigation] Navigation not found for the following parameters: ', params);
	throw new Error('Navigation not found');
}