// $(window).load(function() { 
//     $("a[href^='#']").click(function(){
//         var _href = $(this).attr("href");
//         $("html, body").animate({ scrollTop: $(_href).offset().top});
//         return false;
//     });
// });

$("#sendMail").on("click", function(){
    console.log("test");
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var subject = $("#subject").val().trim();
    var text = $("#text").val().trim();

    if(name == ""){
        $("#errorMess").text("Введите имя")
        return false;
    }else if(email == ""){
        $("#errorMess").text("Введите email")
        return false;
    }else if(subject == ""){
        $("#errorMess").text("Введите subject")
        return false;
    }else if(text == ""){
        $("#errorMess").text("Введите text")
        return false;
    }

    $("#errorMess").text("");

    $.ajax({
        url: "mail.php",
        type: 'POST',
        cache: false,
        data: {'name': name, 'email': email, 'subject': subject, 'text': text},
        dataType: 'html',
        beforeSend: function(){
            $("#sendMail").prop("disabled", true);
        },
        succes: function(data){
            alert("Спасибо")
            $("#sendMail").prop("disabled", false);
        }
        });
        
});

// $(document).ready(function() {
// 	$('#form').submit(function() { 
// 		// if (document.form.name.value == '' || document.form.phone.value == '' ) {
// 		// 	valid = false;
// 		// 	return valid;
// 		// }
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
//             alert("Спасибо")
// 			// $('.js-overlay-thank-you').fadeIn();
// 			// $(this).find('input').val('');
// 			// $('#form').trigger('reset');
// 		});
// 		return false;
// 	});
// })(jQuery);
