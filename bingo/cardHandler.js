import {ballHandler} from "./ballHandler.js";

class cardSpace {
    
    constructor(cardOwner,x,y,content){
        
        this.cardOwner = cardOwner;
        this.x = x;
        this.y = y;
        this.content = content;
    }
}

class card {
    
    constructor(cardHandlerOwner){
        
        this.cardHandlerOwner = cardHandlerOwner;
        this.nextXPlace = 0;
        this.nextYPlace = 0;
        this.spaces = [];
        
    }
    
    AssignSpace(){
        
        for(const b of this.cardHandlerOwner.ballHandler.balls){
            
            if(b.headerIndex != this.nextXPlace) continue
            
            let $pulledBall = b;
            
            this.cardHandlerOwner.ballHandler.RemoveBall(b);
            
            let $space = new cardSpace(this,this.nextXPlace,this.nextYPlace,$pulledBall.cardText);
            this.spaces.push($space);
            
//            console.warn("assigning");
//            console.log($pulledBall);
//            console.log("to");
//            console.log($space);
        
            this._MoveToNextYPlace();
        }
        
        //let $pulledBall = this.cardHandlerOwner.gameHandlerOwner.ballHandler.PullBall(false);
        
        //console.log($pulledBall);
        
        //$pulledBall.SetHeader(this.cardHandlerOwner.headers[this.nextYPlace]);
        
        
    }
    
    _MoveToNextYPlace(){
    
        this.nextYPlace++;
        
        if(this.nextYPlace == 5){
            
            this.nextXPlace++;
            this.nextYPlace = 0;
        }
    }
}

export class cardHandler {
    
    constructor(gameHandlerOwner){
        
        this.gameHandlerOwner = gameHandlerOwner;
        this.cards = [];
        this.headers = [];
        this.ballHandler = new ballHandler();

    }
    
    SetHeaders(hdr0,hdr1,hdr2,hdr3,hdr4){
        
        this.headers.push(hdr0);
        this.headers.push(hdr1);
        this.headers.push(hdr2);
        this.headers.push(hdr3);
        this.headers.push(hdr4);
    }
    
    _CopyBallIntoCardBallHandler(ball){
        
        let $cardBall = this.ballHandler.LoadNewBall(ball.cardText,ball.callText);
        
        $cardBall.SetHeader(ball.headerIndex,ball.header);
    }
    
    _AssignHeadersToBalls(balls){
        
        // assign header prop and header index prop to ball based on sorted seed and make a copy of that ball to put into the header bucket
        // let cardhandler also have a ballhandler -- use SortBallsBySeed() and just pull X out for each seed (continue on non-compliant header index)
        // iterate through based on $headerIndex
        
        let $minBallsPerBucket = balls.length/5;
        let $currentHeaderIndex = 0;
        let $ballsAssignedToCurrentIndex = 0;
        
        const $balls = this.gameHandlerOwner.ballHandler.balls;
        
        for(const b of $balls){
            
            b.SetHeader($currentHeaderIndex,this.headers[$currentHeaderIndex]);
            
            this._CopyBallIntoCardBallHandler(b);
            
            $ballsAssignedToCurrentIndex++;
            
            if($ballsAssignedToCurrentIndex >= $minBallsPerBucket){
                
                $ballsAssignedToCurrentIndex = 0;
                $currentHeaderIndex++;
                
                if($currentHeaderIndex > this.headers.length - 1){
                    
                    $currentHeaderIndex = this.headers.length - 1;
                }
            }
        }
    }
    
    GenerateCards(num){
        
        this.gameHandlerOwner.ballHandler.SortBallsByCardText();
        
        this._AssignHeadersToBalls(this.gameHandlerOwner.ballHandler.balls);
        
        //determine how evenly the total number of balls divides into 5 and then put them into header0Bucket, header1Bucket, etc.
        //and draw out of those
        
        for(let i=0; i<num; i++){
            
            let $card = new card(this);
            
            if(this.ballHandler.GetNumBallsRemaining() < 50) console.warn("empty")
        
            this.ballHandler.SortBallsBySeed();

            for(let s=0; s<26; s++){
                
                $card.AssignSpace();
            }
            
            this.cards.push($card);
            
            this.ballHandler.ReturnAllPulledBalls();
            
            this.ballHandler.AssignNewBallSeeds();
        }
        
        console.log(this);
        //console.log(this.gameHandlerOwner.ballHandler);
    }
}
