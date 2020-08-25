function sockMerchant(n, ar) {
  var arr = [];
  var count = {};
  ar.forEach(function(i) { count[i] = (count[i]||0) + 1;});
  //console.log(count);
  for (let i = 0; i < count.length; i++){
      console.log(count[i]);
  }
  return 0;
}

sockMerchant(9,[10,20,20,10,10,30,50,10,20]);
