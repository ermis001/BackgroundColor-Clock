let colorCode = '';

// funksion qe forcon numrat te jene me vlere dyshifrore "01"
const pad = a => {
    return (a < 10) ? '0' + a.toString() : a.toString()
}

// funksion i cili merr vlerat e ores se tanishme dhe ja ngjit variables "colorCode"
const time = function () {
    let time = new Date();
    let hours = pad(time.getHours());
    let minutes = pad(time.getMinutes());
    let seconds = pad(time.getSeconds());
    let fullTime = hours + minutes + seconds;

    colorCode = '#' + fullTime;
}
time()

// krijojme elementin ne DOM me vlere te "colorCode"
const h1 = document.createElement("h1");
h1.setAttribute('id', 'txt');
const textNode = document.createTextNode(colorCode);
h1.appendChild(textNode);
document.body.appendChild(h1);

// Loop qe perserit veprimet e meposhteme cdo 1 sec
setInterval(function () {
    time()                               // Ndryshojme vleren e colorCode
    document.getElementById('txt').innerHTML = colorCode; // Vendosim vleren e re te "colorCode" ne HTML
    document.body.style.backgroundColor = colorCode; // Vendosim vleren e colorCode si vlere background-color ne body.
}, 1000);
