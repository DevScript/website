const navToggle = document.querySelector('.nav-toggle');
const navlinks= document.querySelectorAll('nav__link');
const chatBot = document.querySelector('.btn-chat');
const chatBotBox = document.querySelector('.chat-bot');
const closeChat = document.querySelector('.close-chat')




navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open');

});

navlinks.forEach(link =>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav-open');
    })
})


chatBot.addEventListener('click', ()=>{
   document.querySelector('.chat-bot').style.display = 'block'

});

// chatBotBox.addEventListener('click', ()=>{
//     document.querySelector('.chat-bot').style.display = 'none'
 
//  });
 
closeChat.addEventListener('click', ()=>{
    document.querySelector('.chat-bot').style.display = 'none'
 
 });