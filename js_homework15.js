import got from 'got';

//Task 1
const textOutput = (text, time) => {
    setTimeout(() => { console.log(text) }, time);
};

textOutput('blabla', 2000);

//Task 2, 3, 4
const url = 'https://jsonplaceholder.typicode.com';

class FuncWithPromise {
    getTodos() {
        return Promise.resolve(got(`${url}/todos/1`)).then(res => res.body).catch(error => error);
    }

    getUser()  {
        return Promise.resolve(got(`${url}/users/1`)).then(res => res.body).catch(e => e);
    };

    promiseAll(firstCallback, secondCallback) {
        return Promise.all([firstCallback(), secondCallback()]).then(value => {
            this.resAll = value;
            console.log(this.resAll)
            console.log('------------------')
        })
    }
    promiseRace(firstCallback, secondCallback) {
        return Promise.race([firstCallback(), secondCallback()]).then(value => {
            this.resRace = value;
            console.log(this.resRace)
            console.log('------------------')
        })
    }
}

class FuncWithAsync extends FuncWithPromise {
    async getTodos() {
        const res = await got(`${url}/todos/1`);
        return res.body;
    }

    async getUser() {
        const res = await got(`${url}/users/1`);
        return res.body;
    }
}

const funcPromise = new FuncWithPromise();
const funcAsync = new FuncWithAsync();
funcPromise.promiseAll(funcPromise.getTodos, funcPromise.getUser);
funcPromise.promiseRace(funcPromise.getTodos, funcPromise.getUser);
funcAsync.promiseAll(funcAsync.getTodos, funcAsync.getUser);
funcAsync.promiseRace(funcAsync.getTodos, funcAsync.getUser);