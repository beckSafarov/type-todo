const myNumber = 1

type SamplePerson = {
  readonly id: number
  name: string
  onHappy: (date: Date) => void
  isMarried?: boolean
}

const person: SamplePerson = {
  id: 1,
  name: '',
  onHappy: (date: Date) => {
    return `happy on ${date.toDateString()}`
  },
}
person.name = 'Begzod'

export default myNumber
