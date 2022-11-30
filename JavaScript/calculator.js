function age() {
  var date1 = document.getElementById("date").value;
  var month1 = document.getElementById("month").value;
  var year1 = document.getElementById("year").value;
  var date = new Date();
  var date2 = date.getDate();
  var month2 = 1 + date.getMonth();
  var year2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (date1 > date2) {
    date2 = date2 + month[month2 - 1];
    m2 = m2 - 1;
  }
  if (month1 > month2) {
    month2 = month2 + 12;
    t2 = year2 - 1;
  }
  var d = date2 - date1;
  var m = month2 - month1;
  var y = year2 - year1;

  let errDate = "";
  let errMonth = "";
  let errYear = "";
  let finalText = "Please input valid data for ";

  result = document.getElementById("age");

  if (
    date1.toString().length === 0 ||
    isNaN(date1) ||
    date1 > 31 ||
    date1 === 0
  ) {
    //alert(date1.toString().length);
    errDate = "Date Field, ";
    finalText = finalText + errDate;
  }
  if (
    month1.toString().length === 0 ||
    isNaN(month1) ||
    month1 > 12 ||
    month1 === 0
  ) {
    //alert(date1.toString().length);
    errMonth = "Month Field, ";
    finalText = finalText + errMonth;
  }
  if (
    year1.toString().length < 4 ||
    isNaN(year1) ||
    year1 > year2 ||
    year1 === 0
  ) {
    //alert(date1.toString().length);
    errYear = "Year Field";
    finalText = finalText + errYear;
  }
  if (errDate === "" && errMonth === "" && errYear === "") {
    //alert(date1.toString().length);
    finalText =
      "Your age is " + y + " Years " + m + " Months and " + d + " Days";
  }
  result.innerHTML = finalText;
}
