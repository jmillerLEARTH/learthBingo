import {langHandler} from "./indigLangSounds.js";
import {InitOjibwemowin} from "./ojibwemowin.js";

export function mainTest(){
    
    const LH = new langHandler;
    
    const ojibwemowin = LH.AddLang("ojibwemowin","ojibwe");
    
    InitOjibwemowin(ojibwemowin);

    LH.PlayLangSound("ojibwemowin","bezhig");
    
//    const testAudio = new Audio("https://s3.amazonaws.com/ojibwe-audio-transcoded/bezhig_av____lw580143.mp4");
//    console.log(testAudio);
//    testAudio.playbackRate = 1;
//    testAudio.play();	

}

// PLAY ENGLISH SOUND AFTER?