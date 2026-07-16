let data=undefined;
function fetchData(cb){
    setTimeout(()=>{
        console.log("Data fetched");
        data="Welcome User";
        cb(); //call when fetch completed
    },2000)
}
function displayData(){
    console.log(data);
}
fetchData(displayData);