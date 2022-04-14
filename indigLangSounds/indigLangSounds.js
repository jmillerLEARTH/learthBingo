import {InitLangs} from "./initLangs.js";

export class soundFile{
    
    constructor(soundHandlerOwner,path){
        
        this.soundHandlerOwner = soundHandlerOwner;
        this.path = path;
    }
}

export class soundHandler{
    
        constructor(phraseOwner){
                
            this.phraseOwner = phraseOwner;
            this.sounds = [];
        }
    
    AddSoundFile(path){
        
        let $soundFile = new soundFile(this,path);
        this.sounds.push($soundFile);
        
    }
    
    PlaySounds(){
        
        for(const snd of this.sounds){
            
            console.warn("currently will only work with single sound phrases");

            const $tempAudio = new Audio(snd.path);
            $tempAudio.play()

        }
    }

}

export class phraseHandler {
    
    constructor(phrase,engPhrase){
        
        this.lang = lang;
        this.phrase = phrase;
        this.engPhrase = engPhrase;
        this.soundHandler = new soundHandler(this);
    }
}

export class lang {
    
    constructor(langName,langEngName){
        
        this.langName = langName;
        this.langEngName = langEngName;
        this.phrases = [];
    }
    
    AddPhrase(phrase,engPhrase){
        
        let $phrase = new phraseHandler(phrase,engPhrase);
        $phrase.lang = this.langName;
        this.phrases.push($phrase);
        
        return $phrase
    }
}

export class langHandler {
    
    constructor(){
        
        this.langs = [];
    }
    
    AddLang(langName,langEngName){
        
        let $lang = new lang(langName,langEngName);
        this.langs.push($lang);
        
        return $lang
    }
    
    InitiateLangs(){
        
        InitLangs(this);
    }
    
    _FindMatchingPhrase(lang,phrase,searchByEngLangName=false,searchByEngPhrase=false){
        
        let $evalLangName;
        let $evalPhrase;
        
        if(searchByEngLangName) $evalLangName = "langEngName"
        else $evalLangName = "langName"
        
        if(searchByEngPhrase) $evalPhrase = "engPhrase"
        else $evalPhrase = "phrase"
        
        for(const l of this.langs){
            
            if(l[$evalLangName] == lang){

                for(const ph of l.phrases){

                    if(ph[$evalPhrase] == phrase) return ph
                }
            }
        }
    }
    
    PlayLangSound(lang,phrase,searchByEngLangName=false,searchByEngPhrase=false){

        this._FindMatchingPhrase(lang,phrase,searchByEngLangName,searchByEngPhrase).soundHandler.PlaySounds();
                
    }
    
    GetSoundPaths(lang,phrase,searchByEngLangName=false,searchByEngPhrase=false){
        
        let $phrase = this._FindMatchingPhrase(lang,phrase,searchByEngLangName,searchByEngPhrase);
        
        console.log($phrase);
        
        let $returnArr = [];
        
        for(const snd of $phrase.soundHandler.sounds){
            
            $returnArr.push(snd.path);
        }
        
        return $returnArr
    }
}



