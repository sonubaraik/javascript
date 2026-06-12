// function palindrom(word) {
//     word=word.toLowerCase(); //convertInto LowerCase
//     let array = word.split(''); // creates an array [ 'm', 'a', 'd', 'a', 'm' ]
//     let reverse = array.reverse(); // have reversed array
//     let reverseWord = reverse.join(''); // covert array into string

//     // let reverseWord = word.toLowerCase().split('').reverse().join('');
//     if (word == reverseWord)
//         console.log(`${word} is Palindrome`);
//     else
//         console.log(`${word} is not Palindrome`);
// }

// palindrom("Madam");
// palindrom("Hello");
// palindrom("Malayalam");
// palindrom("Nitin");

let word="Malayalam";
word=word.toLowerCase()
let array= word.split('');
let reverse=array.reverse();
let reverseWord=reverse.join('')
// word=word.toLowerCase();
// let reverseWord = word.split('').reverse().join('');
if(word==reverseWord){
    console.log(word,"is palindrom number")
}else{
    console.log(word,"is not a palindrom number")
}