document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
       
        project.querySelectorAll('h3').forEach(h3 => {
            h3.classList.add('hover-effect-h3');
        });
  
        project.querySelector('h4').classList.add('hover-effect-h4');
    });
    project.addEventListener('mouseleave', () => {
 
        project.querySelectorAll('h3').forEach(h3 => {
            h3.classList.remove('hover-effect-h3');
        });
        project.querySelector('h4').classList.remove('hover-effect-h4');
    });
});