
// Header set selection checkbox buttons for different category columns -- randomize it like the content

//end game/restart game button for call screen

// more headers and content -- creation story content?

// "Difficulty level" setting per participant - different random ratio of calls that are in the Languages only -- maybe separate field for easy, medium, hard?

// you could make it first to call bingo but lower the number of content pieces so that simultaneous bingos are more likely and so people who can grok the language are advantaged since it's called first

var columnZeroArray = [];
var columnOneArray = [];
var columnTwoArray = [];
var columnThreeArray = [];
var columnFourArray = [];
var contentStringArray = [];

class destroArray{
    
    constructor(){
        this.c0a = [...columnZeroArray];
        this.c1a = [...columnOneArray];
        this.c2a = [...columnTwoArray];
        this.c3a = [...columnThreeArray];
        this.c4a = [...columnFourArray];
        this.cA = this.c0a.concat(this.c1a).concat(this.c2a).concat(this.c3a).concat(this.c4a);
    }
    
}

function participantCountPage() {
    document.getElementById("mainContent").style = "font-size:26px;margin-top:75px";
    document.getElementById("mainContent").innerHTML = `
        <form><label for="count">Participants:</label><input type="text" id="partCount" style="font-size:26px;width:75px"></form>
        <br>
        
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
    
        /*<b><u>Header Set</b></u><br>
        
        <input type="checkbox" id="fiveClansHeaders" name="fiveClansHeaders" value="English">
        <label for="fiveClansHeaders"> Five Clans headers</label><br>       

        <input type="checkbox" id="fiveClansEnglishOnlyHeaders" name="fiveClansEnglishOnlyHeaders" value="fiveClansEnglish">
        <label for="fiveClansEnglishOnlyHeaders"> Five Clans (English only) headers</label><br><br>*/
}

let header0PrevOrderedCalls = [];
let header1PrevOrderedCalls = [];
let header2PrevOrderedCalls = [];
let header3PrevOrderedCalls = [];
let header4PrevOrderedCalls = [];

//0 = English, 
var allowedBingoCardLanguages = [];
var allowedCallLanguages = [];

var headerSet = [["Loon", "Maang"], ["Bird", "Binesh-<br>iinh"], ["Bear", "Makwa"], ["Marten", "Waabizheshi"], ["Deer", "Waawaash-<br>keshi"]];
var simpleNumberContentArray = 
    [
    [1, "bezhig"], 
    [2, "niizh"], 
    [3, "niswi"], 
    [4, "niiwin"],
    [5, "naanan"],
    [6, "ningodwaaswi"],
    [7, "niizhwaaswi"],
    [8, "nishwaaswi"],
    [9, "zhaangaswi"],
    [10, "madaaswi"],
    ];

var expandedNumberContentArray = 
    [
    [11, "ashi-bezhig"],
    [12, "ashi-niizh"],
    [13, "ashi-niswi"],
    [14, "ashi-niiwin"],
    [15, "ashi-naanan"],
    [16, "ashi-ningodwaaswi"],
    [17, "ashi-niizhwaaswi"],
    [18, "ashi-nishwaaswi"],
    [19, "ashi-zhaangaswi"],
    [20, "niishhtana"],
    [21, "niishhtana shaa bezhig"],
    [22, "niishhtana shaa niizh"],
    [23, "niishhtana shaa niswi"],
    [24, "niishhtana shaa niiwin"],
    [25, "niishhtana shaa naanan"],
    [26, "niishhtana shaa ningodwaaswi"],
    [27, "niishhtana shaa niizhwaaswi"],
    [28, "niishhtana shaa nishwaaswi"],
    [29, "niishhtana shaa zhaangaswi"],
    [30, "nisimidana"],
    [31, "nisimidana shaa bezhik"],
    [32, "nisimidana shaa niizh"],
    [33, "nisimidana shaa nswi"],
    [34, "nisimidana shaa niiwin"],
    [35, "nisimidana shaa naanan"],
    [36, "nisimidana shaa ningodwaaswi"],
    [37, "nisimidana shaa niizhwaaswi"],
    [38, "nisimidana shaa nishwaaswi"],
    [39, "nisimidana shaa zhaangaswi"],
    [40, "niimidana"],
    [41, "niimidana shaa bezhik"],
    [42, "niimidana shaa niizh"],
    [43, "niimidana shaa niswi"],
    [44, "niimidana shaa niiwin"],
    [45, "niimidana shaa naanan"],
    [46, "niimidana shaa ningodwaaswi"],
    [47, "niimidana shaa niizhwaaswi"],
    [48, "niimidana shaa nishwaaswi"],
    [49, "niimidana shaa zhaangaswi"],
    [50, "naa-nimidana"],
    ]
var englishOnlyNumberContentArray =   
    [
    [51],
    [52],
    [53],
    [54],
    [55],
    [56],
    [57],
    [58],
    [59],
    [60],
    [61],
    [62],
    [63],
    [64],
    [65],
    [66],
    [67],
    [68],
    [69],
    [70],
    [71],
    [72],
    [73],
    [74],
    [75]
    ]
var englishOnlyNumberContentArray = 
    [
    [101],
    [102],
    [103],
    [104],
    [105],
    [106],
    [107],
    [108],
    [109],
    [110],
    [111],
    [112],
    [113],
    [114],
    [115],
    [116],
    [117],
    [118],
    [119],
    [120],
    [121],
    [122],
    [123],
    [124],
    [125],
    [126],
    [127],
    [128],
    [129],
    [130],
    [131],
    [132],
    [133],
    [134],
    [135],
    [136],
    [137],
    [138],
    [139],
    [140],
    [141],
    [142],
    [143],
    [144],
    [145],
    [146],
    [147],
    [148],
    [149],
    [150],
    ];

var feelingContentArray = 

     [
    ["I am tired", "Nindayekoz"],
    ["I am angry", "Ninish-<br>kaadiz"],
    ["I am happy", "Niminwen"],
    ["I am cold", "Ningiikaj"],
    ["I am surprised", "Nimaama-<br>kaadendam"],
    ["I am sad", "Nimaan-<br>endam"],
    ["I am hot", "Ningizhiz"],     
    ["I am brave", "Ninzoon-<br>gide'e"],
    ["I am scared", "Ninzegiz"],
    ["I am sick", "Nindaakoz"],
    ["I am hungry", "Ninoon-<br>deskade"],
    ["I am thankful", "Nimiigwech-<br>iwendam"],
    ["I am kind", "Ningizhe-<br>waadiz"],
    ];

var commandContentArray = 
    [
    ["Walk","Bimosen"],    
    ["Run","Bimbatoon"],
    ["Put it on","Biisikan"],
    ["Take it off","Giisikan"],
    ["Clean up","Biinchigen"],
    ["Sweep","Chiishaate-<br>'igen"],
    ["Sit down","Namadabin"],
    ["Get up","Onishkaan"],
    ["Wipe your face","Giziin-<br>gwe'on"],
    ["Wash your face","Giziin-<br>gwen"],
    ["Settle down","Bizaani-<br>ayaan"],
    ["Play around","Babaa-<br>odaminon"],
    ["Eat","Wiisinin"],
    ["Wipe your bum","Giziin-<br>dime'on"],
    ["Throw it away","Webinan"],
    ["Pull it","Wiikobidan"],
    ["Wake up","Goshkozin"],
    ["Sleep","Nibaan"],
    ["Lay down","Gawishimon"],
    ["Come eat","Bi-<br>wiisinin"],
    ];
    
var nishContentArray = 
    [
    ["To arrive","Dagoshin"],
    ["To be cold","Dakaagamin"],
    ["Please or come on","Daga"],
    ["Accept or take or offer","Odaapin"],
    ["Work","Anokii"],
    ["That","A'aw"],
    ["Those","Ingiw"],
    ["I don't know","Amanj"],
    ["Always or continuous","Pane"],
    ["To help people","Wiidookaazo"],
    ["Help me","Wiidoo-<br>kaawashin"],
    ["Be quiet or still","Bizaan"],
    ["Listen","Bizindan"],
    ["Medicine for burning","Nookwezigan"],
    ["To recover or heal","Noojimo"],
    ];

var selectedContentArray = numberContentArray;

//load the selectedContentArray into the individual column arrays



function loadSelectedContentArrays()    {

    var destructoSelectedArray = [];
    
    if(document.getElementById("feelingsContent").checked){
        
        destructoSelectedArray = destructoSelectedArray.concat(feelingContentArray);
        contentStringArray.push("Feelings");
        
    }
    
    if(document.getElementById("commandsContent").checked){
        
        destructoSelectedArray = destructoSelectedArray.concat(commandContentArray);
        contentStringArray.push("Commands");
        
    }
    
    if(document.getElementById("nishContent").checked){
        
        destructoSelectedArray = destructoSelectedArray.concat(nishContentArray);
        contentStringArray.push("Nish");
        
    }
    
    if(document.getElementById("simpleNumbersContent").checked){
        
        destructoSelectedArray = destructoSelectedArray.concat(simpleNumberContentArray);
        contentStringArray.push("Simple#");
        
    }
    
    if(document.getElementById("expandedNumbersContent").checked){
        
        destructoSelectedArray = destructoSelectedArray.concat(expandedNumberContentArray);
        contentStringArray.push("Expanded#");
        
    }
    
    if(document.getElementById("fiftyOneSeventyFiveEng").checked){
        
        destructoSelectedArray = destructoSelectedArray.concat(englishOnlyNumberContentArray);
        contentStringArray.push("51-75Eng#");
    }
    
    if(destructoSelectedArray.length < 50) {
        
        console.log("filled");
        destructoSelectedArray = destructoSelectedArray.concat(englishOnlyNumberContentArray);
        window.alert("There were not enough pieces of content to fill the Bingo cards, so English-only numbers have been added to the content.")
    }
        
    for(var l = 0; l < destructoSelectedArray.length; l++){
        
        //console.log(destructoSelectedArray[l][0]);
        
    }
    
    //DIVIDE THE CONTENT INTO COLUMNS
    
    for(var a = 0; a < 10; a++){

        //console.log(columnZeroArray);
        columnZeroArray[a] = destructoSelectedArray.splice(0,1)[0];
        //console.log(columnZeroArray);

    }

    for(var a = 0; a < 10; a++){


        columnOneArray[a] = destructoSelectedArray.splice(0,1)[0];

    }

    for(var a = 0; a < 10; a++){


        columnTwoArray[a] = destructoSelectedArray.splice(0,1)[0];

    }

    for(var a = 0; a < 10; a++){


        columnThreeArray[a] = destructoSelectedArray.splice(0,1)[0];

    }

    for(var a = 0; a < 10; a++){


        columnFourArray[a] = destructoSelectedArray.splice(0,1)[0];

    }
        
}




function getLongestWordLength(string){
    
    
    
    var splitWordsArray = string.replace("-<br>"," ");
    splitWordsArray= splitWordsArray.split(" ");
    
    var letterCount = 0;
    
    for(var i = 0; i < splitWordsArray.length; i++){
        
        if(splitWordsArray[i].length > letterCount){
            
            letterCount = splitWordsArray[i].length;
            
        }
        
    }
    
    return letterCount;
    
}

function textScaleSelector(text) {
    
    //as the multiplier below does down, longer words will be scaled smaller
    var maxTextScaling = 0.78*(20/getLongestWordLength(text));
    if(maxTextScaling > 2.8){maxTextScaling = 2.8}
    //as the dividend below goes up, text will be allowed to scale larger
    textScaling = 33/text.length;
    if(textScaling > maxTextScaling){textScaling = maxTextScaling;}
    return textScaling;
    
}

function genSheetsPage(){
    
    document.getElementById("mainContent").style = "margin-top:75px";
    
    loadSelectedContentArrays();
    
    var bingoTableHTML = "";
    
    if(document.getElementById("englishCardAllowed").checked) {
        
        allowedBingoCardLanguages.push(0);
    }
    
    if(document.getElementById("ojbCardAllowed").checked) {
        
        allowedBingoCardLanguages.push(1);
    }
    
    if(document.getElementById("englishCallAllowed").checked) {
        
        allowedCallLanguages.push(0);
    }
    
      if(document.getElementById("ojbCallAllowed").checked) {
        
        allowedCallLanguages.push(1);
    }
    
    for(var p=0; p < document.getElementById("partCount").value; p++) {    
        
        //make destruction-friendly copies of the content arrays
        var c0a = [...columnZeroArray];
        var c1a = [...columnOneArray];
        var c2a = [...columnTwoArray];
        var c3a = [...columnThreeArray];
        var c4a = [...columnFourArray];
        
        var content;
        
        bingoTableHTML = bingoTableHTML + `<div style="page-break-after: always"><table><tr>`;
        
        for(var h=0; h < headerSet.length; h++){
            
            bingoTableHTML = bingoTableHTML + "<th>" + chooseLang(allowedBingoCardLanguages, headerSet[h])+"</th>";
            
        }
        
        // close the table header row
        bingoTableHTML = bingoTableHTML + "</tr>";
        
        for(var i=0; i < 25; i++){
            
            

            if(i%5 == 0){
                bingoTableHTML = bingoTableHTML + "<tr>";
                //console.log(columnZeroArray);
                content = chooseLang(allowedBingoCardLanguages, c0a.splice(Math.floor(Math.random()*c0a.length),1)[0], c0a);
                //console.log(content);
                if(typeof content == "number"){
                
                bingoTableHTML = bingoTableHTML + `<td style="font-size:90px">`+content+`</td>`;
                    
                }
                
                else {
                    
                    bingoTableHTML = bingoTableHTML + `<td style="font-size:` + textScaleSelector(content) +`em">`+content+`</td>`
                    
                }
            }
            
            if(i%5 == 1){
                content = chooseLang(allowedBingoCardLanguages, c1a.splice(Math.floor(Math.random()*c1a.length),1)[0]);
                
                if(typeof content == "number"){
                
                bingoTableHTML = bingoTableHTML + `<td style="font-size:90px">`+content+`</td>`;
                    
                }
                
                else {
                    
                    bingoTableHTML = bingoTableHTML + `<td style="font-size:` + textScaleSelector(content) +`em">`+content+`</td>`
                    
                }
            }
            
            if(i%5 == 2){
                content = chooseLang(allowedBingoCardLanguages, c2a.splice(Math.floor(Math.random()*c2a.length),1)[0]);
                //console.log(content);
                if(typeof content == "number"){
                
                bingoTableHTML = bingoTableHTML + `<td style="font-size:90px">`+content+`</td>`;
                    
                }
                
                else {
                    
                    bingoTableHTML = bingoTableHTML + `<td style="font-size:` + textScaleSelector(content) +`em">`+content+`</td>`
                    
                }
            }
            
            if(i%5 == 3){
                content = chooseLang(allowedBingoCardLanguages, c3a.splice(Math.floor(Math.random()*c3a.length),1)[0]);
                //console.log(content);
                if(typeof content == "number"){
                
                bingoTableHTML = bingoTableHTML + `<td style="font-size:90px">`+content+`</td>`;
                    
                }
                
                else {
                    
                    bingoTableHTML = bingoTableHTML + `<td style="font-size:` + textScaleSelector(content) +`em">`+content+`</td>`
                    
                }
            } 

            if(i%5 == 4){
                content = chooseLang(allowedBingoCardLanguages, c4a.splice(Math.floor(Math.random()*c4a.length),1)[0]);
                //console.log(content);
                if(typeof content == "number"){
                
                bingoTableHTML = bingoTableHTML + `<td style="font-size:90px">`+content+`</td>`;
                    
                }
                
                else {
                    
                    bingoTableHTML = bingoTableHTML + `<td style="font-size:` + textScaleSelector(content) +`em">`+content+`</td>`
                    
                }
                bingoTableHTML = bingoTableHTML + "</tr>"
            }
        }
    
        bingoTableHTML = bingoTableHTML + `</table><br><br><span style="font-size:10px">` + contentStringArray + "</span></div>" ;
    }
    
    document.getElementById("mainContent").innerHTML = bingoTableHTML;
    
    setTimeout(proceedToCalls, 150);

}

function chooseLang(allowedArray,c,errorArray){
    
    var lang = allowedArray[Math.floor(Math.random()*allowedArray.length)];
    
    //console.log(errorArray);
    
    if(typeof c[lang] == "string"){
        
        return c[lang];
    }
    
    else {
        
        return c[0];
        
    }
    
}

function proceedToCalls() {
    
    if(confirm("Are you ready to call?")){
        
        callingPage();
        
    }
    
    else {
        
        setTimeout(proceedToCalls, 7000);
        
    }
    
}

var availableContent = [];

function callingPage(){
    
    document.getElementById("mainContent").style = "margin-top:75px;font-size:20px;line-height:1.75";

    var c0a = [...columnZeroArray];
    var c1a = [...columnOneArray];
    var c2a = [...columnTwoArray];
    var c3a = [...columnThreeArray];
    var c4a = [...columnFourArray];
    
    document.getElementById("mainContent").innerHTML = `

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
    
}

