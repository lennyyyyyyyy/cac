const loadTime = new Date();
const msInYear = 1000 * 60 * 60 * 24 * 365;
// Update statistics every half second
setInterval(() => {
    const currTime = new Date();

    const t = currTime - loadTime;
    $("#carbondioxide").text(Math.floor(t*37150000000/msInYear))
    $("#airpollutiondeaths").text(Math.floor(t*8430000/msInYear))
    $("#deforestation").text(Math.floor(t*3740000000/msInYear))
    $("#plasticwaste").text(Math.floor(t*353000000/msInYear))
    $("#foodwaste").text(Math.floor(t*1300000000/msInYear))
}, 50);