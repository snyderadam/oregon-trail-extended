class Traveler {
    constructor(name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt(){
         this.food = this.food + 2
    }
    eat(){
        
        if (this.food <= 0){
              this.isHealthy = false
        } else {
            this.food = this.food - 1
        }
    }


}