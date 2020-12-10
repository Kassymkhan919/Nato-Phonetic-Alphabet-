function shuffle() {
  var container = document.getElementById("container");
  var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('shuffleSort'));
    elementsArray.forEach(function(element){
    container.removeChild(element);
  })
  shuffleArray(elementsArray);
  elementsArray.forEach(function(element){
  container.appendChild(element);
})
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    return array;
}

function sortMe() {
  var container = document.getElementById("container");
    var x = document.getElementsByClassName('shuffleSort')
    
    var arrayContent = [];
    for(let i = 0; i<x.length; i++){
        arrayContent.push(x[i].textContent)
    }
   var arraySorted = arrayContent.sort();
    
  var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('shuffleSort'));
    elementsArray.forEach(function(element){
    container.removeChild(element);
  })
    
    //create array with text
// sort array by its text
    //write array of divs to container


    var elementsArray2 = []
    arraySorted.forEach(function(element){
        var div = document.createElement('div')
        var text = document.createTextNode(element)
        div.innerHTML = element
        div.className += "shuffleSort"
        elementsArray2.push(div)

    })

  elementsArray2.forEach(function(element){
  container.appendChild(element);
})
}

