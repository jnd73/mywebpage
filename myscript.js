document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM is Ready');

      const button1 = document.querySelector('#button1');

      button1.addEventListener('click', event => 
      {
        button1.style.backgroundColor = "red";
      });
 });
