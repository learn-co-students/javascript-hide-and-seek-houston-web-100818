function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested").getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  let lists = document.querySelectorAll(".ranked-list")
  
  for (let i=0; i < lists.length; i++) {
    lists[i].innerHTML = (i + n).toString();
  }
  return lists
}

function deepestChild() {
  let deepList = document.querySelectorAll('#grand-node div');
 
  return deepList[deepList.length-1]
}