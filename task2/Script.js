    function Max(x, y)
    {
      if (x > y)
        return x;
      return y; 
    }

    alert( "Введите два числа:" );
    var x = prompt("Первое число:", "");
    var y = prompt("Второе число:", "");

    alert( "Max(" + x + "," + y + ") = " + Max(+x,+y) );