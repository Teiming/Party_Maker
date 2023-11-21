var weakarray = [];
var innerHTML = "";

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

var arrayForDealer = {};
var arrayForBuffer = {};
var arrayForDebuffer = {};
var arrayForSustain = {};

function roleadd(weakarray) {
  for (let i = 0; i < Object.keys(character_tier).length; i++) {
    character_name = Object.keys(character_tier)[i];
    character_path = character_tier[character_name]["path"];
    character_elem = character_tier[character_name]["element"];
    for (let i = 0; i < weakarray.length; i++) {
      if (character_elem == weakarray[i]) {
        switch (character_path) {
          case "화합":
            arrayForBuffer[character_name] = Object.values(
              character_tier[character_name]
            );
            break;
          case "공허":
            arrayForDebuffer[character_name] = Object.values(
              character_tier[character_name]
            );
            break;
          case "보존":
          case "풍요":
            arrayForSustain[character_name] = Object.values(
              character_tier[character_name]
            );
            break;
          default:
            arrayForDealer[character_name] = Object.values(
              character_tier[character_name]
            );
            break;
        }
      }
    }
  }

  if (
    !Object.keys(arrayForSustain).length ||
    !Object.keys(arrayForDealer).length ||
    !Object.keys(arrayForBuffer).length ||
    !Object.keys(arrayForDebuffer).length
  ) {
    location.reload();
  }

  for (let i = 0; i < Object.keys(arrayForSustain).length; i++) {
    for (let j = 0; j < Object.keys(arrayForDealer).length; j++) {
      for (let k = 0; k < Object.keys(arrayForBuffer).length; k++) {
        for (let l = 0; l < Object.keys(arrayForDebuffer).length; l++) {
          party_order =
            Object.values(arrayForDealer)[j][0] +
            Object.values(arrayForBuffer)[k][0] +
            Object.values(arrayForDebuffer)[l][0] +
            Object.values(arrayForSustain)[i][0];
          innerHTML += "<div class='party' style='order: " + party_order + "'>";
          innerHTML +=
            '<div class="' +
            Object.values(arrayForDealer)[j][1] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            Object.values(arrayForDealer)[j][3] +
            '.png"></div>';
          innerHTML +=
            '<div class="' +
            Object.values(arrayForBuffer)[k][1] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            Object.values(arrayForBuffer)[k][3] +
            '.png"></div>';
          innerHTML +=
            '<div class="' +
            Object.values(arrayForDebuffer)[l][1] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            Object.values(arrayForDebuffer)[l][3] +
            '.png"></div>';
          innerHTML +=
            '<div class="' +
            Object.values(arrayForSustain)[i][1] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            Object.values(arrayForSustain)[i][3] +
            '.png"></div>';
          innerHTML += "</div>";
        }
      }
    }
  }
  document.getElementById("window_party").style.transition = "0.5s";
  document.getElementById("window_party").style.opacity = "1";
  document.getElementById("window_party").innerHTML = innerHTML;
}
