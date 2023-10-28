"use strict";
// Коментарями позначено номер завдання
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPrize = void 0;
var lab1 = require("../lab1/lab1");
// 2.1.3
function getWorkerByID(id) {
    return lab1.allWorkers.find(function (worker) { return (worker.id === id); });
}
var worker2 = getWorkerByID(2);
// 2.1.4
function printWorker(worker) {
    console.log(worker.Name + worker.surname + 'got salary' + worker.salary);
}
console.log('2.1.4/');
if (worker2) {
    printWorker(worker2);
}
// 2.2.3
var logPrize = function (prize) {
    console.log(prize);
};
exports.logPrize = logPrize;
// 2.3.4
var favouriteAuthor = {
    name: 'AuthorName',
    email: 'author@email.com',
    numBooksPublished: 0
};
console.log('2.3.4/');
console.log(favouriteAuthor);
// 2.3.5, 2.4.2
/*
let favouriteLibrarian: Librarian = {
    name: 'LibrarianName',
    email: 'libralian@email.com',
    department: 'library.com',
    assistCustomer: (custName: string) => {
        console.log(`customer ${custName} assisted`);
    }
}
console.log(favouriteLibrarian);
*/
// 2.4.1
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian(name, email, department) {
        this.name = name;
        this.email = email;
        this.department = department;
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log("customer ".concat(custName, " assisted"));
    };
    return UniversityLibrarian;
}());
// 2.4.3
console.log('2.4.3/');
var favouriteLibrarian = new UniversityLibrarian('LibrarianName', 'livrarian@email.com', 'library.com');
favouriteLibrarian.assistCustomer('Ann');
// 2.5.1 2.7.1
var ReferenceItem = /** @class */ (function () {
    // 2.5.3, 2.5.4
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        this._publisher = '';
    }
    // 2.5.3 2.5.5
    ReferenceItem.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year, " by ").concat(ReferenceItem.department));
    };
    // 2.5.4
    ReferenceItem.prototype.setPublisher = function (newPublisher) {
        this._publisher = newPublisher;
    };
    ReferenceItem.prototype.getPublisher = function () {
        return this._publisher.toUpperCase();
    };
    // 2.7.2
    ReferenceItem.prototype.printCitation = function () {
    };
    // 2.5.5
    ReferenceItem.department = 'defaultDepartment';
    return ReferenceItem;
}());
// 2.5.2 2.7.1
/*
console.log('2.5.2/');
const ref = new ReferenceItem('title1', 2002);
ref.printItem();
*/
// 2.5.4 2.7.1
/*
console.log('2.5.4/');
ref.setPublisher('publisher');
console.log(ref.getPublisher());
*/
// 2.6.1
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    // 2.6.3
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: ".concat(this.edition, ", year: ").concat(this.year));
    };
    // 2.7.3
    Encyclopedia.prototype.printCitation = function () {
        console.log("".concat(this.title, " - ").concat(this.year));
    };
    return Encyclopedia;
}(ReferenceItem));
// 2.6.2
console.log('2.6.2/');
var refBook = new Encyclopedia('title2', 1998, 3);
refBook.printItem();
// 2.7.3
refBook.printCitation();
