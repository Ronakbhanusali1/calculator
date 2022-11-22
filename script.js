let emptyString = ""   
let buttons = document.querySelectorAll('.button');
const deleteButton = document.getElementById("delete");

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=> {

        if (e.target.innerHTML == '=') {
            emptyString = eval(emptyString);
            document.querySelector("#output").value = emptyString;
        }

      else if(e.target.innerHTML == 'DEL') {
        
        
        document.querySelector("#output").value = emptyString.slice(0, -1);
    
       }

        else if (e.target.innerHTML == 'AC') {
            emptyString = ""
            document.querySelector("#output").value = emptyString;
        }

        else {
        emptyString = emptyString + e.target.innerHTML;
        document.querySelector("#output").value = emptyString;
    }
    })
})

 

