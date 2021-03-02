let ii = 0;
let summ = 0;
let mas = [];
let scrollInterval = setInterval(function() {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
       
let ss = document.querySelectorAll(".audio_row");
mas.push(ss.length);

    if (mas[ii] == mas[ii-1]) { 

        for(let key of ss){
            let son = key.dataset.audio;
            let dlina = Number(son.substring(
            son.lastIndexOf('duration":') + 10,
            son.lastIndexOf(',"content_id')    ));
            summ = summ + dlina;
        }
        let sec = Math.floor(summ % 60);
        let mins = Math.floor(summ % 3600 / 60);
        let hours = Math.floor(summ % (3600 * 24) / 3600);
        let days = Math.floor(summ / (3600 * 24));
        let months = Math.floor(summ / (3600 * 24 * 30));

        if (summ < 60) {
        console.log("Общая продолжительность: " + sec + " сек"); }

        else if (summ < 3600) {
        console.log("Общая продолжительность: " + mins + " мин " + sec + " сек"); }

        else if (summ < 86400) {
        console.log("Общая продолжительность: " + hours + " ч " + mins + " мин " + sec + " сек"); }

        else if (summ < 2592000) {
        console.log("Общая продолжительность: " + days + " д " + hours + " ч " + mins + " мин " + sec + " сек"); }

        else if (summ < 31536000) {
        console.log("Общая продолжительность: " + months + " мес " + days + " д " + hours + " ч " + mins + " мин " + sec + " сек"); } 
        clearInterval(scrollInterval); 
    }
    ii++;
}, 1000);