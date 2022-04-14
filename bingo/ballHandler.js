import {PlaySequentialSounds} from "./../soundUtil.js";

class ball {
    
    constructor(cardText,callText){
        
        this.cardText = cardText;
        this.callText = callText;
        this.header;
        this.headerIndex;
        this.pullSeed = Math.random();
    }
    
    SetHeader(headerIndex,header){
        this.header = header;
        this.headerIndex = headerIndex;
    }
}

export class ballHandler {
    
    constructor(owner){
        
        this.owner = owner; //can be gameHandler or cardHandler
        this.balls = [];
        this.pulledBalls = [];
        this.pullSeeds = [];
        
    }
    
    LoadBallsXToY(x,y){
        
        for(let i=x; i<y+1; i++){
            
            this.LoadNewBall(i,i);
        }
        
    }
    
    LoadNewBall(cardText,callText){
        
        let $ball = new ball(cardText,callText);
        this.balls.push($ball);
        
        return $ball
    }
    
    ReturnAllPulledBalls(){
        
        for(const b of this.pulledBalls){
            
            this.balls.push(b);
        }
        
        this.pulledBalls = [];
    }
    
    AssignNewBallSeeds(){
        
        for(const b of this.balls){
            
            b.pullSeed = Math.random();
        }
    }
    
    SortBallsByCardText(){
        
        this.balls.sort((a, b) => (a.cardText > b.cardText) ? 1 : -1)
    }
    
    SortBallsBySeed(){
        
        this.balls.sort((a, b) => (a.pullSeed > b.pullSeed) ? 1 : -1)
    }
    
    GetNumBallsRemaining(){
        
        return this.balls.length
    }
    
//    _GetHighestPullSeedBall(){
//        
//        for(const b of this.balls){
//            
//            if(b.pullSeed == Math.max(...this.pullSeeds)) return b
//        }
//    }
//    
    RemoveBall(ball){
        
        this.balls = this.balls.filter((e) => e != ball);
        
        this.pulledBalls.push(ball);
    }
    
    PullBall(forCall=true){
        
        //this._AssignBallSeeds();
        
        let $pulledBall = this.balls.shift();
        
        //;
        
        this.pulledBalls.push($pulledBall);
        
        console.log($pulledBall);
        //console.log(this.balls);
        //console.log(this.pulledBalls);
        
        if(forCall) this.CallBall($pulledBall);
        
        return $pulledBall
        
    }
    
    CallBall(ball){
        
        let $sounds = [];
        
        let $callString = "";

        for(const l of this.owner.gameSettingsHandler.gameCallLangs){
            
            $callString = $callString + this.owner.audioCallLibrary.GetPhrase(l,ball.header,false,true) + " ";

            let $headerSounds = this.owner.audioCallLibrary.GetSoundPaths(l,ball.header,false,true);

            for(const hs of $headerSounds){

                $sounds.push(hs);
            }
            
            $callString = $callString + this.owner.audioCallLibrary.GetPhrase(l,ball.callText,false,true);

            let $callSounds = this.owner.audioCallLibrary.GetSoundPaths(l,ball.callText,false,true);

            for(const cs of $callSounds){

                $sounds.push(cs);
            }
//                         
//                this.owner.audioCallLibrary.PlayLangSound(l,ball.callText,false,true);      
        }
        
        this.owner.uiHandler.UpdateCallPage(ball.headerIndex,ball.header,ball.callText);

        console.log($sounds);
        
        if(this.owner.gameSettingsHandler.playAudioCalls){    
            PlaySequentialSounds($sounds);
        }   
    }
}