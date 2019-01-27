function newElement() {
    var li = document.createElement("li")
    var inputValue = document.getElementById("myInput").value
    var text = document.createTextNode(inputValue)
    
    li.appendChild(text)

    if (inputValue === '') {
        alert('Please fill out form')
    } else {
        document.getElementById("myUL").appendChild(li)
    }

    document.getElementById('myInput').value = ""

    var span = document.createElement("SPAN")
    var txt = document.createTextNode("\u00D7")
    span.className = 'close'
    span.appendChild(txt)
    li.appendChild(span)

    for(i = 0; i < close.length; i++) {
        close[i].onclick= function() {
            var div = this.parentElement;
            // div.style.display = 'none'
            div.parentElement.removeChild(div)
        }
    }
}

// delete 
var todos = document.getElementsByTagName("LI")
var i 
for (i = 0; i < todos.length; i++) {
    var span = document.createElement("SPAN")
    span.className = 'close'
    todos[i].appendChild(span)
}

var close = document.getElementsByClassName('close')
var i
for ( i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}

//update 
var list = document.querySelector('ul')
list.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    }
}, false)