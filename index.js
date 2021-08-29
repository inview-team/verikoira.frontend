
var man= {
"":"",

};




function f1() {
var out="";
    var outt="";
man.ФИО = document.forms["form1"]['name'].value;
   
for (key in man){
  out += man[key] ;

}

    


    
localStorage.setItem("out1",out);



}


var out = localStorage.getItem('out1');
document.getElementById('out').innerHTML = out;

