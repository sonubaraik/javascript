// fetch("https://jsonplaceholder.typicode.com/todos/200", {
//     method: "DELETE",
// }).then(resp => {
//     if (resp.status == 200)
//         console.log("Data Deleted");
//     else
//         console.log("Data Not Deleted");

// }).catch(err => console.log("Error while deleting Data", err))

async function addNewData(){
    try{
        const resp=await fetch("https://jsonplaceholder.typicode.com/todos/1",{
            method: "DELETE",    
        });
        if(resp.status===200){
            console.log("Data Deleted")
        }else{
            console.log("Data not Deleted")
        }
        
    } catch (error){
        console.log(error)
    }
}
addNewData();