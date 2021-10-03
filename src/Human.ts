export class Human {

  constructor(private name: string) {}

  get getName() {
    return `My name is ${this.name}`;
  }  
}