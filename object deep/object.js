let user={
    Name: "john",
    rollNO: 65,
    isAdmin: true,
    marks: {phy:54,che:45,bio:70},
    languages:["hindi","english","marathi"],
    greet: function(){
        console.log("Welcome",this.Name);
    }
}

console.log(user.languages);
console.log(user['marks']);
user.greet();