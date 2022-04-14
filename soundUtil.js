export function PlaySequentialSounds(soundPaths,debugLogObject = null){
    
    let audios = [];
    
    for(const sp of soundPaths){
        
        let $audio = new Audio(sp);
        
        audios.push($audio);
        
        console.log(audios);
    }
    
    for(let i=0; i<audios.length; i++){
        
        if(i != 0){
        
            audios[i-1].addEventListener('ended', function(){
                
                try{
                    audios[i].play();
                }
                catch{
                    if(debugLogObject != null){
                        debugLogObject.failedAudioSources.push(audios[i]);
                        console.warn(debugLogObject.failedAudioSources);
                    }       
                }
            })
        }
    }
    
    console.error("I WANT THIS TO LOG FAILED AUDIO SOURCES");
    
    audios[0].play();
}