export class Dog {
    private _name: string
    constructor(name: string) {
        this._name = name
    }
    get name() {
        return this._name
    }

    bark(): string {
        return 'bow!'
    }

    barkAllow = (): string => {
        return 'bow!'
    }

    eat = (): Promise<string> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('eat!')
            }, 100)
        })
    }

    drink = async () => {
        return 'drink!'
    }

    feel() {
        console.log('feel')
    }
}