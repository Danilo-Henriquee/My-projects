const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const placeBtn = document.querySelector('.place-of-button');
const btnEntry = document.querySelector('.btnEntry')

let dayStatus = false;
let monthStatus = false;
let yearStatus = false;
function check() {
    document.addEventListener('focusout', inicialize = (event) => {
        const el = event.target;
        
        if(el.classList.contains('day') && !day.value == '') {
            dayStatus = true;
            month.focus();
        }
        if(el.classList.contains('month') && !month.value == '') {
            monthStatus = true;
            year.focus();
        }
        if(el.classList.contains('year') && !year.value == '') {
            yearStatus = true;
        }
        if (dayStatus && monthStatus && yearStatus) {
            if (year.value > 2004) {
                setMinorMessage();
                removeBtn();
            }
                createBtn();
        }
    })
    let btnControl = true;
    createBtn = () => {
        const btn = document.createElement('button');
    
        btn.innerHTML = 'Entrar'
        btn.setAttribute('class', 'entryBtn');
    
        if (btnControl) {
            btnControl = false;
            placeBtn.appendChild(btn)
        }
    }
    removeBtn = () => {
        placeBtn.parentElement.remove('entryBtn')
    }
    msgControl = true;
    setMinorMessage = () => {
        const minorMsg = document.createElement('h1');
    
        minorMsg.setAttribute('class', 'minor-msg');
        minorMsg.innerHTML = 'Você precisa ser maior de idade para acessar esse site. ';
    
        minorMsg.style.color = 'red';
        minorMsg.style.textAlign = 'center';
    
        if (msgControl) {
            msgControl = false;
            btnEntry.appendChild(minorMsg)
        }
    }
    inicialize();
}
check();