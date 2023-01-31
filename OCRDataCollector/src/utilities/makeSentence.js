// function get_random(list) {
//     return list[Math.floor(Math.random() * list.length)];
//   }

const get_random = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};
export const makeASentence = (arr, n) => {
  let str = "";
  const par_length = n * 6;
  for (let i = 0; i < par_length; i++) {
    if (i % 6 === 0) {
      str = str + "\n";
    }
    str = str + " " + get_random(arr);
  }

  // console.log(str);
  return str;
};
