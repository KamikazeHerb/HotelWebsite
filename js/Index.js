$(document).ready(function () {
	$('#Single-btn').click(function () {
		if($('#Single').css('display') == 'none') {
			$('#Twin').hide("slide", { direction: "left" }, 1000);
			$('#Double').hide("slide", { direction: "left" }, 1000);
			$('#Family').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').hide("slide", { direction: "left" }, 1000);
			$('#Single').show("slide", { direction: "left" }, 1000);
		} else if($('#Single').css('display') == 'block') {
			$('#Single').hide("slide", { direction: "left" }, 1000);
			$('#Twin').hide("slide", { direction: "left" }, 1000);
			$('#Double').hide("slide", { direction: "left" }, 1000);
			$('#Family').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').hide("slide", { direction: "left" }, 1000);
		}
	});

	$('#Double-btn').click(function () {
		if($('#Double').css('display') == 'none') {
			$('#Single').hide("slide", { direction: "left" }, 1000);
			$('#Twin').hide("slide", { direction: "left" }, 1000);
			$('#Double').show("slide", { direction: "left" }, 1000);
			$('#Family').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').hide("slide", { direction: "left" }, 1000);
		} else if($('#Double').css('display') == 'block') {
			$('#Single').hide("slide", { direction: "left" }, 1000);
			$('#Twin').hide("slide", { direction: "left" }, 1000);
			$('#Double').hide("slide", { direction: "left" }, 1000);
			$('#Family').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').hide("slide", { direction: "left" }, 1000);
		}
	});
	$('#Twin-btn').click(function () {
		if($('#Twin').css('display') == 'none') {
			$('#Single').hide("slide", { direction: "left" }, 1000);
			$('#Double').hide("slide", { direction: "left" }, 1000);
			$('#Twin').show("slide", { direction: "left" }, 1000);
			$('#Family').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').hide("slide", { direction: "left" }, 1000);
		} else if($('#Twin').css('display') == 'block') {
			$('#Single').hide("slide", { direction: "left" }, 1000);
			$('#Double').hide("slide", { direction: "left" }, 1000);
			$('#Twin').hide("slide", { direction: "left" }, 1000);
			$('#Family').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').hide("slide", { direction: "left" }, 1000);
		}
	});
	$('#Family-btn').click(function () {
		if($('#Family').css('display') == 'none') {
			$('#Single').hide("slide", { direction: "left" }, 1000);
			$('#Double').hide("slide", { direction: "left" }, 1000);
			$('#Family').show("slide", { direction: "left" }, 1000);
			$('#Twin').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').hide("slide", { direction: "left" }, 1000);
		} else if($('#Family').css('display') == 'block') {
			$('#Single').hide("slide", { direction: "left" }, 1000);
			$('#Double').hide("slide", { direction: "left" }, 1000);
			$('#Family').hide("slide", { direction: "left" }, 1000);
			$('#Twin').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').hide("slide", { direction: "left" }, 1000);
		}
	});
	$('#PremiumSingle-btn').click(function () {
		if($('#PremiumSingle').css('display') == 'none') {
			$('#Single').hide("slide", { direction: "left" }, 1000);
			$('#Double').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').show("slide", { direction: "left" }, 1000);
			$('#Twin').hide("slide", { direction: "left" }, 1000);
			$('#Family').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').hide("slide", { direction: "left" }, 1000);
		} else if($('#PremiumSingle').css('display') == 'block') {
			$('#Single').hide("slide", { direction: "left" }, 1000);
			$('#Double').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').hide("slide", { direction: "left" }, 1000);
			$('#Twin').hide("slide", { direction: "left" }, 1000);
			$('#Family').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').hide("slide", { direction: "left" }, 1000);
		}
	});
	$('#PremiumDouble-btn').click(function () {
		if($('#PremiumDouble').css('display') == 'none') {
			$('#Single').hide("slide", { direction: "left" }, 1000);
			$('#Double').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').show("slide", { direction: "left" }, 1000);
			$('#Twin').hide("slide", { direction: "left" }, 1000);
			$('#Family').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').hide("slide", { direction: "left" }, 1000);
		} else if($('#PremiumDouble').css('display') == 'block') {
			$('#Single').hide("slide", { direction: "left" }, 1000);
			$('#Double').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').hide("slide", { direction: "left" }, 1000);
			$('#Twin').hide("slide", { direction: "left" }, 1000);
			$('#Family').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').hide("slide", { direction: "left" }, 1000);
		}
	});
	$('#Penthouse-btn').click(function () {
		if($('#Penthouse').css('display') == 'none') {
			$('#Single').hide("slide", { direction: "left" }, 1000);
			$('#Double').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').hide("slide", { direction: "left" }, 1000);
			$('#Twin').hide("slide", { direction: "left" }, 1000);
			$('#Family').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').show("slide", { direction: "left" }, 1000);
		} else if($('#Penthouse').css('display') == 'block') {
			$('#Single').hide("slide", { direction: "left" }, 1000);
			$('#Double').hide("slide", { direction: "left" }, 1000);
			$('#PremiumDouble').hide("slide", { direction: "left" }, 1000);
			$('#Twin').hide("slide", { direction: "left" }, 1000);
			$('#Family').hide("slide", { direction: "left" }, 1000);
			$('#PremiumSingle').hide("slide", { direction: "left" }, 1000);
			$('#Penthouse').hide("slide", { direction: "left" }, 1000);
		}
	});
	/* ^ This section makes it so that when you click on a room type in the list on the booking page, a photo
	of that room type will slide onto the page. There is then an issue with images remaining on the screen when
	the user wants to view another image. To solve this, I added in several if statements to ensure that when the
	button for a room type was clicked, any other existing room photo already on the page would be hidden and the
	desired image would display.*/
	var backgroundimages = ['../images/background1.jpg','../images/background2.jpg','../images/background3.jpg','../images/background4.jpg'];
	var count = 0;
	/*I created an array to store the background images, allowing them to cycle through, with 5000 milliseconds
	(5 seconds) on each image. It will loop infinitely.*/

		setInterval(function() {
			$('body').css('background-image','url('+ backgroundimages[count] +');');
			if(count == backgroundimages.length - 1) {
				count = 0;
			} else {
				count++;
			}
		}, 5000);
		/*^ This section includes a counter to count through the background images as they cycle, allowing the cycle to then
		repeat once the cycle has gone through the array*/


$('#clear').click(function () {
	clearFields();
});

$('#Submit').click(function () {
	saveComment();
});

loadComments();

$('#images img').mouseover(function () {
	$('#display2').attr("src", $(this).attr("src"));
	$('#display2c').text($(this).attr("alt"));
});

});
function saveComment() {
	/* obtain the inputs from the user*/
	var comment_username = $('#username').val();
	var comment_usermessage = $('#usercomment').val();

	/* clears the fields */
	clearFields();

	/* generate the html for this comment ready to be displayed */
	var commentHtml = "<span><strong>Name: </strong>" + comment_username + " <br/> <strong>Comment(s):</strong> " + comment_usermessage + "</span>";

	/* add this to what is currently in local storage */
	if (localStorage.getItem("commentData") === undefined || localStorage.getItem("commentData") === null) {
	localStorage.setItem("commentData", commentHtml);
	} else {
	localStorage.setItem("commentData", localStorage.getItem("commentData") + commentHtml);
	}

	loadComments();

}

function clearFields() {
	$('#username').val("");
	$('#usercomment').val("");
}

function loadComments() {
	$("#Reviews").html(localStorage.getItem("commentData"));
}
