rnd1 = '#i' + String(Math.floor(Math.random() * 3) * 3 + 9);
rnd2 = '#i' + String(Math.floor(Math.random() * 3) * 3 + 31);
inps = ['regfoijrg', 'ergutrgoeirg', 'giubergeg', 'erihiufbnv'];

sub = document.querySelector(".NPEfkd.RveJvd.snByac");
btn1 = document.querySelector(rnd1);
btn2 = document.querySelector(rnd2);
inp = document.querySelector("input[type='text']");

console.log(rnd1, rnd2);

btn1.click();
btn2.click();
inp.value = inps[Math.floor(Math.random() * 4)];

sub.click()