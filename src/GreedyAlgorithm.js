function Greed (total) {
  let one = 1;
  let two = 2;
  let five = 5;
  let ten = 10;
  let num = Math.floor(total / ten);
  let num2 = Math.floor(total % ten / five);
  let num3 = Math.floor(total % ten % five / two);
  let num4 = Math.floor(total % ten % five % two / one);
  return {'总价':total,'十元':num,'五元':num2,'二元':num3,'一元':num4};

}

for (let vv in Greed(71)){
  console.log(vv+' : '+Greed(71)[vv]);
}


function dyFib(n) {
  let val = [];
  for (let i = 0; i <= n; ++i) {
    val[i] = 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  else {
    val[1] = 1;
    val[2] = 2;
    for (let i = 3; i <= n; ++i) {
      val[i] = val[i-1] + val[i-2];
    }
    return val[n-1];
  }
}
console.log(dyFib(9))