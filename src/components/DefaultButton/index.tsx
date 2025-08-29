import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>; //intersection props - &

export function DefaultButton({ icon, color = 'green', ...props }: DefaultButtonProps) {
  return (
    <>
      <button {...props} className={`${styles.button} ${styles[color]}`}>
        {icon}
      </button>
    </>
  );
}
