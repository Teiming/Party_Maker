var character = {
  물리: {
    나타샤: "풍요",
    루카: "공허",
    소상: "수렵",
  },
  바람: {
    브로냐: "화합",
    삼포: "공허",
    단항: "수렵",
  },
  번개: {
    서벌: "지식",
    정운: "화합",
  },
  양자: {
    부현: "보존",
    링스: "풍요",
    청작: "지식",
  },
  얼음: {
    경류: "파멸",
    게파드: "보존",
    페라: "공허",
    Mar7th: "보존",
    헤르타: "지식",
  },
  허수: {
    음월: "파멸",
    어공: "화합",
  },
  화염: {
    아스타: "화합",
    계네빈: "공허",
    후크: "파멸",
  },
};
var thumbnail = {
  Mar7th: 1001,
  단항: 1002,
  아스타: 1009,
  헤르타: 1013,
  브로냐: 1101,
  서벌: 1103,
  게파드: 1104,
  나타샤: 1105,
  페라: 1106,
  삼포: 1108,
  후크: 1109,
  청작: 1201,
  정운: 1202,
  나찰: 1203,
  경원: 1204,
  소상: 1206,
  어공: 1207,
  루카: 3000,
  음월: 3002,
  부현: 3003,
  링스: 3004,
  경류: 3005,
  토파즈: 3006,
  계네빈: 3007,
  불척자: 8003,
};
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
