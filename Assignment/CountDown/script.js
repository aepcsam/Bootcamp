let count = document.getElementById("count");

let counter = 10;

let countdown = setInterval(function(){
  count.innerHTML = counter;
  counter--;
  if(counter ===0){
    display();
    clearInterval(countdown);
  }
},1000);

function display(){
  count.style.display = 'none';

  let div = document.createElement('div');
  div.id = 'display';
  div.classList = 'display';

  let text = document.createElement('p');
  text.classList = "text";
  text.innerHTML = "Happy Developers Day!!!";

  let img = document.createElement('img');
  img.src = "https://bestanimations.com/media/fireworks/671801409ba-awesome-coloful-fireworks-animated-gif-image-3.gif";

  div.append(text);
  div.append(img);

  div.style.backgroundPosition ="cover";
  div.style.borderRadius ="20px";
  div.style.display ="flex";
  div.style.flexDirection ="column";
  div.style.backgroundColor ="rgb(2,0,36)";
  div.style.margin ="auto";
  div.style.height ="75vh";
  div.style.width ="50vw";
  div.style.overflow ="hidden";

  document.body.append(div);

}