const band = document.querySelector("#band");
band.classList.add("band"); // adding style in band div

const assets = ["crash", "kick", "snare", "tom"];

assets.forEach((asset)=>{
  const box = document.createElement("div");
  box.classList.add("box"); // adding style in box div
  box.style.backgroundImage = "url(assets/" +asset+ ".png)";

  const name = document.createElement("h2");
  name.innerText = asset.toUpperCase();


  const sound = document.createElement("audio");
  // sound.src = "assets/" +asset+ ".mp3"; //OR
  sound.setAttribute("src", "assets/" +asset+ ".mp3");

  box.addEventListener('click', ()=>{
    sound.play();
  })

  // when we press key sound is formed
  window.addEventListener('keypress', (e)=>{
    if(e.key === asset.slice(0,1)){
      sound.play();
    }
  });
  box.append(name);
  band.append(box);
})
