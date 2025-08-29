import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import React, { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../hooks/UseTaskContext';
import { formatSecondsToMinutes } from '../../utils/commonUtils';
import { getNextCycle, getNextCycleType } from '../../utils/bussinessUtils';

export function MainForm() {
  const { state, setState } = useTaskContext();
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
    const secondsRemaining = newTask.duration * 60;
    setState(prevState => ({
      ...prevState,
      config: { ...prevState.config },
      activeTask: newTask,
      currentCycle: nextCycle, //conferir depois
      secondsRemaining,
      formaterSecondsRemaning: formatSecondsToMinutes(secondsRemaining),
      tasks: [...prevState.tasks, newTask],
    }));
  };

  const handleInterruptTask = () => {
    setState(prevState => ({
      ...prevState,
      config: { ...prevState.config },
      activeTask: null,
      secondsRemaining: 0,
      formaterSecondsRemaning: '00:00',
      tasks: prevState.tasks.map(task => {
        if (prevState.activeTask?.id === task.id) {
          return { ...task, interruptDate: Date.now() };
        }
        return task;
      }),
    }));
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
