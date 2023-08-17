let flag = 0;
let p;
let xo = null;


let trackerX = [];
let trackerO = [];


function checkWin()
{
    

    trackerO.sort(function(a, b){return a-b});
    trackerX.sort(function(a, b){return a-b});

}

function checkFlag()
{
    if(xWinFlag >= 3)
    {
        console.log("Player 1 wins");
        document.getElementById("win").innerHTML = "Player 1 Won";
    }
    else if(oWinFlag >= 3)
    {
        console.log("Player 2 wins");
        document.getElementById("win").innerHTML = "Player 2 Won";
    }
    else
    {
        console.log("Match Tie");
    }
}

function mark1()
{
    xo = getSymbol();
    document.getElementById("1").innerHTML = xo;
    document.getElementById("1").disabled = true;
    changeFlag();
    checkWin();
}

function mark2()
{
    xo = getSymbol();
    document.getElementById("2").innerHTML = xo;
    document.getElementById("2").disabled = true;
    changeFlag();
    checkWin();
}

function mark3()
{
    xo = getSymbol();
    document.getElementById("3").innerHTML = xo;
    document.getElementById("3").disabled = true;
    changeFlag();
    checkWin();
}

function mark4()
{
    xo = getSymbol();
    document.getElementById("4").innerHTML = xo;
    document.getElementById("4").disabled = true;
    changeFlag();
    checkWin();
}

function mark5()
{
    xo = getSymbol();
    document.getElementById("5").innerHTML = xo;
    document.getElementById("5").disabled = true;
    changeFlag();
    checkWin();
}

function mark6()
{
    xo = getSymbol();
    document.getElementById("6").innerHTML = xo;
    document.getElementById("6").disabled = true;
    changeFlag();
    checkWin();
}

function mark7()
{
    xo = getSymbol();
    document.getElementById("7").innerHTML = xo;
    document.getElementById("7").disabled = true;
    changeFlag();
    checkWin();
}

function mark8()
{
    xo = getSymbol();
    document.getElementById("8").innerHTML = xo;
    document.getElementById("8").disabled = true;
    changeFlag();
    checkWin();
}

function mark9()
{
    xo = getSymbol();
    document.getElementById("9").innerHTML = xo;
    document.getElementById("9").disabled = true;
    changeFlag();
    checkWin();
}

function newGame()
{
    location.reload();
}

function getSymbol()
{
    if(flag == 0)
    {
        return "X";
    }
    else
    {
        return "O";
    }
}

function changeFlag()
{
    if(flag)
    {
        flag = 0;
    }
    else
    {
        flag = 1;
    }
}