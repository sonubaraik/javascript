try{
    console.log(result);
}catch (error){
    console.log(error.message);
} 

try{
    let age =15;
    if (age <18){
        throw new Error("Age must be 18 or above");
    }
    console.log("Eligible");
} catch (error){
     console.log(error.message);
}