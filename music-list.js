let currentMusic = 0;
let songs =[
        {
                name: "Ai papi",
                path: "./Ai Papi.mp3",
                artist: "J0rd",
                cover: "./IMG-20240128-WA0012.jpg",
        },
        {
                name: 'Back to you',
                path: './Back To You (Extended Edit) [feat. Kylah Jasmine] (1).mp3',
                artist: 'Kyle Watson',
                cover: 'images/cover 1.png',
        },
        {
                name: 'Magude',
                path: './Broken Bass X Valentino De La Vega - Magude.mp3',
                artist: 'Broken Bass',
                cover: './IMG-20240128-WA0018.jpg',
        },
        {
                name: 'Carry On',
                path: './Dirty Brothers - Carry On.mp3',
                artist: 'Dirty BRo',
                cover: 'images/cover 4.png',
        }]
// setup music
const setMusic = (i) => {
        seekBar.value = 0;
        let song = songs[i];
        currentMusic = i;
        music.src = song.path;
    
        songName.innerHTML = song.name;
        artistName.innerHTML = song.artist;
        disk.style.backgroundImage = `url('${song.cover}')`;

        currentTime.innerHTML = '00:00';
        setTimeout(() =>{
        seekBar.max = music.duration;
        console.log(music.duration);
        musicDuration.innerHTML=formatTime(music.duration);
        }, 300);
};
setMusic(0);

const formatTime = (time) => {
        let min = Math.floor (time/60);
        if (min<10){
                min = '0${min}';
        }
        let sec = Math.floor(time % 60)
        if (sec<10){
                sec = '0${sec}';
        }
        return '${min} : ${sec}';
}
    