// Коментарями позначено номер завдання

import * as lab2 from '../lab2/lab2';

// 1.2.1
export enum Category {
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster
}

// 1.1.1, 2.1.1. 2.2.2
export interface MyWorker {
    id: number,
    Name: string,
    surname: string,
    available: boolean,
    salary: number,
    category: Category
    markPrize?: lab2.PrizeLogger
}

// 1.1.1, 2.2, 3.1, 2.1.1
export function getAllworkers(): MyWorker[]{    
    let workers: MyWorker[] = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Developer},
        {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer},
        {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer},
        {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.ScrumMaster}
    ]
    return workers;
}

// 1.1.2
export function logFirstAvailable (workers: MyWorker[] = getAllworkers()): void {
    console.log(`Number of all workers: ${workers.length}`);
    console.log('Available workers: ');
    for (let worker of workers){
        if (worker.available === true) {
            console.log(`Name: ${worker.Name} ${worker.surname}`);
        }
    }
}

// 1.1.3
export let allWorkers: MyWorker[] = getAllworkers();
console.log('1.1.3/');
logFirstAvailable(allWorkers);

// 1.2.3 1.5.2
export function getWorkersNamesByCategory(category: Category = Category.Designer): string[]{
    let workerCategorySurnames: string[] = [];
    for (let worker of allWorkers.filter(worker => worker.category === category)){
        workerCategorySurnames.push(worker.surname);
    }
    return workerCategorySurnames;
}

// 1.2.4
export function logWorkersNames(workers: string[]): void{
    for (let line of workers){
        console.log(line);
    }
}

// 1.3.2
console.log('1.3.2/');
allWorkers.filter(worker => worker.category === Category.Developer).forEach(worker => {
    console.log(`Worker name: ${worker.Name} ${worker.surname}`);
});

// 1.3.3
export function getWorkerInfoByID(id: number): (string | number)[] {
    const workerData = allWorkers.find((worker) => (worker.id === id));
    if (workerData){
        return [workerData.Name, workerData.surname, workerData.salary];
    }
    return [];
}

// 1.4.1
export function createCustomerID(name: string, id: number): string{
    return name + id.toString();
}

// 1.4.2
console.log('1.4.2/');
let myID: string = createCustomerID('Ann', 10);
console.log(myID);

// 1.4.3
let idGenerator: (name: string, id: number) => string = function (
    name: string,
    id: number
): string {
    return name + id.toString();
}

// 1.4.4
console.log('1.4.4/');
idGenerator = createCustomerID
console.log(idGenerator('Ann', 10));

// 1.5.1
export function createCustomer(name: string, age?: number, city?: string){
    let templateString = `Customer name: ${name}`;
    if (age){
        templateString += `, customer age: ${age.toString()}`;
    }
    if (city){
        templateString += `, customer's address city: ${city}`
    }
    console.log(templateString);
}
console.log('1.5.1/');
createCustomer('Ivan');
createCustomer('Ivan', 38);
createCustomer('Ivan', 38, 'FFFF');

// 1.5.2
getWorkersNamesByCategory();

// 1.5.3
console.log('1.5.3/');
logFirstAvailable();

// 1.5.4
export function checkoutWorkers(customer: string, workerIDs: number[]): string[]{
    let availableWorkers: string[] = [];
    for (let id of workerIDs){
        let workerData = getWorkerInfoByID(id)
        if (workerData.length){
            availableWorkers.push(`${workerData[0]} ${workerData[1]}`)
        }
    }
    console.log('Customer:', customer);
    return availableWorkers;
}

// 1.5.5s
console.log('1.5.5/');
let myWorkers = checkoutWorkers('Ann', [1, 2, 4]);
myWorkers.forEach(workerName => console.log(workerName));