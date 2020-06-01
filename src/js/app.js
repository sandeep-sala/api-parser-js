function openTabs(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
document.getElementById("defaultOpen").click();


function send(){
    URL      = "https://www.colive.in/webservices/CRMapi/Chatbot/ServiceRequestSelectAllById"
    HEADER   = {"Content-Type":"application/json","auth_id":"8E8CA351-110E-4272-8A15-DD26E3B3E8C5"}

    var xhttp;
    var params = JSON.stringify({ 
        "CustomerID":"108225"
     });

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }else{
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("POST", URL, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.setRequestHeader('auth_id', '8E8CA351-110E-4272-8A15-DD26E3B3E8C5');

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
        }
    }
    xhttp.send(params); 
}
