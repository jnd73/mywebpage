
$(document).ready(function() { 
	$("#addRec").click(function() { 
		var fullName;
		var major;
		var startYear;
		fullName= $("#fName").val();
		major = $("#major").val();
		startYear= $("#year").val();
		var myDate=new Date();
		var startYearInt= parseInt(startYear);

		//check for empty value in field fName
		if (fullName=="") {
			window.alert("Please indicate the full name");
			document.getElementById("fName").focus();
			return;
		}
		//check for empty value in field major
		if (major=="") {
			window.alert("Please indicate the major");
			document.getElementById("major").focus();
			return;
		}

		//declare variable hours and minutes
		var hours = myDate.getHours();
		var minutes = myDate.getMinutes();
		//to have zero(0) leading digits to minutes (1-9)
		if (minutes <10) {
			minutes="0"+minutes;
		}
		//to have zero(0) leading digits to hours (1-9)
		if (hours<10) {
			hours="0"+hours;
		}

		//validate year
		if (startYearInt>=2000) 
		{
			var message = "<p> "+ hours + ":"+ minutes+ " - "+ fullName+", "+major +", "+startYearInt+"</p>";
			$("#records").append(message);
			myform.reset();
		}
		else{
			window.alert("Unacceptable Year");
			document.getElementById("year").select();
			return;
		}

	});

});


 
