const typingAnimation=()=>{
    const texts =['Ui/Ux-Designer','Fullsatck-Developer','YouTuber']
    let count =0; //keeps track of the words
    let index =0; //keeps track of the letters
    let currentText ='';
    let letter ='';
    (function type() {
        if (count === texts.length){
            count=0;
        }
        currentText=texts[count];
        letter=currentText.slice(0,++index);

        document.querySelector(".typing").textContent =letter;
        if (letter.length === currentText.length) {
            count++
            index=0;
        }
        setTimeout(type,300);
    }());
}
typingAnimation();

const toTopButton =()=>{
    const toTop =document.querySelector(".to-top");
    window.addEventListener("scroll",()=>{
        if(window.pageYOffset> 100){
            toTop.classList.add('active');
        }else{
            toTop.classList.remove('active');
        }
    })
}
toTopButton();

const headerBackground =()=>{
    const header = document.querySelector('header');
    
    window.addEventListener("scroll",()=>{
      if (window.pageYOffset> 100){
        header.style.background='rgba(0, 0, 0, 0.9)';
        header.style.borderBottom='rgba(255, 255, 255, 0.2) 1px solid';
        header.style.transition="0.5s ease-in-out"
    }else{
        header.style.background='transparent';
        header.style.borderBottom='none';
    } 
    })
}
headerBackground();

const hamburgerMenu=()=>{
    let menuOpen = false
  const navlinks = document.querySelector(".navlinks");
  const humberger = document.querySelector(".hamburger");
  const icon = document.querySelector(".hamburger>i");

  humberger.addEventListener("click",()=>{
      navlinks.classList.toggle("show")
      if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars","fa-times");
      }
      else{
        icon.classList.replace("fa-times","fa-bars");
      }
  })
  
  
  
}
hamburgerMenu();

// current page active class
const activeClass=()=>{

}

activeClass();