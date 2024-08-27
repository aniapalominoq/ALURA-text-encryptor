//here we will read the elements of the DOM
import encryption from "./encryption.js";
//variables

const encryptButton=document.getElementById("encrypt-button");
const decryptButton=document.getElementById("decrypt-button");
//events
document.getElementById("input-textarea").addEventListener("keyup", function() {
    this.value = this.value.toLowerCase();
});
encryptButton.addEventListener("click", () =>{
    const text=document.getElementById("input-textarea").value
    document.getElementById("output-textarea").value=encryption.encode(text)
    document.getElementById("input-textarea").value=" "

})
decryptButton.addEventListener("click", () =>{
    const text=document.getElementById("input-textarea").value
    document.getElementById("output-textarea").value=encryption.decode(text)
    

})

