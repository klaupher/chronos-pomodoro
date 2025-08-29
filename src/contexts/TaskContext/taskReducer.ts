import type { TaskStateModel } from '../../models/TaskStateModel';
import { getNextCycle } from '../../utils/bussinessUtils';
import { formatSecondsToMinutes } from '../../utils/commonUtils';
import type { TaskActionModel } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case 'START_TASK': {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;
      return {
        ...state,
        activeTask: newTask,
        secondsRemaining,
        formaterSecondsRemaning: formatSecondsToMinutes(secondsRemaining),
        currentCycle: nextCycle,
        tasks: [...state.tasks, newTask],
      };
    }
    case 'INTERRUPT_TASK': {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formaterSecondsRemaning: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask?.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case 'RESET_STATE': {
      return state;
    }
  }

  return state;
}
