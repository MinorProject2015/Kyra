var i;
var x = document.getElementsByTagName("input");
for (i = 0; i < x.length; ++i)	{
	if(x[i].type == "password")
		break;
}

var usID = x[i - 1].id;
var pwID = x[i].id;
document.getElementById(usID).value = "may_goswami@yahoo.co.in";
document.getElementById(pwID).value = "asdfghjkl";