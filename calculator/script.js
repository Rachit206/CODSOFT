let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)

            if(e.target.innerHTML == 'x<sup>2</sup>')
            {                
                string = string + '*' + string;
            }
            else if(e.target.innerHTML == 'x<sup>3</sup>')
            {
                string = string + '*' + string + '*' + string;
            }
            else{
                string = string + e.target.innerHTML;
            }

            document.querySelector('input').value = string;
        }
    })
})