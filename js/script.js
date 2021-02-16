var getJSON = function(url, callback) {
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {

    var status = xhr.status;
    
    if (status == 200) {
        callback(null, xhr.response);
    } else {
        callback(status);
    }
};

xhr.send();
};

setInterval(function(){ 
    getJSON('https://www.instagram.com/demi.demik/?__a=1',  function(err, data) {
    if (err != null) {
        console.error(err);
    } else {
        var nama = data.graphql.user.full_name
        var imgUrl = data.graphql.user.profile_pic_url
        var text = data.graphql.user.edge_followed_by.count
        var formated = String(text).replace(/(.)(?=(\d{3})+$)/g,'$1.')
        document.getElementById('jumlah_pengikut').innerHTML = formated
        document.getElementById('nama_lengkap').innerHTML = nama
        document.getElementById('img_profile').src = imgUrl
        console.log(formated);
    }
    });
}, 1000);