const student = "Жуков Кирилл Николаевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания

let a = prompt('Введите реальный счёт первой команды')

let b = prompt('Введите реальный счёт второй команды')

let c = prompt('Введите предпологаемый счёт первой команды')

let d = prompt('Введите предпологаемый счёт второй команды')

a = Number(a)
b = Number(b)
c = Number(c)
d = Number(d)


if (a == c && b == d){
    document.getElementById('Text').innerHTML = 'Cчёт был угадан верно!'
}

else if (((a>b)&&(c>d)) || (a<b)&&(c<d) || ((a==b)&&(c==d))) {
    document.getElementById('Text').innerHTML = 'Счёт не угадали, но исход угадали'
}

else {
    document.getElementById('Text').innerHTML = 'Ни счёта, ни исхода не угадали'
}


document.getElementById('one').innerHTML = a;
document.getElementById('two').innerHTML = b;
document.getElementById('three').innerHTML = c;
document.getElementById('four').innerHTML = d;

console.log('a= ' + a,'b= ' + b, 'c= ' + c,'d= ' + d);