function updatePrevCalledOrderList(){
    
    document.getElementById("header0Div").innerHTML = headerSet[0][0] + createPrevCalledOrderedList(header0PrevOrderedCalls);
    document.getElementById("header1Div").innerHTML = headerSet[1][0] + createPrevCalledOrderedList(header1PrevOrderedCalls);
    document.getElementById("header2Div").innerHTML = headerSet[2][0] + createPrevCalledOrderedList(header2PrevOrderedCalls);
    document.getElementById("header3Div").innerHTML = headerSet[3][0] + createPrevCalledOrderedList(header3PrevOrderedCalls);
    document.getElementById("header4Div").innerHTML = headerSet[4][0] + createPrevCalledOrderedList(header4PrevOrderedCalls);
}

function restartGame(){
    
    document.getElementById("previousCalls").innerHTML = "";
    header0PrevOrderedCalls = [];
    header1PrevOrderedCalls = [];
    header2PrevOrderedCalls = [];
    header3PrevOrderedCalls = [];
    header4PrevOrderedCalls = [];
    
    updatePrevCalledOrderList();
    
}

function endGame() {
    
    participantCountPage();
    
}

function createPrevCalledOrderedList(arr){
    
    let returnString = "";
    
    for(let i = 0; i < arr.sort(function(a, b){return a - b}).length; i++){
            returnString += " " + arr[i];
    }
    
    return returnString;
}

