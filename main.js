var dealerarray = [];
var bufferarray = [];
var effectarray = [];
var sstainarray = [];

var weakarray = [];

function selweak(x) {
  weakarray.push(x);
  if (weakarray.length > 3) {
    location.reload();
  } else {
    document.getElementById(x).style.display = "none";
  }
  if (weakarray.length == 3) {
    document.getElementById("weakness").style.display = "none";
    roleadd(weakarray);
  }
}

function roleadd(weakarray) {
  for (let w = 0; w < 3; w++) {
    var nameset = Object.keys(character[weakarray[w]]);
    for (let i = 0; i < nameset.length; i++) {
      var name = nameset[i];
      switch (Object.values(character[weakarray[w]])[i]) {
        case "화합":
          bufferarray.push(name);
          break;
        case "공허":
          effectarray.push(name);
          break;
        case "보존":
        case "풍요":
          sstainarray.push(name);
          break;
        default:
          dealerarray.push(name);
          break;
      }
    }
  }
  var innerHTML = "";
  for (let i = 0; i < sstainarray.length; i++) {
    for (let j = 0; j < dealerarray.length; j++) {
      for (let k = 0; k < bufferarray.length; k++) {
        for (let l = 0; l < effectarray.length; l++) {
          innerHTML +=
            '<div class="' +
            dealerarray[j] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[dealerarray[j]] +
            '.png"></div>';
          innerHTML +=
            '<div class="' +
            bufferarray[k] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[bufferarray[k]] +
            '.png"></div>';
          innerHTML +=
            '<div class="' +
            effectarray[l] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[effectarray[l]] +
            '.png"></div>';
          innerHTML +=
            '<div class="' +
            sstainarray[i] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[sstainarray[i]] +
            '.png"></div>';
        }
      }
    }
  }
  document.getElementById("party").style.transition = "0.5s";
  document.getElementById("party").style.opacity = "1";
  document.getElementById("party").innerHTML = innerHTML;
}
