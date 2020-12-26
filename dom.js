const body = document.getElementById('body')
const tablo = document.getElementById('tablo')
const btn = document.querySelectorAll('button')
const clear = document.getElementById('clear')
const sbm = document.getElementById('submit')
const opt = document.querySelectorAll('select')[0]
const calc = document.getElementById('main')
const history = document.getElementsByTagName('p')[0]
const div = document.getElementById('second')
history.style.width = '200px'
for (i=0; i<btn.length; i++){
    btn[i].onclick=function(){
        tablo.innerHTML = tablo.innerHTML + this.value
        if(this.value === '='){
           let x = tablo.innerHTML
           let x1 = x.substring(0, x.length-1)
           let z = eval(x1)
           console.log(x + z)
           tablo.innerHTML = z 
           history.innerHTML = `${history.innerHTML} ${x} ${z}` 
        }
    }
}
clear.onclick=function(){
    tablo.innerHTML = ''
    history.innerHTML = ''
}
sbm.onclick=function(){
    if(opt.value=='For her 1'){
        body.style.backgroundColor = '#f4c5de'
        calc.style.backgroundColor = '#570933'
        tablo.style.backgroundColor = '#ad407a'
        tablo.style.color = 'white'
        div.style.backgroundColor = '#ad407a'
    }
    else if(opt.value=='For her 2'){
        body.style.backgroundColor = '#d1ec7a'
        calc.style.backgroundColor = '#34913f'
        tablo.style.backgroundColor = '#caeaa3'
        tablo.style.color = 'black'
        history.style.color = 'black'
        div.style.backgroundColor = '#caeaa3'
    }
    else if(opt.value=='For him 1'){
        body.style.backgroundColor = '#c7c7ee'
        calc.style.backgroundColor = '#160445'
        tablo.style.backgroundColor = '#1a2291'
        tablo.style.color = 'white'
        history.style.color = 'white'
        div.style.backgroundColor = '#1a2291'
    }
    else if(opt.value=='For him 2'){
        body.style.backgroundColor = '#0c291f'
        calc.style.backgroundColor = '#2a8968'
        tablo.style.backgroundColor = '#a3e7cf'
        tablo.style.color = 'black'
        history.style.color = 'black'
        div.style.backgroundColor = '#a3e7cf'
    }
}












