var dealer = document.getElementById("딜러");
var buffer = document.getElementById("버퍼");
var effect = document.getElementById("효과");
var sstain = document.getElementById("유지");
var dealerarray = [];
var bufferarray = [];
var effectarray = [];
var sstainarray = [];

for (let i = 0; i < document.getElementsByClassName("weakness").length; i++) {
  document.getElementsByClassName("weakness")[i].style.opacity = "20%";
}

function selweak(x) {
  var targetweak = document.getElementById(x);
  if (targetweak.style.opacity) {
    targetweak.style.opacity = null;
    jobasg(x);
  } else {
    targetweak.style.opacity = "20%";
    jobdel(x);
  }
}
function jobasg(element) {
  var nameset = Object.keys(character[element]);
  for (let i = 0; i < nameset.length; i++) {
    var name = nameset[i];
    switch (Object.values(character[element])[i]) {
      case "수렵":
      case "지식":
      case "파멸":
        dealerarray.push(name);
        console.log(dealerarray);
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
        console.log(bufferarray);
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
        console.log(effectarray);
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
        console.log(sstainarray);
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
        document.getElementById("log").innerText += "error";
        break;
    }
  }
  document.getElementById("party").innerHTML = null;
  for (let i = 0; i < sstainarray.length; i++) {
    for (let j = 0; j < dealerarray.length; j++) {
      for (let k = 0; k < bufferarray.length; k++) {
        for (let l = 0; l < effectarray.length; l++) {
          document.getElementById("party").innerHTML +=
            '<div class="' +
            dealerarray[j] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[dealerarray[j]] +
            '.png"></div>';
          document.getElementById("party").innerHTML +=
            '<div class="' +
            bufferarray[k] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[bufferarray[k]] +
            '.png"></div>';
          document.getElementById("party").innerHTML +=
            '<div class="' +
            effectarray[l] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[effectarray[l]] +
            '.png"></div>';
          document.getElementById("party").innerHTML +=
            '<div class="' +
            sstainarray[i] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[sstainarray[i]] +
            '.png"></div>';
        }
      }
    }
  }
}
function jobdel(x) {
  location.reload();
}
