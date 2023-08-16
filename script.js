let flag = 0, xWinFlag = 0, oWinFlag = 0;
let p, xCache = -1, oCache = 0;
let xo = null;
let q = [1,2,3];

let winning = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]
];

let w1 = [1,2,3];
let w2 = [4,5,6];
let w3 = [7,8,9];
let w4 = [1,5,9];
let w5 = [3,5,7];
let w6 = [1,4,7];
let w7 = [2,5,8];
let w8 = [3,6,9];

let trackerX = [];
let trackerO = [];

console.table(winning);

function checkWin()
{
    

    trackerO.sort(function(a, b){return a-b});
    trackerX.sort(function(a, b){return a-b});

    // if(trackerO.length > 2 || trackerX.length > 2)
    // // {
    //     for(let i = 0; i < 1; i++)
    //     {
            // for(let j = 0; j < 3; j++)
            // {
                // xCache = w1.indexOf(trackerX[0]);
                

                //-------------------------------------


                if(! w1.indexOf(trackerX[0]))
                {
                    xCache = w1.indexOf(trackerX[0]);
                }
                else if(! w2.indexOf(trackerX[0]))
                {
                    xCache = w2.indexOf(trackerX[0]);
                }
                else if(! w3.indexOf(trackerX[0]))
                {
                    xCache = w3.indexOf(trackerX[0]);
                }
                else if(! w4.indexOf(trackerX[0]))
                {
                    xCache = w4.indexOf(trackerX[0]);
                }
                else if(! w5.indexOf(trackerX[0]))
                {
                    xCache = w5.indexOf(trackerX[0]);
                }
                else if(! w6.indexOf(trackerX[0]))
                {
                    xCache = w6.indexOf(trackerX[0]);
                }
                else if(! w7.indexOf(trackerX[0]))
                {
                    xCache = w7.indexOf(trackerX[0]);
                }
                else if(! w8.indexOf(trackerX[0]))
                {
                    xCache = w8.indexOf(trackerX[0]);
                }
                else{
                    xCache = -1;
                }
                


                //-------------------------------------


                // if(xCache == 0)
                // {
                //     console.log(i + "\n\n");
                //     for(let v = 0; v < 3; v++)
                //     {
                //         if(trackerX[v] == winning[i][v])
                //         {
                //             xWinFlag++;
                //         }
                //     }
                //     if(xWinFlag >= 3)
                //     {
                //         checkFlag();
                //     }
                // }
                // else
                // {
                //     console.log(trackerX);
                //     trackerX.shift();
                // }
                
                // if(trackerX[j] == winning[i][j])
                // {
                //     xWinFlag++;
                // }
                // if(trackerO[j] == winning[i][j])
                // {
                //     oWinFlag++;
                // }
            // }
        // }
    // }
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
    p = 1;
    changeFlag();
    checkWin();
}

function mark2()
{
    xo = getSymbol();
    document.getElementById("2").innerHTML = xo;
    document.getElementById("2").disabled = true;
    p = 2;
    changeFlag();
    checkWin();
}

function mark3()
{
    xo = getSymbol();
    document.getElementById("3").innerHTML = xo;
    document.getElementById("3").disabled = true;
    p = 3;
    changeFlag();
    checkWin();
}

function mark4()
{
    xo = getSymbol();
    document.getElementById("4").innerHTML = xo;
    document.getElementById("4").disabled = true;
    p = 4;
    changeFlag();
    checkWin();
}

function mark5()
{
    xo = getSymbol();
    document.getElementById("5").innerHTML = xo;
    document.getElementById("5").disabled = true;
    p = 5;
    changeFlag();
    checkWin();
}

function mark6()
{
    xo = getSymbol();
    document.getElementById("6").innerHTML = xo;
    document.getElementById("6").disabled = true;
    p = 6;
    changeFlag();
    checkWin();
}

function mark7()
{
    xo = getSymbol();
    document.getElementById("7").innerHTML = xo;
    document.getElementById("7").disabled = true;
    p = 7;
    changeFlag();
    checkWin();
}

function mark8()
{
    xo = getSymbol();
    document.getElementById("8").innerHTML = xo;
    document.getElementById("8").disabled = true;
    p = 8;
    changeFlag();
    checkWin();
}

function mark9()
{
    xo = getSymbol();
    document.getElementById("9").innerHTML = xo;
    document.getElementById("9").disabled = true;
    p = 9;
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
        trackerO.push(p);
        flag = 0;
    }
    else
    {
        trackerX.push(p);
        flag = 1;
    }
}