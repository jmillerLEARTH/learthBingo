class soundFile{
    
    constructor(soundHandlerOwner,path){
        
        this.soundHandlerOwner = soundHandlerOwner;
        this.path = path;
        this.audio = null;
    }
}

class soundHandler{
    
        constructor(phraseOwner){
                
            this.phraseOwner = phraseOwner;
            this.sounds = [];
        }
    
    AddSoundFile(path){
        
        let $soundFile = new soundFile(this,path);
        this.sounds.push($soundFile);
        
        console.log(this)
    }
    
    CreateNeccAudios(){
        
        console.warn("does audio automatically destroy itself once done? can you access it twice? Need to store on object?");
        
        for(const snd of this.sounds){
            
            if(snd.audio == null){
                
                snd.audio = new Audio(this.path);
                console.log(this.path);
                console.log(snd.audio);
            }
        }
    }
    
    PlaySounds(){
        
        for(const snd of this.sounds){
            
            console.warn("currently will only work with single sound phrases");
            
            if(snd.audio != null){
                
                console.log("playing");
                
                console.log(snd.audio);
                
                snd.audio.play();
            }
            else{
                
                console.warn("audio for sound is not loaded>>>");
                console.log(snd);
            }
        }
    }
}

class phraseHandler {
    
    constructor(phrase,engPhrase){
        
        this.lang = lang;
        this.phrase = phrase;
        this.engPhrase = engPhrase;
        this.soundHandler = new soundHandler(this);
    }
}

class lang {
    
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

class langHandler {
    
    constructor(){
        
        this.langs = [];
    }
    
    AddLang(langName,langEngName){
        
        let $lang = new lang(langName,langEngName);
        this.langs.push($lang);
        
        return $lang
    }
}


const LH = new langHandler;

export function PlayLangSound(lang,phrase,langEngName=null,engPhrase=null){
    
    for(const l of LH.langs){
        
        if(l.langName == lang){
            
            for(const ph of l.phrases){
                
                if(ph.phrase == phrase){
                    
                    ph.soundHandler.CreateNeccAudios();
                    
                    ph.soundHandler.PlaySounds();
                }
            }
        }
    }
}

const ojibwemowin = LH.AddLang("ojibwemowin","ojibwe");

ojibwemowin.AddPhrase("bezhig", "one")
    .soundHandler.AddSoundFile("https://s3.amazonaws.com/ojibwe-audio-transcoded/bezhig_av____lw580143.mp4");

