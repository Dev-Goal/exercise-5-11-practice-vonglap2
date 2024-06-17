let a = " ";
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 50; j++) {
    if (i == 0 || i == 10) {
      document.write("<a style='color: black'>*<a>");
    } else {
      document.write("<a style='color: white'>*<a>");
    }
    if (j == 0 || j == 50) {
      document.write("<a style='color: black'>*<a>");
    }
  }
  document.write("<br>");
}
