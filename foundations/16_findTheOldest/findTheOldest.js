const findTheOldest = function(persons) {

    persons.forEach(element => {
        if (element.yearOfDeath === undefined){
            element.age = new Date().getFullYear() - element.yearOfBirth;
        }else{
            element.age = element.yearOfDeath - element.yearOfBirth; 
        } 
    });

    const oldest = persons.reduce( (oldest, current) => {
        return oldest.age > current.age ? oldest : current
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
