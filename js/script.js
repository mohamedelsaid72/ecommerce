var span = document.getElementsByTagName('span');
var card = document.getElementsByClassName('card');
var l=0;
span[2].onclick = () =>{
    l++;
    for (var i of card){
        if (l==0) { i.style.left= "0px";}
        if (l==1) { i.style.left= "-680px";}
        if (l==2) { i.style.left= "-1360px";}
        if (l==3) { i.style.left= "-2040px";}
        if (l==4) { i.style.left= "-2720px";}
        if (l>4)  { l= 4;}
    }
}
span[1].onclick = () =>{
    l--;
    for (var i of card){
        if (l==0) { i.style.left= "0px";}
        if (l==1) { i.style.left= "-680px";}
        if (l==2) { i.style.left= "-1360px";}
        if (l==3) { i.style.left= "-2040px";}
        if (l<0)  { l= 0;}
    }
}
