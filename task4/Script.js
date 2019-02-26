var Date = { Current: 2019, Last: 1980};

var res = "";
var i = Date.Last;
while (i <= Date.Current) {
res+= i + " ";
i++;
}
document.write(res);
