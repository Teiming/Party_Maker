var hiller = document.getElementById("힐러");
var dealer = document.getElementById("딜러");
var surppt = document.getElementById("서포터");
var tanker = document.getElementById("탱커");
var hillerarray = [];
var dealerarray = [];
var surpptarray = [];
var tankerarray = [];

weakarray = [];

function selweak(x) {
  weakarray.push(x);
  if (weakarray.length > 3) {
    location.reload();
  } else if (weakarray.length == 3) {
    document.getElementById("weak").style.display = "none";
    roleadd(weakarray);
  } else {
    document.getElementById(x).style.display = "none";
  }
}

function roleadd(weakarray) {
  for (let w = 0; w < 3; w++) {
    var nameset = Object.keys(character[weakarray[w]]);
    for (let i = 0; i < nameset.length; i++) {
      var name = nameset[i];
      switch (Object.values(character[weakarray[w]])[i]) {
        case "파멸":
        case "수렵":
        case "지식":
          dealerarray.push(name);
          dealer.innerHTML +=
            "<div class='" +
            weakarray[w] +
            "'><img src=\"https://rerollcdn.com/STARRAIL/Characters/Thumb/" +
            thumbnail[name] +
            '.png"><span>' +
            name +
            "</span></div>";
          break;
        case "화합":
        case "공허":
          surpptarray.push(name);
          surppt.innerHTML +=
            "<div class='" +
            weakarray[w] +
            "'><img src=\"https://rerollcdn.com/STARRAIL/Characters/Thumb/" +
            thumbnail[name] +
            '.png"><span>' +
            name +
            "</span></div>";
          break;

        case "보존":
          tankerarray.push(name);
          tanker.innerHTML +=
            "<div class='" +
            weakarray[w] +
            "'><img src=\"https://rerollcdn.com/STARRAIL/Characters/Thumb/" +
            thumbnail[name] +
            '.png"><span>' +
            name +
            "</span></div>";
          break;
        case "풍요":
          hillerarray.push(name);
          hiller.innerHTML +=
            "<div class='" +
            weakarray[w] +
            "'><img src=\"https://rerollcdn.com/STARRAIL/Characters/Thumb/" +
            thumbnail[name] +
            '.png"><span>' +
            name +
            "</span></div>";
          break;
        default:
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
  document.getElementById("party").innerHTML = innerHTML;
}
function jobdel(x) {
  location.reload();
}
