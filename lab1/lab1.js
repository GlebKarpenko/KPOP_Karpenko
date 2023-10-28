"use strict";
// Коментарями позначено підномер завдання
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutWorkers = exports.createCustomer = exports.createCustomerID = exports.getWorkerInfoByID = exports.logWorkersNames = exports.getWorkersNamesByCategory = exports.allWorkers = exports.logFirstAvailable = exports.getAllworkers = exports.Category = void 0;
// 1.2.1
var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (exports.Category = Category = {}));
// 1.1.1, 2.2, 3.1, 2.1.1
function getAllworkers() {
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Developer },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Designer },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.ScrumMaster }
    ];
    return workers;
}
exports.getAllworkers = getAllworkers;
// 1.1.2
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllworkers(); }
    console.log("Number of all workers: ".concat(workers.length));
    console.log('Available workers: ');
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.available === true) {
            console.log("Name: ".concat(worker.Name, " ").concat(worker.surname));
        }
    }
}
exports.logFirstAvailable = logFirstAvailable;
// 1.1.3
exports.allWorkers = getAllworkers();
console.log('1.1.3/');
logFirstAvailable(exports.allWorkers);
// 1.2.3 1.5.2
function getWorkersNamesByCategory(category) {
    if (category === void 0) { category = Category.Designer; }
    var workerCategorySurnames = [];
    for (var _i = 0, _a = exports.allWorkers.filter(function (worker) { return worker.category === category; }); _i < _a.length; _i++) {
        var worker = _a[_i];
        workerCategorySurnames.push(worker.surname);
    }
    return workerCategorySurnames;
}
exports.getWorkersNamesByCategory = getWorkersNamesByCategory;
// 1.2.4
function logWorkersNames(workers) {
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var line = workers_2[_i];
        console.log(line);
    }
}
exports.logWorkersNames = logWorkersNames;
// 1.3.2
console.log('1.3.2/');
exports.allWorkers.filter(function (worker) { return worker.category === Category.Developer; }).forEach(function (worker) {
    console.log("Worker name: ".concat(worker.Name, " ").concat(worker.surname));
});
// 1.3.3
function getWorkerInfoByID(id) {
    var workerData = exports.allWorkers.find(function (worker) { return (worker.id === id); });
    if (workerData) {
        return [workerData.Name, workerData.surname, workerData.salary];
    }
    return [];
}
exports.getWorkerInfoByID = getWorkerInfoByID;
// 1.4.1
function createCustomerID(name, id) {
    return name + id.toString();
}
exports.createCustomerID = createCustomerID;
// 1.4.2
console.log('1.4.2/');
var myID = createCustomerID('Ann', 10);
console.log(myID);
// 1.4.3
var idGenerator = function (name, id) {
    return name + id.toString();
};
// 1.4.4
console.log('1.4.4/');
idGenerator = createCustomerID;
console.log(idGenerator('Ann', 10));
// 1.5.1
function createCustomer(name, age, city) {
    var templateString = "Customer name: ".concat(name);
    if (age) {
        templateString += ", customer age: ".concat(age.toString());
    }
    if (city) {
        templateString += ", customer's address city: ".concat(city);
    }
    console.log(templateString);
}
exports.createCustomer = createCustomer;
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
function checkoutWorkers(customer, workerIDs) {
    var availableWorkers = [];
    for (var _i = 0, workerIDs_1 = workerIDs; _i < workerIDs_1.length; _i++) {
        var id = workerIDs_1[_i];
        var workerData = getWorkerInfoByID(id);
        if (workerData.length) {
            availableWorkers.push("".concat(workerData[0], " ").concat(workerData[1]));
        }
    }
    console.log('Customer:', customer);
    return availableWorkers;
}
exports.checkoutWorkers = checkoutWorkers;
// 1.5.5s
console.log('1.5.5/');
var myWorkers = checkoutWorkers('Ann', [1, 2, 4]);
myWorkers.forEach(function (workerName) { return console.log(workerName); });
