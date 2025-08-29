import type { TaskModel } from '../models/TaskModel';

export function getNextCycle(currentCycle: number) {
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle % 8 === 0) return 'longBreakTime';
  if (currentCycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}
