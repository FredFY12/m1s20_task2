import './index.css';

const button = document.querySelector('.cookie-consent__button');
  button.addEventListener("click", () => {
    localStorage.setItem('cookie','1')
    location.reload()
  });

if(localStorage.getItem('cookie') === '1'){
  const divHtml = document.querySelector('.cookie-consent');
  divHtml.remove()
}