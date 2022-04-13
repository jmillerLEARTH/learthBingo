class ball {
    
    constructor(cardText,callText){
        
        this.cardText = cardText;
        this.callText = callText;
        this.header;
        this.pullSeed = null;
    }
    
    SetHeader(header){
        this.header = header;
    }
}

export class ballHandler {
    
    constructor(gameHandlerOwner){
        
        this.gameHandlerOwner = gameHandlerOwner;
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
    }
    
    ReturnAllPulledBalls(){
        
        for(const b of this.pulledBalls){
            
            this.balls.push[b];
        }
        
        this.pulledBalls = [];
    }
    
    _AssignBallSeeds(){
        
        this.pullSeeds = [];
        
        for(const b of this.balls){
            
            let $seed = Math.random();
            b.pullSeed = $seed;
            this.pullSeeds.push($seed);
        }
    }
    
    _GetHighestPullSeedBall(){
        
        for(const b of this.balls){
            
            if(b.pullSeed == Math.max(...this.pullSeeds)) return b
        }
    }
    
    PullBall(forCall=true){
        
        this._AssignBallSeeds();
        
        let $pulledBall = this._GetHighestPullSeedBall();
        
        this.balls = this.balls.filter((e) => e != $pulledBall);
        
        this.pulledBalls.push($pulledBall);
        
        //console.log($pulledBall);
        //console.log(this.balls);
        //console.log(this.pulledBalls);
        
        if(forCall) this.CallBall($pulledBall);
        
        return $pulledBall
        
    }
    
    CallBall(ball){
        
        if(this.gameHandlerOwner.gameSettingsHandler.playAudioCalls){
            
            for(const l of this.gameHandlerOwner.gameSettingsHandler.gameCallLangs){
                         
                this.gameHandlerOwner.audioCallLibrary.PlayLangSound(l,ball.callText,false,true);      
            }
        }   
    }
}