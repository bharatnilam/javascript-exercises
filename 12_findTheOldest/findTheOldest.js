const findTheOldest = function(people) {
    if (people.length === 0) {
        return null;
    }

    const currentYear = new Date().getFullYear();

    let oldestPerson = people[0]; 

    const calculateAge = (person) => {
        if (person.yearOfDeath) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return currentYear - person.yearOfBirth;
        }
    };

    for (let i = 1; i < people.length; i++) {
        const ageOldest = calculateAge(oldestPerson);
        const ageCurrent = calculateAge(people[i]);

        if (ageCurrent > ageOldest) {
            oldestPerson = people[i];
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
