function oddTime() //for loop
{
    var x = 0
    for (x = 0; x < 20; x++)
    {
        if (x % 2 == 1)
        {
            document.write(x)
            document.write("<br/>")
        }
    }
    document.write("Refresh the page to return to the main page.")
}

function evenTime() //while loop
{
    var y = 0
    while (y <= 20)
    {
        if (y % 2 == 0)
        {
        document.write(y)
        document.write("<br/>")
        y++
        }
        else
        {
            y++
        }

    }
    document.write("Refresh the page to return to the main page.")
}

function bothTime() //both do-while loops
{
    var x = 0
    do
    {
        if (x % 2 == 1)
        {
            document.write(x)
            document.write("<br/>")
            x++
        }
        else
        {
            x++  
        }
    } while (x <= 20)
    document.write("<br/><br/>")
    var y = 0
    do
    {
        if (y % 2 == 0)
        {
        document.write(y)
        document.write("<br/>")
        y++
        }
        else
        {
            y++
        }

    } while (y <= 20)
    document.write("Refresh the page to return to the main page.")
}

function popupTime() //popup prompt
{
    if (confirm("Press a button!") == true) {
        alert("Welcome to Javascript!");
        } else {
        alert("Goodbye!");
        }
}

function sum() //addition function
{
    
    var h = document.getElementById("firstN").value  
    var i = document.getElementById("secondN").value
    alert( parseInt(h) + parseInt(i))
    
}

function difference() //subtraction function
{
    
    var h = document.getElementById("firstN").value  
    var i = document.getElementById("secondN").value
    alert( parseInt(h) - parseInt(i))
    
}

function product() //multiplication function
{
    
    var h = document.getElementById("firstN").value  
    var i = document.getElementById("secondN").value
    alert( parseInt(h) * parseInt(i))
    
}
function quotient() // division function 
{
    
    var h = document.getElementById("firstN").value  
    var i = document.getElementById("secondN").value
    if (parseInt(h) == 0 || parseInt(i) == 0)
    {
        alert("ERROR!")
    }
    else if (parseInt(h) % parseInt(i) == 0)
    {
        alert(parseInt(h) / parseInt(i))
    }
    else if (parseFloat(h) % parseFloat(i) != 0)
    {
        alert(parseFloat(h) / (parseFloat(i)))
    }
    
    
}