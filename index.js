// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}

function johnLennonFacts(arr) {
  var outcome = [];
  var i = 0;
  while (i < arr.length) {
    outcome.push(arr[i] + '!!!')
    i++;
  }
  return outcome;
}

function iLoveTheBeatles(n) {
  var newArr = [];
  do {
    newArr.push('I love the Beatles!');
    n++;
  }
    while(n < 15);
    return newArr;
}

  