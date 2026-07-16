async function addNewData(){
    try{
        const resp=await fetch("https://jsonplaceholder.typicode.com/todos/1",{
            method: "PUT",
            body: JSON.stringify({
                userId: 1,
                title: "Check papers",
                completed: true
            })
            
        });
        console.log(resp.status);
        console.log(resp.statusText);
        const json=await resp.json();
        console.log(json);
    } catch (error){
        console.log(error)
    }
}
addNewData();