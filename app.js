function desc(name) {
    if(name == 'naver') {
        window.open('./desc/naverdesc.html', '_self');
    }
    else if(name == 'google') {
        window.open('./desc/googledesc.html', '_self');
    }
    else if(name == 'bing') {
        window.open('./desc/bingdesc.html', '_self');
    }
    else if(name == 'home') {
        window.open('../index.html', '_self');
    }
}


function dark() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}
function light() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}