import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import React, { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../hooks/UseTaskContext';
import { getNextCycle, getNextCycleType } from '../../utils/bussinessUtils';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const handleCreateTask = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value?.trim();
    if (taskName === '') {
      alert('Digite o nome da tarefa');
      return;
    }
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };
    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  };

  const handleInterruptTask = () => {
    dispatch({
      type: TaskActionTypes.INTERRUPT_TASK,
    });
  };

  return (
    <form action='' className='form' onSubmit={handleCreateTask}>
      <div className='formRow'>
        <DefaultInput
          ref={taskNameInput}
          type='text'
          id='meuInput'
          placeholder='Digite algo'
          disabled={!!state.activeTask}
        />
      </div>
      <div className='formRow'>
        <p>Próximo intervalo é de 25 minutos.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        {!state.activeTask ? (
          <DefaultButton
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            key='btnStartTask'
          />
        ) : (
          <DefaultButton
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            type='button'
            color='red'
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key='btnInterruptTask'
          />
        )}
      </div>
    </form>
  );
}
