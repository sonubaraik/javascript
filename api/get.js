async function getData() {
    try {
        const resp= await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json =await resp.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}
getData();