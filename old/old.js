var hiller = document.getElementById("힐러");
var dealer = document.getElementById("딜러");
var surppt = document.getElementById("서포터");
var tanker = document.getElementById("탱커");
var hillerarray = [];
var dealerarray = [];
var surpptarray = [];
var tankerarray = [];

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
      case "공허":
        surpptarray.push(name);
        console.log(surpptarray);
        surppt.innerHTML +=
          "<div class='" +
          element +
          "'><img src=\"https://rerollcdn.com/STARRAIL/Characters/Thumb/" +
          thumbnail[name] +
          '.png"><span>' +
          name +
          "</span></div>";
        break;

      case "보존":
        tankerarray.push(name);
        console.log(tankerarray);
        tanker.innerHTML +=
          "<div class='" +
          element +
          "'><img src=\"https://rerollcdn.com/STARRAIL/Characters/Thumb/" +
          thumbnail[name] +
          '.png"><span>' +
          name +
          "</span></div>";
        break;

      case "풍요":
        hillerarray.push(name);
        console.log(hillerarray);
        hiller.innerHTML +=
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
  for (let i = 0; i < hillerarray.length; i++) {
    for (let j = 0; j < tankerarray.length; j++) {
      for (let k = 0; k < dealerarray.length; k++) {
        for (let l = 0; l < surpptarray.length; l++) {
          document.getElementById("party").innerHTML +=
            '<div class="' +
            hillerarray[i] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[hillerarray[i]] +
            '.png"></div>';
          document.getElementById("party").innerHTML +=
            '<div class="' +
            dealerarray[k] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[dealerarray[k]] +
            '.png"></div>';
          document.getElementById("party").innerHTML +=
            '<div class="' +
            surpptarray[l] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[surpptarray[l]] +
            '.png"></div>';
          document.getElementById("party").innerHTML +=
            '<div class="' +
            tankerarray[j] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            thumbnail[tankerarray[j]] +
            '.png"></div>';
        }
      }
    }
  }
}
function jobdel(x) {
  location.reload();
}
