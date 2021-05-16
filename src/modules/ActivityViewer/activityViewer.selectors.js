import * as R from 'ramda';
import { createSelector } from 'reselect';

export const selectLists = R.prop('lists')

const selectTasks = R.prop('tasks')

export const selectTasksByListId = createSelector(
  selectTasks,
  (_, listId) => listId,
  (tasks, listId) => R.filter(task => task.listId === listId, tasks)
)