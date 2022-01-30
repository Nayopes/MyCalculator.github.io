const tablo = document.getElementById('tablo')
const btn = document.querySelectorAll('button')
const clear = document.getElementById('clear')
const sbm = document.getElementById('submit')
const opt = document.querySelector('select')
const calc = document.getElementById('calcSection')
const history = document.getElementById('history')
const div = document.getElementById('second')
const backSpace = document.getElementById('backSpace')

for (i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        tablo.value = tablo.value + this.value
        if (this.value === '=') {
            let displayValue = tablo.value
            let displayString = displayValue.substring(0, displayValue.length - 1)
            let result = eval(displayString)
            tablo.value = result
            history.innerHTML = `${history.innerHTML} <br/> ${displayValue} ${result}`
        }
    }
}

clear.onclick = function () {
    tablo.value = ''
}
backSpace.onclick = function () {
    let tabloText = tablo.value
    tablo.value = tabloText.substring(0, tabloText.length - 1)
}

sbm.onclick = function () {
    if (opt.value == 'For her 1') {
        document.body.style.backgroundColor = '#f4c5de'
        calc.style.backgroundColor = '#570933'
        tablo.style.backgroundColor = '#ad407a'
        tablo.style.color = 'white'
        div.style.backgroundColor = '#ad407a'
    }
    else if (opt.value == 'For her 2') {
        document.body.style.backgroundColor = '#d1ec7a'
        calc.style.backgroundColor = '#34913f'
        tablo.style.backgroundColor = '#caeaa3'
        tablo.style.color = 'black'
        history.style.color = 'black'
        div.style.backgroundColor = '#caeaa3'
    }
    else if (opt.value == 'For him 1') {
        document.body.style.backgroundColor = '#c7c7ee'
        calc.style.backgroundColor = '#160445'
        tablo.style.backgroundColor = '#1a2291'
        tablo.style.color = 'white'
        history.style.color = 'white'
        div.style.backgroundColor = '#1a2291'
    }
    else if (opt.value == 'For him 2') {
        document.body.style.backgroundColor = '#0c291f'
        calc.style.backgroundColor = '#2a8968'
        tablo.style.backgroundColor = '#a3e7cf'
        tablo.style.color = 'black'
        history.style.color = 'black'
        div.style.backgroundColor = '#a3e7cf'
    }
}
