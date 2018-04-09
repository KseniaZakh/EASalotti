function resize () {
	if ($("div.container > nav").length!=0 &&
	$("div.fixed_wrap > ul").length!=0) {
		if ($("div.container > nav").hasClass("opened") &&
		 $("div.fixed_wrap > ul").hasClass("opened")) {
					$("div.container > nav").removeClass("opened");
					$("div.fixed_wrap > ul").removeClass("opened");
			}
		}
	}

$(document).ready(function() {
	$("div.fixed_wrap > ul").click(function() {
		if ($("div.container > nav").length!=0) {
		if ($(this).hasClass("opened")) {
			$(this).removeClass("opened");
			$("div.container > nav").removeClass("opened");
			}
		else {
			$(this).addClass("opened");
			$("div.container > nav").addClass("opened");
			}
			}
		});

		$("div.container > nav").click(function() {
			if ($(this).hasClass("opened")) {
				$(this).removeClass("opened");
				$("div.fixed_wrap > ul").removeClass("opened");
				}
		});

		$("div.fixed_wrap > div.search_gadg").click(function() {
			$("div.fixed_wrap > form").toggle();
		}
	);

		return false;
	});
