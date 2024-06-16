let number = Number(prompt("hãy nhập 1 số"));
while (!Number.isInteger(number) || number < 0) {
  if (!Number.isInteger(number)) {
    number = Number(prompt("bạn vừa nhập chữ, hãy nhập lại 1 số"));
  } else if (number < 0) {
    number = Number(prompt("bạn vừa nhập số âm, hãy nhập lại 1 số dương"));
  }
}
// console.log(number);
let giai_thua = 1;
for (let i = 1; i <= number; i++) {
  giai_thua = giai_thua * i;
}
document.write(
  "Giai thừa của " + number + " là " + number + "! = " + giai_thua
);
