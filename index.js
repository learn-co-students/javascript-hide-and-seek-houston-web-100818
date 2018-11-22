function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector( '#nested .target')
}

function deepestChild() {
    return document.querySelector('#grand-node div div div div')
    
}

function increaseRankBy(n) {
    const ranked = document.querySelectorAll( '.ranked-list li') 
    for (let i = 0; i < ranked.length; i++) {
        ranked[i].innerHTML = parseInt(ranked[i].innerHTML, 10) + n;
    }
}
