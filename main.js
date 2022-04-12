import {langHandler} from "./indigLangSounds/indigLangSounds.js";
import {gameHandler} from "./bingo.js";

export function mainTest(){
    
    const LH = new langHandler();
    
    LH.InitiateLangs();

    const GH = new gameHandler(LH);
    
    GH.TestCall();

}

// PLAY ENGLISH SOUND AFTER?