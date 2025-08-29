// ...existing code...

import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
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

export type TaskActionModel =
  | StartTaskAction
  | InterruptTaskAction
  | ResetStateAction;

// ...existing code...
