import {langHandler} from "./indigLangSounds/indigLangSounds.js";
import {gameHandler} from "./bingo/bingo.js";

export function mainTest(){
    
    const LH = new langHandler();
    
    LH.InitiateLangs();

    const GH = new gameHandler(LH);
    
    GH.uiHandler.DisplayGameSettingsPage();

}

// PLAY ENGLISH SOUND AFTER?