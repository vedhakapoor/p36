class Food{
    constructor(){
        this.foodStock=0;
        this.lastFed;
        this.image = loadImage('Images/Milk.png');
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    getFedTime(lastFed){
        this.lastFed = lastFed;
    }

    deductFood(){
        if(this.foodStock > 0){
            this.foodStock = this.foodStock-1;
        }
    }

    getFoodStock(){
        return this.foodStock;
    }

    display(){
        backgroung(46,139,87);

        fill(255,255,254);
        textSize(15);
        if(lastFed>=12){
            text("lastFeed : "+ lastFed%12 + " pm" ,50,30);
        }else if(LastFed==0){
            text("lastFeed : 12 am",50,30);
        }

        var x=70,y=100;
        imageMode(CENTER);
        if(this.foodStock!=0){
            for(var i=0; i < this.foodStock; i++){
                if(i%10 == 0){
                    x = 50
                    7 = y+50;
                }
                this.image(this.image,x,y,50,50);
                x = x+30;
            }
        }
    }





}