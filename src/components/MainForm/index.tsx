import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
    <form action='' className='form'>
      <div className='formRow'>
        <DefaultInput type='text' id='meuInput' placeholder='Digite algo' />
      </div>
      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
