import {lang,phraseHandler,soundHandler,soundFile} from "./indigLangSounds.js";

export function InitOjibwemowin(ojibwemowin){
    
    ojibwemowin.AddPhrase("bezhig", "one")
        .soundHandler.AddSoundFile("https://s3.amazonaws.com/ojibwe-audio-transcoded/bezhig_av____lw580143.mp4");
    
    ojibwemowin.AddPhrase("niizh", "two")
        .soundHandler.AddSoundFile("https://s3.amazonaws.com/ojibwe-audio-transcoded/niizh__qnt__sp67490.mp4");
    
    ojibwemowin.AddPhrase("niswi", "three")
        .soundHandler.AddSoundFile("https://s3.amazonaws.com/ojibwe-audio-transcoded/niswi__qnt__gp68005_3.mp4");
    
    ojibwemowin.AddPhrase("niiwin", "four")
        .soundHandler.AddSoundFile("https://s3.amazonaws.com/ojibwe-audio-transcoded/niiwin__qnt__sp67490.mp4");
    
    ojibwemowin.AddPhrase("naanan", "five")
        .soundHandler.AddSoundFile("https://s3.amazonaws.com/ojibwe-audio-transcoded/naanan__qnt__nj61006_0.mp4");
    
    ojibwemowin.AddPhrase("ningodwaaswi", "six")
        .soundHandler.AddSoundFile("https://s3.amazonaws.com/ojibwe-audio-transcoded/ningodwaaswi__qnt__nj61006_0.mp4");
    
    ojibwemowin.AddPhrase("niizhwaaswi", "seven")
        .soundHandler.AddSoundFile("https://s3.amazonaws.com/ojibwe-audio-transcoded/niizhwaaswi__qnt__gp68005_3.mp4");
    
    ojibwemowin.AddPhrase("niizhwaaswi", "seven")
        .soundHandler.AddSoundFile("https://s3.amazonaws.com/ojibwe-audio-transcoded/nishwaaswi__qnt__nj61006_0.mp4");
}