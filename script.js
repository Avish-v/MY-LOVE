function showLove(){

let name=document.getElementById("petName").value;

if(name==""){
    alert("Enter your pet name ❤️");
    return;
}

document.getElementById("heart").style.display="block";

let audio = document.getElementById("loveSong");
audio.play();

let text="<h2>❤️ I Love You "+name+" ❤️</h2>";

for(let i=1;i<=100;i++){
    text+="💖 "+i+". I Love You "+name+" ❤️<br>";
}

document.getElementById("message").innerHTML=text;

}

function togglePlay(){
    const audio = document.getElementById('loveSong');
    const btn = document.getElementById('playBtn');
    if(audio.paused){
        audio.play();
        btn.textContent = 'Pause ⏸️';
    } else {
        audio.pause();
        btn.textContent = 'Play Song ▶️';
    }
}