// calculate age
// function calculateAge(yob){
//     let date= new Date()
//     return date.getFullYear()-yob;
// }

// function eligibleVote(yob){
//     let age=calculateAge(yob)
//         if(age>=18){
//             console.log(`your age is ${age} you can vote`);
//         }else{
//             console.log(`your age is ${age} you can't vote`);
//         }
//     }

// eligibleVote(2000);

// ATM project

let balance=10000;
function checkBalance(){
    console.log("Available balance is",balance);
}

function diposite(amount){
    let date = new Date();
    balance +=amount;
    console.log(amount,"credited to your account");
    console.log(date.toLocaleString())
}

function withdrow(amount){
    let date = new Date();
    if(balance>amount){
        balance -=amount;
        console.log(amount,"devited to your account");
        console.log(date.toLocaleString())
    }
    
    
}
checkBalance()
withdrow(1000);
checkBalance();
diposite(6000);
checkBalance();
