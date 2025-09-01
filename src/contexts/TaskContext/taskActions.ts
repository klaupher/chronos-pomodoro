// ...existing code...

import type { TaskModel } from '../../models/TaskModel';
import type { TaskStateModel } from '../../models/TaskStateModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
}

export interface StartTaskAction {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel;
}

export interface InterruptTaskAction {
  type: TaskActionTypes.INTERRUPT_TASK;
}

export interface ResetStateAction {
  type: TaskActionTypes.RESET_STATE;
}
export interface CountDownAction {
  type: TaskActionTypes.COUNT_DOWN;
  payload: Pick<TaskStateModel, 'secondsRemaining'>;
}
export interface CompleteTaskAction {
  type: TaskActionTypes.COMPLETE_TASK;
}

export type TaskActionModel =
  | StartTaskAction
  | CountDownAction
  | ResetStateAction
  | InterruptTaskAction
  | CompleteTaskAction;

// ...existing code...
