const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(strLength,str){
	let randomStr = '';
  for(let i = 0; i < strLength; i++){
    let randomIndex = parseInt(Math.random() * characters.length - 1);
  	randomStr+= str[randomIndex]
  }
  return randomStr
}
console.log(generateKey(12,characters))