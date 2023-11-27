var result = document.querySelector(".res");
var exp = '';
var numbers = document.querySelectorAll('.cal').length;
for (let i=0 ;i<numbers; i++){
  
    document.querySelectorAll(".cal.a")[i].addEventListener("click" , function clicks(){
        var buttonInnerHTML = this.innerHTML;
        exp+=buttonInnerHTML
        result.innerHTML = exp;
    
        });
}
var numbers1 = document.querySelectorAll('.sign').length;
for (let i=0 ;i<numbers1; i++) 
{   
    document.querySelectorAll(".sign")[i].addEventListener("click" , function clicks(){
        var buttonInnerHTML1 = this.innerHTML;
        exp+=buttonInnerHTML1
        result.innerHTML = exp;
    
        });

}
document.querySelector(".clear").addEventListener("click",function(){
 exp = '';
result.innerHTML='';

});
document.querySelector(".ac").addEventListener("click",function(){
    exp = '';
   result.innerHTML='';
   
   });
function calc(exp)
    {
        return eval(exp);
    
    }




document.querySelector(".equals").addEventListener("click",function(){
result.innerHTML = calc(exp);    
});


    


