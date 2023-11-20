var dealer = document.getElementById("딜러");
var buffer = document.getElementById("버퍼");
var effect = document.getElementById("효과");
var sstain = document.getElementById("유지");
var dealerarray = [];
var bufferarray = [];
var effectarray = [];
var sstainarray = [];

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
            element +
            "'><img src=\"https://rerollcdn.com/STARRAIL/Characters/Thumb/" +
            thumbnail[name] +
            '.png"><span>' +
            name +
            "</span></div>";
          break;
        case "화합":
          bufferarray.push(name);
          buffer.innerHTML +=
            "<div class='" +
            element +
            "'><img src=\"https://rerollcdn.com/STARRAIL/Characters/Thumb/" +
            thumbnail[name] +
            '.png"><span>' +
            name +
            "</span></div>";
          break;
        case "공허":
          effectarray.push(name);
          effect.innerHTML +=
            "<div class='" +
            element +
            "'><img src=\"https://rerollcdn.com/STARRAIL/Characters/Thumb/" +
            thumbnail[name] +
            '.png"><span>' +
            name +
            "</span></div>";
          break;
        case "보존":
        case "풍요":
          sstainarray.push(name);
          sstain.innerHTML +=
            "<div class='" +
            element +
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
  document.getElementById("party").innerHTML = nuinnerHTMLll;
}
