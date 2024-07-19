console.log("Hello World!\n==========\n");


console.log("EXERCISE 1:\n==========\n");

function printOdds(count)
    {
        if (count == 0) count = 1;
        if (count < 0) count = count * -1
        for (let i = 1; i <= count; i++)
            if(i % 2 != 0)
            {
                console.log(i);
            }else if (i )
            {
                console.log("Even");
            }
            

    }

    printOdds(10);


console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age)
{
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    let output = "";
    if (age == null || age == undefined || userName == null || userName ==undefined)
    {
        console.log("Your name and age are required for this function to work." );
    }
    else if (age >= 16)
    {
        output = aboveSixteen;  
    }
    else if (age < 16)
    {
        output = belowSixteen
    }

    console.log(output);

}

checkAge();

console.log("EXERCISE 3:\n==========\n");

function quadrantOrAxis(x, y)
{
  if (x == 0 && y > 0)
    {
    console.log("Your point is on the 'x' axis.");
    }
  else if (x > 0 && y == 0)
    {
    console.log("Your point is on the 'y' axis.");
    }
  else if (x > 0 && y > 0)
    {
      console.log("Your point is in Quadrant 1.");
    }
  else if (x < 0 && y > 0)
    {
      console.log("Your point is in Quadrant 2.");
    }
  else if (x < 0 && y < 0)
    {
      console.log("Your point is in Quadrant 3.");
    }
  else if (x > 0 && y < 0)
    {
      console.log("Your point is in Quadrant 4.");
    }
  else if (x == 0 && y == 0)  
    {
        console.log("Your point is at the origin." );
    }
}      
    quadrantOrAxis(1, -2);      

console.log("EXERCISE 4:\n==========\n");

function triangle(a, b, c)
{
  if (a + b > c && a + c > b && b + c > a)
     {
        if (a == b && b ==c)
        {
            console.log("Your triangle is equilateral.");
        }
        else if ((a == b && b != c) || (b == c && c != a))
        {
            console.log("Your triangle is isosceles.");
        }
        else if (a != b && b != c)
        {
            console.log("Your triangle is scalene.");
        }
     }
  else
   {
    console.log("These numbers can't be the sides of the same triangle.");
   }   
}

triangle(2, 2, 2);




console.log("EXERCISE 5:\n==========\n");

function phoneDataUsage(planLimit, day, usage)
    {
        let daysRemaining = 30 - day;
        let dataRemaining = planLimit - usage;
        let actualDailyAverage = usage / day;
        let plannedDailyAverage = planLimit / 30;
        let remainingDailyAverage = dataRemaining / daysRemaining;

        output = ""
        if (actualDailyAverage > plannedDailyAverage)
        {
            output = "exceeding"
        }
        else if (actualDailyAverage <= plannedDailyAverage)
        {
            output = "below"
        }

        if (dataRemaining > 0)
        {
            console.log(`There are ${daysRemaining} days left in your billng cycle.`);
            console.log(`Your plan alots for an average daily use of ${plannedDailyAverage}GB.`);
            console.log(`Your are ${output} this average daily use, since you have averaged ${actualDailyAverage}GB daily for this billing cycle.`);
            console.log(`Given this you can use ${remainingDailyAverage}GB per day for the remainder of your billing cycle.`);
        }
        else 
            {
                console.log("You have used all available data for the month.")
            } 
          
    }

    phoneDataUsage(100, 15, 50)
    