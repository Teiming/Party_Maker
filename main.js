var character = {
  물리: {
    나타샤: "풍요",
    루카: "공허",
    소상: "수렵",
  },
  바람: {
    브로냐: "화합",
    단항: "수렵",
    삼포: "공허",
  },
  번개: {
    서벌: "지식",
    정운: "화합",
  },
  양자: {
    청작: "지식",
    링스: "풍요",
    부현: "보존",
  },
  얼음: {
    게파드: "보존",
    페라: "공허",
    경류: "파멸",
    헤르타: "지식",
    Mar7th: "보존",
  },
  허수: {
    음월: "파멸",
    어공: "화합",
  },
  화염: {
    아스타: "화합",
    후크: "파멸",
    계네빈: "공허",
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
}
function jobdel(x) {
  location.reload();
}
