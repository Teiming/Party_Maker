var hillerarray = [];
var dealerarray = [];
var surpptarray = [];
var tankerarray = [];

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
        case "공허":
          surpptarray.push(name);
          break;
        case "보존":
          tankerarray.push(name);
          break;
        case "풍요":
          hillerarray.push(name);
          break;
        default:
          dealerarray.push(name);
          break;
      }
    }
  }
  var innerHTML = "";
  for (let i = 0; i < hillerarray.length; i++) {
    for (let j = 0; j < tankerarray.length; j++) {
      for (let k = 0; k < dealerarray.length; k++) {
        for (let l = 0; l < surpptarray.length; l++) {
          innerHTML +=
            '<div class="' +
            hillerarray[i] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[hillerarray[i]] +
            '.png"></div>';
          innerHTML +=
            '<div class="' +
            dealerarray[k] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[dealerarray[k]] +
            '.png"></div>';
          innerHTML +=
            '<div class="' +
            surpptarray[l] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[surpptarray[l]] +
            '.png"></div>';
          innerHTML +=
            '<div class="' +
            tankerarray[j] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[tankerarray[j]] +
            '.png"></div>';
        }
      }
    }
  }
  document.getElementById("party").style.transition = "0.5s";
  document.getElementById("party").style.opacity = "1";
  document.getElementById("party").innerHTML = innerHTML;
}
