class Doctor extends Traveler{
    constructor(name, food, isHealthy){
    super(name, food, isHealthy)}
    
heal(traveler){
    traveler.isHealthy = true
}

}

