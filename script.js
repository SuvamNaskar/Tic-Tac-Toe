let flag = 0;
let p = 0;
let xo = null;

let c1 ,c2, c3, c4, c5, c6, c7, c8, c9;


function checkWin()
{
    if(c1 == "X" && c2 == "X" && c3 == "X"
        || c4 == "X" && c5 == "X" && c6 == "X"
        || c7 == "X" && c8 == "X" && c9 == "X"
        || c1 == "X" && c4 == "X" && c7 == "X"
        || c2 == "X" && c5 == "X" && c8 == "X"
        || c3 == "X" && c6 == "X" && c9 == "X"
        || c1 == "X" && c5 == "X" && c9 == "X"
        || c3 == "X" && c5 == "X" && c7 == "X")
    {
        //player 1 wins
        document.getElementById("win").innerHTML = "Player 1 Won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    }
    else if(c1 == "O" && c2 == "O" && c3 == "O"
        || c4 == "O" && c5 == "O" && c6 == "O"
        || c7 == "O" && c8 == "O" && c9 == "O"
        || c1 == "O" && c4 == "O" && c7 == "O"
        || c2 == "O" && c5 == "O" && c8 == "O"
        || c3 == "O" && c6 == "O" && c9 == "O"
        || c1 == "O" && c5 == "O" && c9 == "O"
        || c3 == "O" && c5 == "O" && c7 == "O")
    {
        //player 2 wins
        document.getElementById("win").innerHTML = "Player 2 Won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    }
    else
    {
        //none wins
        if(p == 9)
            document.getElementById("win").innerHTML = "Match Tie";
    }
}

function mark1()
{
    xo = getSymbol();
    document.getElementById("1").innerHTML = xo;
    document.getElementById("1").disabled = true;
    c1 = xo;
    changeFlag();
    checkWin();
}

function mark2()
{
    xo = getSymbol();
    document.getElementById("2").innerHTML = xo;
    document.getElementById("2").disabled = true;
    c2 = xo;
    changeFlag();
    checkWin();
}

function mark3()
{
    xo = getSymbol();
    document.getElementById("3").innerHTML = xo;
    document.getElementById("3").disabled = true;
    c3 = xo;
    changeFlag();
    checkWin();
}

function mark4()
{
    xo = getSymbol();
    document.getElementById("4").innerHTML = xo;
    document.getElementById("4").disabled = true;
    c4 = xo;
    changeFlag();
    checkWin();
}

function mark5()
{
    xo = getSymbol();
    document.getElementById("5").innerHTML = xo;
    document.getElementById("5").disabled = true;
    c5 = xo;
    changeFlag();
    checkWin();
}

function mark6()
{
    xo = getSymbol();
    document.getElementById("6").innerHTML = xo;
    document.getElementById("6").disabled = true;
    c6 = xo;
    changeFlag();
    checkWin();
}

function mark7()
{
    xo = getSymbol();
    document.getElementById("7").innerHTML = xo;
    document.getElementById("7").disabled = true;
    c7 = xo;
    changeFlag();
    checkWin();
}

function mark8()
{
    xo = getSymbol();
    document.getElementById("8").innerHTML = xo;
    document.getElementById("8").disabled = true;
    c8 = xo;
    changeFlag();
    checkWin();
}

function mark9()
{
    xo = getSymbol();
    document.getElementById("9").innerHTML = xo;
    document.getElementById("9").disabled = true;
    c9 = xo;
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
        p++;
        flag = 0;
    }
    else
    {
        p++;
        flag = 1;
    }
}