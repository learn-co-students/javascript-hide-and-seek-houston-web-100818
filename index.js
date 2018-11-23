function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(selector) {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div");
}

function increaseRankBy(n) {
  let ranked = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
  }
  return ranked;
}
