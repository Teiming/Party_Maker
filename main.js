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
var dealer = document.getElementById("딜러");
var buffer = document.getElementById("버퍼");
var effect = document.getElementById("효과");
var sstain = document.getElementById("유지");

for (let i = 0; i < document.getElementsByClassName("weakness").length; i++) {
  document.getElementsByClassName("weakness")[i].style.opacity = "20%";
}

function selweak(x) {
  var targetweak = document.getElementById(x);
  console.log(targetweak.style.opacity);
  if (targetweak.style.opacity) {
    targetweak.style.opacity = null;
    jobasg(x);
  } else {
    targetweak.style.opacity = "20%";
    jobdel(x);
  }
}
function jobasg(x) {
  for (let i = 0; i < Object.keys(character[x]).length; i++) {
    switch (Object.values(character[x])[i]) {
      case "파멸":
        dealer.innerHTML +=
          "<div id='" +
          x +
          i +
          "'><span>" +
          Object.keys(character[x])[i] +
          "</div></div>";
        break;
      case "수렵":
        dealer.innerHTML +=
          "<div id='" +
          x +
          i +
          "'><span>" +
          Object.keys(character[x])[i] +
          "</div></div>";
        break;
      case "지식":
        dealer.innerHTML +=
          "<div id='" +
          x +
          i +
          "'><span>" +
          Object.keys(character[x])[i] +
          "</div></div>";
        break;

      case "화합":
        buffer.innerHTML +=
          "<div id='" +
          x +
          i +
          "'><span>" +
          Object.keys(character[x])[i] +
          "</div></div>";
        break;

      case "공허":
        effect.innerHTML +=
          "<div id='" +
          x +
          i +
          "'><span>" +
          Object.keys(character[x])[i] +
          "</div></div>";
        break;

      case "풍요":
        sstain.innerHTML +=
          "<div id='" +
          x +
          i +
          "'><span>" +
          Object.keys(character[x])[i] +
          "</div></div>";
        break;
      case "보존":
        sstain.innerHTML +=
          "<div id='" +
          x +
          i +
          "'><span>" +
          Object.keys(character[x])[i] +
          "</div></div>";
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
