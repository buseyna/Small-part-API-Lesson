const api = "https://www.breakingbadapi.com/api/characters/";
async function getData(){
try {
    const response = await fetch(api)
    const data = await response.json();
    
    // console.log(data);
    // console.log(data[0].name); for reading all the name we need to use the map function 
    // const print = data.map(param function);    this is old way  
    // const print = data.map(m => m.name ); //This is the new way but we will take it from here and create as a function
    // console.log(print);

    const v = Object.keys(data).map(m => m.name)
    const v1 = Object.values(data).map(m => m)
    const v2 = Object.entries(data).map(m => m)
   console.log(v)
   console.log(v1)
   console.log(v2)
   
    printData(data)
    
} catch (e) {
    console.log("Error:" , e.message);
}
}

//New way to do it that related to the previouse function 
 function printData(data){
const header = document.querySelector("#header") 
const content = document.querySelector("#content")

header.innerHTML += 
`<select class="form-control" onchange = "getCharachter(this.value)"> 
<option>Please Select</option>
${data.map(charachter => `<option>${charachter.name}</option>`)}</select>`

// console.log(header) //Just for checking
// console.log(content)//Just for checking
 }


 // Converting this function to sync function
//  function getCharachter(e){
//     console.log(e);
//  }

// //This is to bring any data
// async function getCharachter(e){
//     const response = await fetch(`${api}?name=${e}`)
//     const data = await response.json()
//     // console.log(data);
//     // console.log(data[0].name);
//     // console.log(data[0].nickname);

    //This is to specify it 
    async function getCharachter(name){
       if (name !== 'please Select'){
        const response = await fetch(`${api}?name=${name}`)
        const data = await response.json()

        console.log(data); // we use this to see the data and bring it correctly
        // content.innerHTML = "anything" // this only when it's onchange it will show up the word "ANYTHING"
        // content.innerHTML = data[0].name //It showes the data but we will use html 
        content.innerHTML = `<h2>${data[0].name}(${data[0].nickname})</h2>
        <h4>${data[0].portrayed}</h4>
        <img src= "${data[0].img}" width="250">`

       } 
       //This else not nesesary 
    //    else {
    //     console.log("Wrong");
    //    }

 }
getData()

