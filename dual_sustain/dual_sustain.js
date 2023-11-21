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

var hillerSet = {};
var tankerSet = {};
var dealerSet = {};
var surpptSet = {};

function roleadd(weakarray) {
  for (let i = 0; i < Object.keys(character_tier).length; i++) {
    character_name = Object.keys(character_tier)[i];
    character_path = character_tier[character_name]["path"];
    character_elem = character_tier[character_name]["element"];
    for (let i = 0; i < weakarray.length; i++) {
      if (character_elem == weakarray[i]) {
        switch (character_path) {
          case "화합":
          case "공허":
            surpptSet[character_name] = Object.values(
              character_tier[character_name]
            );
            break;
          case "보존":
            tankerSet[character_name] = Object.values(
              character_tier[character_name]
            );
            break;
          case "풍요":
            hillerSet[character_name] = Object.values(
              character_tier[character_name]
            );
            break;
          default:
            dealerSet[character_name] = Object.values(
              character_tier[character_name]
            );
            break;
        }
      }
    }
  }

  if (Object.keys(hillerSet).length || tankerSet || dealerSet || surpptSet) {
    location.reload();
  }

  for (let i = 0; i < Object.keys(hillerSet).length; i++) {
    for (let j = 0; j < Object.keys(tankerSet).length; j++) {
      for (let k = 0; k < Object.keys(dealerSet).length; k++) {
        for (let l = 0; l < Object.keys(surpptSet).length; l++) {
          party_order =
            Object.values(hillerSet)[i][0] +
            Object.values(tankerSet)[j][0] +
            Object.values(dealerSet)[k][0] +
            Object.values(surpptSet)[l][0];
          innerHTML += "<div class='party' style='order: " + party_order + "'>";
          innerHTML +=
            '<div class="' +
            Object.values(hillerSet)[i][1] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            Object.values(hillerSet)[i][3] +
            '.png"></div>';
          innerHTML +=
            '<div class="' +
            Object.values(dealerSet)[k][1] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            Object.values(dealerSet)[k][3] +
            '.png"></div>';
          innerHTML +=
            '<div class="' +
            Object.values(surpptSet)[l][1] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            Object.values(surpptSet)[l][3] +
            '.png"></div>';
          innerHTML +=
            '<div class="' +
            Object.values(tankerSet)[j][1] +
            '"><img src="https://rerollcdn.com/STARRAIL/Characters/Thumb/' +
            Object.values(tankerSet)[j][3] +
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
