$(function () {
	var send = $("#send");

	ymaps.ready(function () {
		var country = ymaps.geolocation.country;
		if (country === "Украина") {
			$("#code").attr("value", "+38");
		} else if (country === "Россия") {
			$("#code").attr("value", "+7");
		}
	});

	send.click(function (e) {
		var phone = $("#phone").val(),
		name = $("#name").val(),
		email = $("#email").val(),
		code = $("#code").val(),
		operator = $("#operator").val();
		fullNum = code + operator + phone;
		if ((phone.length < 7) || (phone.length >= 8) || (isNaN(phone)) || (isNaN(code)) || (isNaN(operator))) {
			e.preventDefault();
			var fields = "#name, #email, #code, #operator, #phone";
			$(fields).css("border-right", "5px solid tomato");
		} else {
			$.post("google.com", {
				name : phone,
				phone : fullNum
			},
				function (data) {
				$.post("ordercomplete.html", data);
			});

		};
	})

	$("#ahchor").click(function () {
		var anchor = $(this).attr("href"),
		destination = $(anchor).offset().top;
		$('html,body').animate({
			scrollTop : destination
		}, 1100);
		return false;
	});
});
