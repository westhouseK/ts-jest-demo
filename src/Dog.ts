export class Dog {
    private _name: string
    constructor(name: string) {
        this._name = name
    }
    get name() {
        return this._name
    }

    bark(): string {
        return 'one!'
    }

    test() {
        console.log('test')
    }
}