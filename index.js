function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  const grand = document.getElementById('grand-node')
  // return grand.children[0].children[0].children[0].children[0]
  return grand.querySelector('div div div div div')
}

function increaseRankBy(n) {
  let lists = document.querySelectorAll('.ranked-list')
  let nums = []
  for (let i = 0; i < lists.length; i++) {
    let listNums = lists[i].querySelectorAll('li')
    for (let j = 0; j < listNums.length; j++) {
      nums.push(listNums[j])
    }
  }
  nums.forEach(function(num) {
    num.innerHTML = parseInt(num.innerHTML) + n
  })
}
