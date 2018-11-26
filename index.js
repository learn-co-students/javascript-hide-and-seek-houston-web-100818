function getFirstSelector(selector){
  return (document.querySelector(selector))
};

function nestedTarget(){
  return document.querySelector('#nested .target')
};

function increaseRankBy(n){
  let rankedLists = [];
  for(let rankedList of document.querySelectorAll('.ranked-list')){
    rankedLists.push(rankedList)
  };

  for(let list of rankedLists){
    let ranks = list.querySelectorAll('li')
    for(let rank of ranks){
      let rankNum = parseInt(rank.innerHTML)
      rank.innerHTML = rankNum + n;
    };
  };
};

function deepestChild(){
  let nodeSelector = '#grand-node';
  let chosenNode = document.querySelector(`${nodeSelector}`);
  function digger(node){
    if(node.children.length > 0){
      nodeSelector = nodeSelector + ' div';
      digger(document.querySelector(`${nodeSelector}`));
    }else{
      chosenNode = node;
      return chosenNode;
    };
  };
  digger(chosenNode);
  return chosenNode;
};
