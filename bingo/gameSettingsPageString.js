export let gameSettingsPageHTMLString = `
    <script type="module" >
        import {ContinueWithQuickGameSettings} from '/bingo.js';
        window.ContinueWithQuickGameSettings = ContinueWithQuickGameSettings;
    </script>

<form><label for="count">Participants:</label><input type="text" id="partCount" style="font-size:26px;width:75px"></form>
    <br>

    <button type="button" onclick="gameHandler.gameSettingsHandler.ContinueWithQuickGameSettings()">Quick Game</button><br><br>

    <b><u>Content Types</b></u><br>

    <input type="checkbox" id="feelingsContent" name="feelingsContent" value="feelings">
    <label for="feelingsContent"> Feelings included</label><br>

    <input type="checkbox" id="commandsContent" name="commandsContent" value="commands">
    <label for="commandsContent"> Commands included</label><br>

    <input type="checkbox" id="nishContent" name="nishContent" value="nish">       <label for="nishContent"> Nish phrases included</label><br>

    <input type="checkbox" id="simpleNumbersContent" name="simpleNumbersContent" value="simpleNumbers">
    <label for="simpleNumbersContent"> Simple (1-10) numbers included</label><br>

    <input type="checkbox" id="expandedNumbersContent" name="expandedNumbersContent" value="expandedNumbers">
    <label for="expandedNumbersContent"> Expanded (11-50) numbers included</label><br><br>

    <input type="checkbox" id="fiftyOneSeventyFiveEng" name="fiftyOneSeventyFiveEng" value="fiftyOneSeventyFiveEng">
    <label for="fiftyOneSeventyFiveEng"> 51-75 English only included</label><br><br>

    <b><u>Bingo Card Lanuages</b></u><br>

    <input type="checkbox" id="ojbCardAllowed" name="ojbCardAllowed" value="Ojibwe">
    <label for="ojbCardAllowed"> Ojibwe included on cards</label><br>

    <input type="checkbox" id="englishCardAllowed" name="englishCardAllowed" value="English">
    <label for="englishCardAllowed"> English included on cards</label><br><br>

    <b><u>Call Lanuages</b></u><br>

    <input type="checkbox" id="ojbCallAllowed" name="ojbCallAllowed" value="Ojibwe">
    <label for="ojbCallAllowed"> Ojibwe calls included</label><br>

    <input type="checkbox" id="englishCallAllowed" name="englishCallAllowed" value="English">
    <label for="englishCallAllowed"> English calls included</label><br><br>

    <button type="button" onclick="genSheetsPage()" style="font-size:30px">Generate Bingo Sheets</button>`;