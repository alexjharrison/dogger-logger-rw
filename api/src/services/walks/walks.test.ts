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
        walkerId: scenario.walk.two.walkerId,
        time: '2022-06-05T20:13:10Z',
        lengthMinutes: 4713761,
        didPoop: true,
        didPee: true,
        numJumps: 863305,
        numMouthings: 6659919,
        dogsSeen: 8266568,
        dogsSeenReacted: 6395835,
      },
    })

    expect(result.dogId).toEqual(scenario.walk.two.dogId)
    expect(result.walkerId).toEqual(scenario.walk.two.walkerId)
    expect(result.time).toEqual('2022-06-05T20:13:10Z')
    expect(result.lengthMinutes).toEqual(4713761)
    expect(result.didPoop).toEqual(true)
    expect(result.didPee).toEqual(true)
    expect(result.numJumps).toEqual(863305)
    expect(result.numMouthings).toEqual(6659919)
    expect(result.dogsSeen).toEqual(8266568)
    expect(result.dogsSeenReacted).toEqual(6395835)
  })

  scenario('updates a walk', async (scenario: StandardScenario) => {
    const original = await walk({ id: scenario.walk.one.id })
    const result = await updateWalk({
      id: original.id,
      input: { time: '2022-06-06T20:13:10Z' },
    })

    expect(result.time).toEqual('2022-06-06T20:13:10Z')
  })

  scenario('deletes a walk', async (scenario: StandardScenario) => {
    const original = await deleteWalk({ id: scenario.walk.one.id })
    const result = await walk({ id: original.id })

    expect(result).toEqual(null)
  })
})
