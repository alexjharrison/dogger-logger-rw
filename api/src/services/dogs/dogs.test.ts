import { dogs, dog, createDog, updateDog, deleteDog } from './dogs'
import type { StandardScenario } from './dogs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('dogs', () => {
  scenario('returns all dogs', async (scenario: StandardScenario) => {
    const result = await dogs()

    expect(result.length).toEqual(Object.keys(scenario.dog).length)
  })

  scenario('returns a single dog', async (scenario: StandardScenario) => {
    const result = await dog({ id: scenario.dog.one.id })

    expect(result).toEqual(scenario.dog.one)
  })

  scenario('creates a dog', async () => {
    const result = await createDog({
      input: { name: 'String', gender: 'MALE' },
    })

    expect(result.name).toEqual('String')
    expect(result.gender).toEqual('MALE')
  })

  scenario('updates a dog', async (scenario: StandardScenario) => {
    const original = await dog({ id: scenario.dog.one.id })
    const result = await updateDog({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a dog', async (scenario: StandardScenario) => {
    const original = await deleteDog({ id: scenario.dog.one.id })
    const result = await dog({ id: original.id })

    expect(result).toEqual(null)
  })
})
