var character = {
  물리: {
    나타샤: "풍요",
    루카: "공허",
    소상: "수렵",
  },
  바람: {},
  번개: {},
  양자: {},
  얼음: {},
  허수: {
    음월: "파멸",
    정운: "화합",
  },
  화염: {
    아스타: "화합",
    후크: "파멸",
    계네빈: "공허",
  },
};
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
    targetweak.style.opacity = "50%";
    jobdel(x);
  }
}
function jobasg(x) {
  for (let i = 0; i < Object.keys(character[x]).length; i++) {
    document.getElementById("log").innerText = Object.keys(character["물리"]);
    const element = Object.keys(character[x])[i];
  }
}
function jobdel(x) {}
document.getElementById("log").innerText = Object.keys(character["물리"]);
