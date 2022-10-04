export interface Person {
  name: string
  age: number
}
export function sayHello (person: Person) {
  console.log(`Hi ${person.name}`)
  if (person.age > 18) {
    console.log('You are adult')
  }
}
export function sayGoodbye () {
  console.log('goodbye')
}
