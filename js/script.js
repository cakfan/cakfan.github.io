setInterval(function(){
    $.ajax({
        url: 'https://www.instagram.com/demi.demik/?__a=1',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        type: "GET", /* or type:"GET" or type:"PUT" */
        dataType: "json",
        data: {
        },
        success: function (result) {
            var nama = result.graphql.user.full_name
            var imgUrl = result.graphql.user.profile_pic_url
            var text = result.graphql.user.edge_followed_by.count
            var formated = String(text).replace(/(.)(?=(\d{3})+$)/g,'$1.')
            // document.getElementById('jumlah_pengikut').innerHTML = formated
            document.getElementById('nama_lengkap').textContent = ama+"\n"+formated
            document.getElementById('img_profile').src = imgUrl
            console.log(nama+"\n"+formated);
        },
        error: function () {
            console.log("error");
        }
    });
}, 10000)