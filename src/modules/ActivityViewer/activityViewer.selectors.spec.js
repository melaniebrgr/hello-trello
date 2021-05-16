import { selectTasksByListId } from './activityViewer.selectors'

describe(selectTasksByListId, () => {
  test('removes tasks not matching the task ID from the list', () => {
    const tasks = [{ listId: 1, id: 1 }, { listId: 2, id: 2 }]
    const listId = 1
    const result = selectTasksByListId.resultFunc(tasks, listId)
    expect(result).toHaveLength(1)
    expect(result[0].listId).toBe(listId)
  })
});