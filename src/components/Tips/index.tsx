import React from 'react';
import { useTaskContext } from '../../hooks/UseTaskContext';
import { getNextCycle, getNextCycleType } from '../../utils/bussinessUtils';

export default function Tips() {
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsNoActiveTask = {
    workTime: <span>Próximo ciclo é de {state.config.workTime}min</span>,
    shortBreakTime: (
      <span>Próximo ciclo é de {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: (
      <span>Próximo ciclo é de {state.config.longBreakTime}min</span>
    ),
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsNoActiveTask[nextCycleType]}
    </>
  );
}
