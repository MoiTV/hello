// /* Unit Testing: It Test Challenge
//  *
//  *   1. Write a unit test for lastName and middleName to test its default values.
//  *   2. Group all 3 unit tests with an appropriate describe.
//  */

// class User {
//     firstName;
//     lastName;
//     middleName;

//     constructor(data = {}) {
//         this.firstName = data.firstName || '';
//         this.lastName = data.lastName || '';
//         this.middleName = data.middleName || '';
//     }

//     get fullName() {
//         if (this.middleName.length > 0) {
//             return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
//         }

//         return `${this.firstName} ${this.lastName}`;
//     }

//     sayMyName() {
//         return window.alert(this.fullName);
//     }

//     getCodeName() {
//         const isATestingGod = confirm('Are you a testing god?');

//         if (isATestingGod) {
//             return 'TESTING GOD!';
//         } else {
//             return `Scrub skipping tests in his best friend's ride!`;
//         }
//     }
// }

// // "I understand the value testing brings and will help to educate those about it."
// // - Moises T. Valdez

// /*  Unit Testing: Spies Challenge
//  *
//  *   1. Use a spy and test the method getCodeName() fully
//  *   2. You will need to use spyOn and toHaveBeenCalledWith()
//  *   3. HINT: you will need to chain the spy
//  *    example: spyOn(object, 'key').and.returnValue(value)
//  */

// describe('get code name', () => {
//     let model;

//     beforeEach(() => {
//         model = new User();
//     });

//     it('is a testing god when confirmed', () => {
//         // arrange - setting up the data
//         spyOn(window, 'confirm').and.returnValue(true);
//         // act - getting the result
//         const result = model.getCodeName();
//         // assert - writing what were expecting
//         expect(result).toBe('TESTING GOD!');
//     });

//     it('is a scrub when skipping test', () => {
//         // arrange - setting up the data
//         spyOn(window, 'confirm').and.returnValue(false);
//         // act - getting the result
//         const result = model.getCodeName();
//         // assert - writing what were expecting
//         expect(result).toBe(`Scrub skipping tests in his best friend's ride!`);
//     });

//     it('asks a user if they are a testing god', () => {
//         // arrange
//         spyOn(window, 'confirm').and.returnValue(true);

//         // act
//         const result = model.getCodeName();

//         // assert
//         expect(window.confirm).toHaveBeenCalledWith('Are you a testing god?');
//     });
// });

class UserService {
    getUserById(id) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    }
}
class User {
    firstName;
    lastName;
    middleName;

    constructor(data = {}) {
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middleName = data.middleName || '';
    }

    get fullName() {
        if (this.middleName.length > 0) {
            return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
        }

        return `${this.firstName} ${this.lastName}`;
    }
}

//  Unit Testing: Mocks

// Test Suite
describe(`${User.name} Class`, () => {
    let model;

    beforeEach(() => {
        model = new User();c
    });

    it('has first name', () => {
        // arrange
        const firstName = 'Dylan';
        const lastName = 'Israel';

        // act
        model = new User({ firstName, lastName });

        // assert
        expect(model.fullName).toMatch(/D/);
    });
});