for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    let sao = "*";
    document.write(sao);
  }
  document.write("<br>");
}

document.write("<br><br>");

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    let sao = "*";
    document.write(sao);
  }
  document.write("<br>");
}

document.write("<br><br>");

document.write("<div style='width: 50px' align='right'>");
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    let sao = "*";

    document.write(sao);
    //
  }
  document.write("<br>");
}
document.write("</div><br><br>");

document.write("<div style='width: 50px' align='right'>");
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    let sao = "*";
    document.write(sao);
  }
  document.write("<br>");
}
document.write("</div>");
