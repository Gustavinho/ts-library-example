import { Person } from '@lib/Person'

export function sayHello (person: Person): void {
  console.log(`Hi ${person.name}`)
  if (person.age > 18) {
    console.log('You are adult')
  }
}
export function sayGoodbye (): void {
  console.log('goodbye')
}
