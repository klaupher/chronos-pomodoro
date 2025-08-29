import { useTaskContext } from '../../hooks/UseTaskContext';
import styles from './styles.module.css';

export function CountDown() {
  const { state } = useTaskContext();
  return <div className={styles.container}>{state.formaterSecondsRemaning}</div>;
}
