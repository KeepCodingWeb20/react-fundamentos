
const handlerClick = (event: Event) => {
  const target = event.target as HTMLElement;   
    if (target.classList.contains('sector')) {  
        target.classList.toggle('active');
    }
}


document.querySelector('.sector')?.addEventListener('click', handlerClick);