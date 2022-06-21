 var btnPlus = document.querySelectorAll('.plus-btn')
for (let i=0;i<btnPlus.length;i++  ) {
    btnPlus[i].addEventListener('click',function(){
        btnPlus[i].nextElementSibling.innerText++
        sumtotale()
    })
}

var btnmoins = document.querySelectorAll('.minus-btn')
for (let i=0;i<btnmoins.length;i++){
    btnmoins[i].addEventListener('click',function(){
        if (btnmoins[i].previousElementSibling.innerText>0 ) { 
            btnmoins[i].previousElementSibling.innerText--
            sumtotale()
        }
    })
}
 


var delbtn=document.querySelectorAll('.delete')
    for (let i=0;i<delbtn.length;i++) {
        delbtn[i].addEventListener('click',function(){
         delbtn[i].parentElement.remove()
         sumtotale()
    }
    )
}
    
var heart=document.querySelectorAll('.fa-heart')
for (let i=0;i<heart.length;i++){
    heart[i].addEventListener('click',function(){
        heart[i].classList.toggle('new')
        
    })
}
var somme= document.querySelector('.total-price')
console.log(somme)
 function sumtotale (){ 
    var price=document.querySelectorAll('.cost')
    var quantity=document.querySelectorAll('.quantity')
    console.log(price)
    console.log(quantity)
    
    var somm = 0
    for (let i=0;i<price.length;i++){
   
        somm=somm+ price[i].innerText * quantity[i].innerText
    }

console.log(somm)
  somme.innerText = somm


 }

