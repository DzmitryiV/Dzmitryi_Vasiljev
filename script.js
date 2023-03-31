const Contains = document.body.getElementsByTagName('div');
console.log(Contains);

for (i = 0; i <= Contains.length; i++) {
    console.log(Contains[i])
    Contains[i].style.background = Contains[i].className;

}


const Container = document.body.getElementsByTagName('div');
for (i = 1; i <= Container.length; i++) {


   Container[i] = Container[i-1].appendChild(Container[i]);

}
console.log(Container)
