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
