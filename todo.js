var count1 = 1;
var count2 = 2;
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Close button to delete the task from the list

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    count2 -= 1;
    count1 -= 1;
    document.getElementById("tottask").innerHTML = count2;
    document.getElementById("itemcount").innerHTML = count1;
  }
}


//change color when item is selected and put tick mark emoji
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('check');
    count1 += 1;
  count2 -= 1;
  document.getElementById("tottask").innerHTML = count2;
    document.getElementById("itemcount").innerHTML = count1;
  }
  
  
}, false);


// Adding new task
function newtask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("box").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
    if (inputValue === '') {
    prompt("You can't add empty task...");
  } else {
        document.getElementById("ulist").appendChild(li);
       
        var win = window.open('','','width=50,height=50');
        win.document.write('Task added successfully...');
        win.focus();
        setTimeout(function() {win.close();}, 1000);
   }
  document.getElementById("box").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


//function to increment counter when task is added
function counter(){
  count2 += 1;
  document.getElementById("tottask").innerHTML = count2;
}

function unselect(){
  count1 -= 1;
  count2 += 1;
  document.getElementById("tottask").innerHTML = count2;
  document.getElementById("itemcount").innerHTML = count1;

}