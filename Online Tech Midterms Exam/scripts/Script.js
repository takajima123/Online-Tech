<!-- //Keypressed Pressed -->
jQuery(document).ready(function() 
{

	$("#message-input").on("click keyup", function (e) {

		var inputmessage = jQuery("#message-input").val();

	    if (e.keyCode == 13) 
		    {
		        if(inputmessage < 1)
			       {
			       		alert("No Profile list below 1");
			       }
			    else if(inputmessage > 10)
				    {
						alert("Max profile is 10");	    	
				    }
				else
					{
						$(".message-holder").remove();
						for(val=1; val<= inputmessage; val++)
						{
							$.ajax({
								url:"http://jsonplaceholder.typicode.com/users/" + val ,
								success: function(data){
									jQuery(".message-output-holder").append(
										'<div class="message-holder row">'
									  + '		<div class="col-xs-3 "><img src="images/profile.png" class="profile-image"></div>'
									  + '			<div class="col-xs-9  message-info">'
									  + '				<div class="upper-text "><span class ="col-xs-12 col-md-6">'+ data.name + '</span><span class ="col-xs-12 col-md-6">@' + data.username +'</span></div>'
									  + '				   <div class="col-md-6 hidden-xs"><span>' + data.website +'</span></div><div class="col-md-6 hidden-xs"><span>' + data.company.name + '</span>	</div>'
									  + ' 				   <div class="col-md-12 hidden-xs"><span> " ' + data.company.catchPhrase + ' " </span></div>'
									  +	' 				   <div class="hidden-sm hidden-md hidden-lg"> <span>'+ data.address.city +'</span></div>'
									  + ' 			</div>'
									  + ' </div>');
								}
						});
					}	
				}    
		    }
	});
});