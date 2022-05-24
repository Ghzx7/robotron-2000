const c= document.querySelectorAll(".controle")
c.forEach(Element=>{
    Element.querySelectorAll(".controle-ajuste").forEach(Element2=>{
    Element2.addEventListener("click", ()=>{
        if(Element2.innerHTML=="+"){
            val= parseInt(Element.querySelector(".controle-contador").value)
            val+=1
            if(val>=0 && val<=10){
                Element.querySelector(".controle-contador").value= val
            }
        }else {
            val= parseInt(Element.querySelector(".controle-contador").value)
            val -=1
            if (val >=0 && val <=10){
                Element.querySelector('.controle-contador').value= val
                }
                 
        }
    })   
    })
})
