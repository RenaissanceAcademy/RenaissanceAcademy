function post(html) {
	// retrieve post text and build new post
	var input = html.getElementsByClassName('text')[0];

	if (!input.value) {
		alert('Please enter a message.');
		return;
	}

	var text = document.createTextNode(input.value);
	var comment = document.createElement('li');
	comment.appendChild(text);

	// put post on the page
	html.getElementsByClassName('comments')[0].appendChild(comment);

	// clear post text box
	input.value = "";
}

var eventMap = {};
eventMap['02/04/2015'] = 'asdf';

$(document).ready(
	function showCalendar() {
		$('#calendar').datepicker({
			onSelect: function (dateText) {
				$('#calendar-events').html('<h4>Events on ' + dateText + ':</h4><ul id="calendar-events-list"></ul>');
				if (eventMap[dateText]) $('#calendar-events-list').html('<li>' + eventMap[dateText] + '</li>');
			}
		});
	}
);
