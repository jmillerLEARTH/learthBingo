export let callPageHTMLString = `

        <div id="previousCallsByHeader">
            <div id="header0Div">`+headerSet[0][0]+
            `</div><br><div id="header1Div">`+headerSet[1][0]+
            `</div><br><div id="header2Div">`+headerSet[2][0]+
            `</div><br><div id="header3Div">`+headerSet[3][0]+
            `</div><br><div id="header4Div">`+headerSet[4][0]+
                `</div>
            </div>
        </div><br><br><button type="button" onclick="restartGame()" style="margin-right:75px;font-size:30px">Restart</button><button type="button" onclick="callContent()" style="margin-right:75px;font-size:30px">Call</button><button type="button" onclick="endGame()" style="font-size:30px">End Game</button>
        <br><br>
        <div id="previousCalls"></div>`;