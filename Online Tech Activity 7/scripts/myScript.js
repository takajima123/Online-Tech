<!-- //Keypressed Pressed -->
jQuery(document).ready(function() 
{

	$("#message-input").on("click keyup", function (e) {

		var chatname = jQuery("#chatname").val();
		var inputmessage = jQuery("#message-input").val();

	    if (e.keyCode == 13) 
		    {
		        if(chatname == "")
			       {
			       		alert("Insert Your Name Please");
			       }
			    else if(inputmessage == "")
				    {
						alert("Enter Message Please");	    	
				    }
				else
					{
						jQuery(".message-output-holder").append('<div class="message-holder"><img src="images/profile.png" class="profile-image"><div class="message-info"><b><p>'+ chatname +'</p></b><p>' + inputmessage +'</p></div></div>');
						jQuery("#message-input").val("");
						
						$.ajax({
						url:"http://sandbox.api.simsimi.com/request.p?key=a558db7c-3c58-4b03-aa39-f13183e347b1&lc=ph&ft=1.0&text=hi" + inputmessage,
							success: function(data) {
								jQuery(".message-output-holder").append('<div class="simsimi-response"><div class="message-info"><p><b>SIMSIMI</b><br/>' + data.response +'</p><img src="images/simsimi.png" class="simsimi-image"></div></div>');
							}	
						});	

						$("#ecran").stop().animate({ scrollTop: $("#ecran")[0].scrollHeight}, 1000);
					}    
		    }
	});
});

<!-- //Button Pressed -->
jQuery(document).ready(function() 
{

	jQuery("#send-button").click(function() {
		var inputMessage = jQuery("#message-input").val();
		var chatname = jQuery("#chatname").val();

		jQuery(".message-output-holder").append('<div class="message-holder"><img src="images/profile.png" class="profile-image"><div class="message-info"><b><p>'+ chatname +'</p></b><p>' + inputMessage +'</p></div></div>');
		jQuery("#message-input").val("");

		$.ajax({
			url:"http://sandbox.api.simsimi.com/request.p?key=7ebb6962-ddbb-4f46-9d59-3c90533a2451&lc=en&ft=1.0&text=hi" + inputMessage,
			success: function(data) {
				jQuery(".message-output-holder").append('<div class="simsimi-response"><div class="message-info"><p><b>SIMSIMI</b><br/>' + data.response +'</p><img src="images/simsimi.png" class="simsimi-image"></div></div>');
			}	
		});
		$("#ecran").stop().animate({ scrollTop: $("#ecran")[0].scrollHeight}, 1000);
	});
});