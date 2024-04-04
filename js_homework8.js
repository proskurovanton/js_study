// Task 1. BigBoss
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

const findValueByKey = (companyName, obj = company) => {
    if(obj.name === companyName) {
        return obj;
    } else if(obj.clients) {
        for(let inClients of obj.clients) {
            let res = findValueByKey(companyName, inClients);
            if(typeof res === 'object') {
                return res;
            }
        }
    } else if(obj.partners) {
        for (let inPartners of obj.partners) {
            let res = findValueByKey(companyName, inPartners);
            if (typeof res === 'object') {
                return res;
            }
        }
    }
    return `${companyName} not found`;
}

console.log(findValueByKey('Клієнт 1.2.3'));


// Task 2
const footballTeam = {
    name: 'Dynamo',
    city: 'Kyiv',
    year: 1927,
    isChampion: false,
    getInfo: function () {
        for(let key in this) {
            if(typeof this[key] !== 'function') {
                typeof this[key] === 'object' ? console.log(`${key}: ${JSON.stringify(this[key])}`) : console.log(`${key}: ${this[key]}`);
            }
        }
    }
}
footballTeam.getInfo();
footballTeam.player = {
    firstName: 'Andrii',
    lastName: 'Yarmolenko'
};
footballTeam.getInfo();