function callContent(){
    
    if(document.getElementById("previousCalls").innerHTML == "")  {
        callDestro = new destroArray();
        cA = callDestro.cA;
        c0a = callDestro.c0a;
        c1a = callDestro.c1a;
        c2a = callDestro.c2a;
        c3a = callDestro.c3a;
        c4a = callDestro.c4a;
   }
    
   
    
    var splicedContent = cA.splice(Math.floor(Math.random()*cA.length),1)[0];
    
    var contentCalledEnglish = splicedContent[0];
    
    var contentCalled = chooseLang(allowedCallLanguages, splicedContent);
        
    for(var a=0; a < c0a.length; a++){
        
        if(contentCalledEnglish == c0a[a][0]){
            
            headerCall = chooseLang(allowedCallLanguages, headerSet[0])
            headerCallEnglish = headerSet[0][0];
            header0PrevOrderedCalls.push(contentCalledEnglish);
        }
        
    }
        
    for(var b=0; b < c1a.length; b++){
        
        if(contentCalledEnglish == c1a[b][0]){
            
            headerCall = chooseLang(allowedCallLanguages, headerSet[1])
            headerCallEnglish = headerSet[1][0];
            header1PrevOrderedCalls.push(contentCalledEnglish);
        }
    }
        
    for(var c=0; c < c2a.length; c++){
        
        if(contentCalledEnglish == c2a[c][0]){
            
            headerCall = chooseLang(allowedCallLanguages, headerSet[2])
            headerCallEnglish = headerSet[2][0];
            header2PrevOrderedCalls.push(contentCalledEnglish);
        }
    }
    
    for(var d=0; d < c3a.length; d++){
        
        if(contentCalledEnglish == c3a[d][0]){
            
            headerCall = chooseLang(allowedCallLanguages, headerSet[3])
            headerCallEnglish = headerSet[3][0];
            header3PrevOrderedCalls.push(contentCalledEnglish);
        }
    }
        
    for(var e=0; e < c0a.length; e++){
        
        if(contentCalledEnglish == c4a[e][0]){
            
            headerCall = chooseLang(allowedCallLanguages, headerSet[4])
            headerCallEnglish = headerSet[4][0];
            header4PrevOrderedCalls.push(contentCalledEnglish);
        }
        
    }
    
    headerCall = String(headerCall);
    contentCalled = String(contentCalled);
    headerCallEnglish = String(headerCallEnglish);
    contentCalledEnglish = String(contentCalledEnglish);
    
    //.replace(/-<br>/g,"") is to remove the hyphens from the content
    document.getElementById("previousCalls").innerHTML = headerCall.replace(/-<br>/g,"") + " " + contentCalled.replace(/-<br>/g,"") + " - <i>" + headerCallEnglish.replace(/-<br>/g,"") + " " + contentCalledEnglish.replace(/-<br>/g,"") + "</i><br>" + document.getElementById("previousCalls").innerHTML;
    
    updatePrevCalledOrderList();
    
}



participantCountPage();