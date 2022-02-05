
function setTheme(){
    const root = document.documentElement;
    root.classList.add = "root.theme1"
    const newTheme = root.className === 'theme1' ? 'theme2' : 'theme1';
    root.className = newTheme;


    
}

document.querySelector('.theme2').addEventListener('click', setTheme);

