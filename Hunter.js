class Hunter extends Traveler{

    constructor(name, isHealthy){
        super(name, isHealthy)
        this.food = 2
    }
hunt(){
    this.food = this.food + 5
}
eat(){
    if(this.food <= 1){
        this.isHealthy = false
        this.food = 0
    }else{
        this.food = this.food - 2
    }
}
giveFood(traveler, numOfFoodUnits){
    if (this.food < numOfFoodUnits){
        return "NULL."
    }else{
        traveler.food = traveler.food + numOfFoodUnits
        this.food = this.food - numOfFoodUnits
    }
}


}