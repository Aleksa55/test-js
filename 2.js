let songs = document.querySelectorAll(".audio_row");
for(let key of songs){
let s = key.dataset.audio;

let dlina = Number(s.substring(
s.lastIndexOf('duration":') + 10,
s.lastIndexOf(',"content_id')
));

console.log(dlina);
}