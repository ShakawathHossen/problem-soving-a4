// problem 3 
// function start 
function picnicBudget(person) {
    const forFirst100persons = 5000;
    const forSecond100persons = 4000;
    const forrestPersons = 3000;
    // error handle start
    if (typeof person != "number") {
        return 'Please enter person in number';
    }
    else if (person<0) {
        return 'Haha! Nobody going.Everybody is Kipta';      
    }
 // error handle end
    else if (person <= 100) {
        const count = person * forFirst100persons;
        return count;
    }
    else if (person <= 200) {
        const first100person = 100 * forFirst100persons;
        const restpersons = person - 100;
        const second100person = restpersons * forSecond100persons;
        const totalPersons = first100person + second100person;
        return totalPersons;

    }
    else {
        const first100person = 100 * forFirst100persons;
        const second100person = 100 * forSecond100persons;
        const restpersons = person - 200;
        const restPicnicpersons = restpersons * forrestPersons;
        const totalPicnicpersons = first100person + second100person + restPicnicpersons;
        return totalPicnicpersons;

    }
}

const picnic = picnicBudget(500);
console.log(picnic);