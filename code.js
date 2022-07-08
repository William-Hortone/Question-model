const questions = document.querySelectorAll('.question');

questions.forEach(question =>{
    const btn = question.querySelector('.buttons_box');

    btn.addEventListener('click',()=>{
        questions.forEach( item =>{
            if(item !== question){
                item.classList.remove('shaw_text');
            }
        });
        question.classList.toggle('shaw_text');
    });
});


