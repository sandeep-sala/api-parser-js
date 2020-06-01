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
    var cros   = 'https://cors-anywhere.herokuapp.com/'
    var r_type = document.getElementById('request_type').value;
    var url    = document.getElementById('request_url').value;
    var header = JSON.parse(document.getElementById('Tab1').value );
    var data   = JSON.parse(document.getElementById('Tab2').value );
    url = cros + url;
    fetch(url, {
        method  : r_type, 
        body    :  data, 
        headers :  header
    }).then(res => res.json())
    .then(response => document.getElementById('response').value = JSON.stringify(response) )
    .catch(error => console.error('Error:', error));
}
