//Old way to bring the data that it names promise

// fetch("https://www.breakingbadapi.com/api/")
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
// })
//-------------------------------------------------------
//New way to bring the data  
// Note:  async متزامن, و عكسها synchronize الغير متزامن 

async function get(){
const response = await fetch("https://www.breakingbadapi.com/api/characters/")
const data = await response.json()
// console.log(data[0].name)
console.log(data)

// document.querySelector("#content").innerHTML = "Buseyna Mugles"
// document.querySelector("#content").innerHTML = data[0].name

data.map(function(actor){
console.log(actor.name);
}) //
// document.querySelector("#content h1").innerHTML = "<h1>" + data[0].name + "</h1>" its same below
document.querySelector("#content h1").innerHTML = data[0].name
document.querySelector("#content h5").innerHTML = data[0].birthday
document.querySelector("#content img").src = data[0].img
document.querySelector("#actor").innerHTML = 
`<select>
 ${
    data.map(actor => `<option>${actor.name}</option>`)
}
</select>`

}
get()