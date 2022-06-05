import { walks, walk, createWalk, updateWalk, deleteWalk } from './walks'
import type { StandardScenario } from './walks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('walks', () => {
  scenario('returns all walks', async (scenario: StandardScenario) => {
    const result = await walks()

    expect(result.length).toEqual(Object.keys(scenario.walk).length)
  })

  scenario('returns a single walk', async (scenario: StandardScenario) => {
    const result = await walk({ id: scenario.walk.one.id })

    expect(result).toEqual(scenario.walk.one)
  })

  scenario('creates a walk', async (scenario: StandardScenario) => {
    const result = await createWalk({
      input: {
        dogId: scenario.walk.two.dogId,
        userId: scenario.walk.two.userId,
        time: 'String',
        lengthMinutes: 19098,
        didPoop: true,
        didPee: true,
        numJumps: 8977952,
        numMouthings: 5326963,
        dogsSeen: 7431623,
        dogsSeenReacted: 1275447,
      },
    })

    expect(result.dogId).toEqual(scenario.walk.two.dogId)
    expect(result.userId).toEqual(scenario.walk.two.userId)
    expect(result.time).toEqual('String')
    expect(result.lengthMinutes).toEqual(19098)
    expect(result.didPoop).toEqual(true)
    expect(result.didPee).toEqual(true)
    expect(result.numJumps).toEqual(8977952)
    expect(result.numMouthings).toEqual(5326963)
    expect(result.dogsSeen).toEqual(7431623)
    expect(result.dogsSeenReacted).toEqual(1275447)
  })

  scenario('updates a walk', async (scenario: StandardScenario) => {
    const original = await walk({ id: scenario.walk.one.id })
    const result = await updateWalk({
      id: original.id,
      input: { time: 'String2' },
    })

    expect(result.time).toEqual('String2')
  })

  scenario('deletes a walk', async (scenario: StandardScenario) => {
    const original = await deleteWalk({ id: scenario.walk.one.id })
    const result = await walk({ id: original.id })

    expect(result).toEqual(null)
  })
})
