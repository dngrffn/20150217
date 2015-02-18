
function myFunction() {
	var x = document.getElementById("form_1");
		var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value ;
    }   
//    alert(text);
    var age = Number(x.elements[2].value);
    var age_plus_22 = age + 22;
    text = "Your Name is " + x.elements[0].value + " " + x.elements[1].value + ".  On 01/01/2015 you were " + age + " years old, and in 22 years you will be " + age_plus_22 + " years old. You have " + x.elements[4].value + " family members.";
    alert(text);
    var calc_year = Number(x.elements[3].value);
    var birth_year = 2015 - age;
    if (calc_year < birth_year) {
	     text= "year you entered " + calc_year + " is invalid - prior to your birth year " + birth_year;
	     alert(text);
	} else {
		calc_age = calc_year - birth_year
		if (calc_year < 2015) {
	      text= "at the end of " + calc_year + " you were " + calc_age;
	      alert(text);
	    } else {
	      text= "at the end of " + calc_year + " you will be " + calc_age;
	      alert(text);
	    }  
	} 
}