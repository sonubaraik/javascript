
function calculateAge(yob){
    let date= new Date();
    return date.getFullYear()-yob;

    function eligibleForVote(yob){
        let age=calculateAge(yob);
        if(age>=18){
            console.log(`Your age is ${age} you can vote`);
        }else{
            console.log(`Your age is ${age} you can't vote`);
        }
    }

}
eligibleForVote(2000);
