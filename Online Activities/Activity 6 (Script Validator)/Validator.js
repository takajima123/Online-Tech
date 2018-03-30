		function validator()
			{
				var email = document.addressform.email;
				var fullname = document.addressform.fullname;
				var contact = document.addressform.contact;

				if(email.value == "")
						{
							alert("Email Cannot be Empty!");
							email.focus();
							return false;
						}
				if(fullname.value == "")
						{
							alert("Name Cannot be Empty!");
							fullname.focus();
							return false;
						}
				if(contact.value == "")
						{
							alert("Contact# Cannot be Empty!");
							contact.focus();
							return false;
						}
				else
						{
							window.alert("Hello!"+"\n"+"Email : " + document.addressform.email.value + "\n" +"Full Name : " + document.addressform.fullname.value + "\n" +
								"Contact # : " + document.addressform.contact.value );
						}
			}