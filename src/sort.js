let a = [33, 69, 64, 4, 64,2,1,99,55]

function bubble (a) {
  for (let j = a.length; j > 0; j--) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === Math.max(a[i], a[i + 1])) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]]
        // let item = a[i];
        // a[i] = a[i+1];
        // a[i+1] = item;
      }
    }
  }
}

// bubble(a)
function insertsort2 (a) {
  let l = a.length
  let j = 0
  for (let i = 1; i < l; i++) {
    let tmp = a[i]
    for (j = i - 1; a[j] > tmp; j--) {
      a[j + 1] = a[j]
    }
    a[j + 1] = tmp
    console.log(a)
    console.log('---')
  }
}

function insertsort3 (a) {
  let l = a.length
  let j = 0
  for (let i = 1; i < l; i++) {
    let tmp = a[i]
    j = i - 1
    while (a[j] > tmp) {
      a[j + 1] = a[j]
      j--
    }
    a[j + 1] = tmp
    console.log(a)
    console.log('---')
  }
}

function insertsort (a) {
  let right = []
  let first = a[0]
  for (let i = 0; i !== a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] === Math.min(a[i], a[j + 1])) {

      } else {


      }
      console.log(a)
    }
  }
}

console.log('---')
// insertsort3(a)
console.log(a)

function quk (arr) {
  let left = []
  let right = []
  let first = arr[0]
  let i = 0
  while (i++ <= arr.length) {
    for (let i = 1; i < arr.length; i++) {
      if (first > arr[i]) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    arr = left.concat(first, right)
    first = arr[0]
    left = []
    right = []
  }
  return arr
}

// quk(a);
function quk2 (arr) {
  let left = []
  let right = []
  let first = arr[0]
  if(arr.length === 0){
    return []
  }

  for (let i = 1; i < arr.length; i++) {
    if (first > arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quk2(left).concat(first, quk2(right))
}
  console.log(quk2(a));
