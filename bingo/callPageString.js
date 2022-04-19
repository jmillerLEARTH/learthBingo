export let callPageHTMLString = `

        <div id="previousCallsByHeader">
            <div id="header0Div">Header0
            </div><br><div id="header1Div">Header1
            </div><br><div id="header2Div">Header2
            </div><br><div id="header3Div">Header3
            </div><br><div id="header4Div">Header4
                </div>
            </div>
        </div><br><br><button type="button" onclick="restartGame()" style="margin-right:75px;font-size:30px">Restart</button><button type="button" onclick="gameHandler.ballHandler.PullBall()" style="margin-right:75px;font-size:30px">Call</button> Calls made: <span id="callsNum"></span>
        <br><br>
        <div id="previousCalls"></div>`;