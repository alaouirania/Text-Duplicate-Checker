const textarea = document.getElementById('textarea');
const buttonChecker = document.getElementById('btnchecker');
const word = document.getElementById('word');

function myFunction(){
    const textarea = document.getElementById('textarea');
    const word = document.getElementById('word');
    const text = textarea.value;
    const w = word.value;
    for(i in textarea){
        if(text.includes(w)){
            const c = text.split(w).length - 1;
            if(c>1){
                document.getElementById('formResult').innerHTML = w +" exists  " + c +" times";
            }
            else{
                document.getElementById('formResult').innerHTML = w +" exists  " + c +" time";

            }}
        else{
            document.getElementById('formResult').innerHTML = w +" don't exists !";
        }
    

}}