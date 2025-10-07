user_name = prompt("Enter your name:");
alert("Hello, " + user_name + "!");

CURRENT_YEAR = 2025;
birth_year = prompt("Enter your birth year:");
age = CURRENT_YEAR - birth_year;
alert("You are " + age + " years old.");

side_length = prompt("Enter the length of the square side:");
perimeter = 4 * side_length;
alert("Perimeter of the square: " + perimeter);

radius = prompt("Enter the radius of the circle:");
area = 3.14159 * radius * radius;
alert("Area of the circle: " + area);

distance = prompt("Enter the distance between cities (km):");
hours = prompt("Enter the desired travel time (hours):");
speed = distance / hours;
alert("You need to travel at " + speed + " km/h.");

USD_TO_EUR = 0.86;
dollars = prompt("Enter the amount in USD:");
euros = dollars * USD_TO_EUR;
alert(dollars + " USD = " + euros + " EUR");

flash_gb = prompt("Enter flash drive size (GB):");
flash_mb = flash_gb * 1024;
files = Math.floor(flash_mb / 820);
alert("You can store " + files + " files of 820 MB each.");

money = prompt("Enter the amount of money you have:");
chocolate_price = prompt("Enter the price of one chocolate:");
chocolates = Math.floor(money / chocolate_price);
change = money - chocolates * chocolate_price;
alert("You can buy " + chocolates + " chocolates. Change: " + change);

number = prompt("Enter a three-digit number:");
reversed = number % 10 * 100 + Math.floor(number / 10) % 10 * 10 + Math.floor(number / 100);
alert("Reversed number: " + reversed);

num = prompt("Enter an integer:");
alert(num % 2 === 0 && "Even number" || "Odd number");
