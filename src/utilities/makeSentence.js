

export const makeASentence = (arr, n) => {
  
  n = parseInt(n);
  const x = Math.floor(Math.random()*(arr.length-n));
  console.log("this x" ,x)
  console.log("this x+m" ,x+n)
  let str = arr[x]
  for(let i=x+1; i<x+n;i++){
    str += "\n" + arr[i];
  }


  // console.log(str);
  return str;
};
