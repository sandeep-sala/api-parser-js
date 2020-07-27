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

function send() {
    var k;
    var loader = document.querySelector('.loader')
    loader.style.display = "block";
    var r_type = document.getElementById('request_type').value;
    var cros = 'https://cors-anywhere.herokuapp.com/'
    var url = document.getElementById('request_url').value;
    var re_div = document.getElementById('response')

    function showERR(l) {
        clearTimeout(k)
        re_div.value = l
        k = setTimeout(function() { re_div.value = "" }, 1500);
    }
    if (r_type == 'POST') {
        try {
            var header = JSON.parse(document.getElementById('input_head').value);
            var data = JSON.stringify(JSON.parse(document.getElementById('input_body').value));
            url = cros + url;
            fetch(url, {
                    method: r_type,
                    body: data,
                    headers: header
                }).then(res => res.json())
                .then(response => {
                    loader.style.display = "none";
                    re_div.value = JSON.stringify(response)

                })
                .catch(error => {
                    loader.style.display = "none";
                    showERR(error);
                });
        } catch (error) {
            loader.style.display = "none";
            showERR(error);
        }
    }
    if (r_type == 'GET') {
        try {
            fetch(url).then(res => res.json())
                .then(response => {
                    loader.style.display = "none";
                    re_div.value = JSON.stringify(response)
                })
                .catch(error => {
                    loader.style.display = "none";
                    showERR(error);
                });

        } catch (error) {
            loader.style.display = "none";
            showERR(error);
        }
    }
}

function beautify(el) {
    var div;
    if (el == '1') { div = document.getElementById('input_head') }
    if (el == '2') { div = document.getElementById('input_body') }
    if (el == '3') { div = document.getElementById('response') }
    try {
        div.value = JSON.stringify(JSON.parse(div.value), undefined, 4)
    } catch (error) {
        console.log(error)
    }
}