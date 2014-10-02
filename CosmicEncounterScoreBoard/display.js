/**
 * Displays the player data.
 *
 * @param name - the name of the player
 * @param ratio - the game ratio of the player
 */
var displayPlayer = function(name, ratio) {

	/**
	 * Creates an arbitrary DOM element with an optional content.
	 *
	 * @param tagName - the type of the element (div, span, li..)
	 * @param content - optional, can be string or list of other DOM elements. The content is added inside the newly created element. 
	 * @returns the newly created DOM element
	 */
	var createElement = function(tagName, content) {
		
		var element = document.createElement(tagName);
		
		if (!content) {
			return element;
		}
		
		if (Array.isArray(content)) {
			for (var i = 0; i < content.length; i++) {
				element.appendChild(content[i]);
			}
		} else if (typeof content == 'string') {
			element.innerHTML = content;
		}
		
		return element;
	}
	
	document.querySelector('#scores').appendChild( createElement( 'li', [createElement('div', name), createElement('div', ratio)] ) );
};