// Коментарями позначено номер завдання

import * as lab1 from '../lab1/lab1';

// 2.1.3
function getWorkerByID(id: number): lab1.MyWorker | undefined{
    return lab1.allWorkers.find((worker) => (worker.id === id));
}
let worker2 = getWorkerByID(2);

// 2.1.4
function printWorker(worker: lab1.MyWorker){
    console.log(worker.Name + worker.surname + 'got salary' + worker.salary);
}
console.log('2.1.4/');
if (worker2){
    printWorker(worker2);
}

// 2.2.1
export interface PrizeLogger{
    (prize: string): void
}

// 2.2.3
export const logPrize: PrizeLogger = function(prize: string){
    console.log(prize);
}

// 2.3.1
interface Person{
    name: string,
    email: string
}

// 2.3.2
interface Author extends Person{
    numBooksPublished: number;
}

// 2.3.3
interface Librarian extends Person {
    department: string,
    assistCustomer: (custName: string) => void
}

// 2.3.4
const favouriteAuthor: Author = {
    name: 'AuthorName',
    email: 'author@email.com',
    numBooksPublished: 0
}
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
class UniversityLibrarian implements Librarian{
    name: string;
    email: string;
    department: string;

    constructor(name: string, email: string, department: string) {
        this.name = name;
        this. email = email;
        this.department = department;
    }

    assistCustomer(custName: string){
        console.log(`customer ${custName} assisted`);
    }
}

// 2.4.3
console.log('2.4.3/');
const favouriteLibrarian: Librarian = new UniversityLibrarian('LibrarianName', 'livrarian@email.com', 'library.com');
favouriteLibrarian.assistCustomer('Ann');

// 2.5.1 2.7.1
abstract class ReferenceItem{
    // 2.5.3
    /*
    title: string;
    year: number;

    constructor(newTitle: string, newYear: number){
        console.log('Creating a new ReferenceItem');
        this.title = newTitle;
        this.year = newYear;
    }
    */

    // 2.5.4
    private _publisher: string;

    // 2.5.5
    static department = 'defaultDepartment';

    // 2.5.3, 2.5.4
    constructor(public title: string, protected year: number){
        this._publisher = '';
    }

    // 2.5.3 2.5.5
    printItem(){
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
    }

    // 2.5.4
    setPublisher(newPublisher: string){
        this._publisher = newPublisher;
    }

    getPublisher(): string{
        return this._publisher.toUpperCase();
    }

    // 2.7.2
    printCitation(): void{

    }
}

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
class Encyclopedia extends ReferenceItem{
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    // 2.6.3
    printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition}, year: ${this.year}`)
    }

    // 2.7.3
    printCitation() {
        console.log(`${this.title} - ${this.year}`)
    }
}

// 2.6.2
console.log('2.6.2/');
const refBook = new Encyclopedia('title2', 1998, 3);
refBook.printItem();

// 2.7.3
console.log('2.7.3/')
refBook.printCitation();