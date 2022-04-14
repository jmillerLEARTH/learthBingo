export function PlaySequentialSounds(soundPaths){
    
    let audios = [];
    
    for(const sp of soundPaths){
        
        let $audio = new Audio(sp);
        
        audios.push($audio);
        
        console.log(audios);
    }
    
    for(let i=0; i<audios.length; i++){
        
        if(i != 0){
        
            audios[i-1].addEventListener('ended', function(){
                audios[i].play()});
        }
    }
    
    audios[0].play();
}