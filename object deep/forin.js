// let user={
//     name: "sonam",
//     rollNo:45,
//     isAdmin:true,
//     marks:{phy:34,chem:45,bio:56},
//     languages:["hindi","eng","gujarati","marathi"]
// }

// for(let key in user){
//     console.log(key, ":",user[key])
// }

// const student = {
//     name: "Sonam Soni",
//     skills: ["JavaScript", "HTML", "CSS", "DevOps", "Database"]
// }

// for (let key in student) {
//     console.log("Key: ", key);
//     console.log("-----------------------------");
//     if (Array.isArray(student[key])) {
//         for (let value of student[key])
//             console.log(value);
//     } else {
//         console.log(student[key]);
//     }
// }

const student = {
    name: "Sonam Soni",
    skills: ["JavaScript", "HTML", "CSS", "DevOps", "Database"],
    adrress: { city: "mumbai", state: "Maharastra"}
}

for (let key in student) {
    console.log("Key: ", key);
    let value = student[key]; 
    console.log("-----------------------------");
    if (Array.isArray(value)) {
        for (let val of value)
            console.log(val);
    } else if (typeof value === 'object') {
        for(let k in value)
            console.log(k,":",value[k]);
    }
    else {
        console.log(value);
    }
}