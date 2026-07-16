const map= Map();
map.set("name","john");
map.set("email","john@gmail.com");
map.set("phone","9098765655");
console.log(map);
console.log(map.get("name"))
console.log(map.has("name"))
console.log("Deleted",map.delete("phone"));
console.log("After delete",map);

map.foeach(value => console.log(value));

for(let key of map.keys()){
    console.log(key,":",map.get(key));
}
