const isoscelesTriangleArea = (b, h) => b * h/2;
console.log ("Isosceles Triangle Area:" + isoscelesTriangleArea(10, 20).toFixed(2));

const AreaOfTheSpear = radius => (4/3)*Math.PI*Math.pow(radius, 3);
console.log ("Area Of The Spear (cm):" + AreaOfTheSpear(10).toFixed(2) + "cm square");


//volume of a prism is V=Bh

const volumePrism = (base,height) => base * height;
console.log ("Volume Prism (cm):" + volumePrism(10, 20).toFixed(2) + "cm square");

//Find area of a triangle.

const  AreaOftriangle = (base,height) => base * height/2;
console.log ("Area Of Triangle (cm):" + AreaOftriangle(7, 20).toFixed(2) + "cm square");

//Calculate Discount Of Product
const  CalculateDiscount = (actualCost,soldcast) => (actualCost - soldcast)/actualCost * 100;
console.log ("Calculate Discount:" + CalculateDiscount(50, 40).toFixed(2) + "%");

//Given their radius of a circle and find its diameter, circumference and area.

const  circle = {
        diameter: (radius) => radius * 2,
        circumference: (radius) => (2 * Math.PI) * radius,
        area: (radius) => Math.PI * radius * radius,
    }
console.log ("Circle Diameter:" + circle.diameter(2) + 
              "  Circle circumference:" + circle.circumference(2).toFixed(2)  + 
              "  Circle area:" + circle.area(2).toFixed(2));

  //Given two numbers and perform all arithmetic operations.
  
  const calc =  {
        add : (a, b) => a + b,
        subraction : (a, b) => a - b,
        multipication : (a, b) => a * b,
        division : (a, b) => a/b
    }

    console.log("Add" + calc.add(10,2) + "Subraction" + calc.subraction(10,2) + "Multipication" + calc.multipication(10,2) + "Division" + calc.division(10,2));
    
   // Display the asterisk pattern as shown below(No loop needed):
    //*****
    //*****
    //*****
    //*****
    //*****

    console.log("*****");
    console.log("*****");
    console.log("*****");
    console.log("*****");

    //Calculate electricity bill?

    //For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?

    const ElectricityBill = (totalWatts, month, unitRate ) => {

        var n = month;
        var dailyHours = 24;
        var monthDays31 = 31;
        var monthDays30 = 30;
        var monthFeb = 28;

        if (n <= 12 && n > 0){
            if(n===2){
               console.log(monthFeb * totalWatts * dailyHours);
            }
            else if(n===1 || n===3 || n===5 || n===7 || n===8 || n===10 || n===12){
                console.log(monthDays31 * totalWatts * dailyHours);
            }
            else{
                console.log(monthDays30 * totalWatts * dailyHours);
            }
        }
        else
        {
            console.log("Error");
        }

    }

 console.log("Total EB Bill:" + "Rs " +ElectricityBill(100, 3, 10) );
  
    //Program To Calculate CGPA

    const CGPA = (NoOfCredits, GradePoints) => {
            return (NoOfCredits * GradePoints) / NoOfCredits;
    }

    console.log("Calculate CGPA: " + CGPA(98, 618));