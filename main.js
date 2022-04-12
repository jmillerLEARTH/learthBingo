import {PlayLangSound} from "./indigLangSounds.js";

export function mainTest(){

    PlayLangSound("ojibwemowin","bezhig");
    
    const testAudio = new Audio("https://s3.amazonaws.com/ojibwe-audio-transcoded/bezhig_av____lw580143.mp4");
    console.log(testAudio);
    testAudio.playbackRate = 1;
    testAudio.play();	

}