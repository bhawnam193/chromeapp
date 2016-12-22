function show(site)
{
	//var i=0;
var xmlhttp;
if (window.XMLHttpRequest)
  {
  xmlhttp=new XMLHttpRequest();
  }
else
  {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
	  
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    { 
		var element = document.getElementById("more");
		element.parentNode.removeChild(element);
    document.getElementById("relimg").innerHTML+=xmlhttp.responseText;
    }
  }
  document.getElementById("moreButton").innerHTML="Loading...";
    
xmlhttp.open("GET",site+"/more.php?var= "+new Date().getTime(),true);
xmlhttp.send();
}
function changePeriod(site,div,period)
{
	//var i=0;
var xmlhttp;

if (window.XMLHttpRequest)
  {
  xmlhttp=new XMLHttpRequest();
  }
else
  {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
	  
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    { 
		document.getElementById(div).innerHTML=xmlhttp.responseText;
    }
  }
  
  document.getElementById(div).innerHTML="<center><img src='"+site+"/images/loading.gif' width='100' style='margin:40px' align='center'><br>Loading</center>";
xmlhttp.open("GET",site+"/picbox.php?order="+div+ "&period="+period,true);
xmlhttp.send();
}
function flag(site,id)
{
	
var xmlhttp;
if (window.XMLHttpRequest)
  {
  xmlhttp=new XMLHttpRequest();
  }
else
  {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
	  
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    { 
		alert("This pic has been flagged\nThe content team will check it soon\nThanks a lot for your help!");
    }
  }
    
xmlhttp.open("GET",site+"/flag.php?id="+id,true);
xmlhttp.send();
}
function share(url) {
	var w = 670; var h = 380; var sTop = window.screen.height/2-(h/2); var sLeft = window.screen.width/2-(w/2); var sharer = window.open("http://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fthefunnyplanet.com%2Fpic%2F"+url, "Facebook Share", "status=1,height="+h+",width="+w+",top="+sTop+",left="+sLeft+",resizable=0");
}