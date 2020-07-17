class Wagon {
    constructor (capacity){
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount(){
         return this.capacity - this.passengers.length
    }
    join(traveler){
        if (this.passengers.length < this.capacity){
            this.passengers.push(traveler)
        } else {
             "NO ROOM HERE."
        }
    }
    shouldQuarantine(){

        for (let index = 0; index < this.passengers.length; index += 1){
            if (this.passengers[index].isHealthy === false){
                return true
            } 
        }
        return false 

   }
    totalFood(){
        let emptyVar = 0
        for (let index = 0; index < this.passengers.length; index += 1){
             emptyVar += this.passengers[index].food
        }
        return emptyVar
    }



}