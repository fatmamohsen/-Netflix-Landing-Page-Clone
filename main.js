const questions=document.querySelectorAll(".list-item");
const answer=document.querySelector(".answer");
questions.forEach(function(questionBtn){
    const btn=questionBtn.querySelector(".question");
        
     btn.addEventListener("click",function(){
         questions.forEach(function(item){
             if(item!==questionBtn){
                item.classList.remove("show-text");
             }
         })
         questionBtn.classList.toggle("show-text");
     })
})

