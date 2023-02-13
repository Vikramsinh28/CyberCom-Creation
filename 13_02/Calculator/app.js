/*
Create an application to create a calculator. Use named function for this. 
Application page will look like the following image.

*/

var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.button');

for(item of btn){

    item.addEventListener('click', (e)=>{
        btnText = e.target.innerText;
        console.log(btnText);
        screen.value += btnText;
    });
}

let calculator = {
    lastChar : function(){
        if(screen.value == ''){
            lastCharVal = '';
        }else{
            lastCharVal = screen.value.substring(screen.value.length - 1);
        }
        return lastCharVal;
    },
    
    sum : function(){
        L = this.lastChar();
        if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.' || screen.value == ''){
            screen.value += '';
        }else{
            screen.value += '+';
        }
    } ,

    sub : function(){
        L = this.lastChar();
        if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.' || screen.value == ''){
            screen.value += '';
        }else{
            screen.value += '-';
        }
    }
    ,
    mul : function(){
        L = this.lastChar();
        if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.' || screen.value == ''){
            screen.value += '';
        }else{
            screen.value += '*';
        }
    }
    ,
    div : function(){
        L = this.lastChar();
        if(L == '*' || L == '/' || L == '+' || L == '-' || L == '.' || screen.value == ''){
            screen.value += '';
        }else{
            screen.value += '/';
        }
    },

    answer: function(){
            if(screen.value == ''){
                screen.value == '';
            }
            else{
                screen.value = eval(screen.value);
            }
    } ,

    clear : function(){
        screen.value = '';
    } ,



}