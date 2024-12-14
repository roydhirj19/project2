let para = document.querySelector('p')
let input = document.querySelector('input')

input.addEventListener("input",function(){
    let inputText = input.value.replace(/[^a-zA-Z/s]/g,"")
    para.innerHTML =inputText
    console.log(input.value);
        
})