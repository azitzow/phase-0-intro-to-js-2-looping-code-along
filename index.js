// Code your solutions in this file
const writeCards = (names, message = 'surprise') => {
  const messageArray = [];
  for (let i = 0; i < names.length; i++) {
    messageArray.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
  }
  return messageArray;
}

// const countDown = (num) => {
//   for (let i = num; i >= 0; i--){
//     console.log(i);
//   }
// }
const countDown = (num) => {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}