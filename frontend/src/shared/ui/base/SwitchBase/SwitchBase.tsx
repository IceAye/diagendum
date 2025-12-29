import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';

export const SwitchBase = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='flex items-center'>
      <label className='pr-[15px] text-[15px] leading-none text-black' htmlFor='change-mode'>
        dark mode
      </label>
      <Switch.Root
        checked={checked}
        onCheckedChange={setChecked}
        className='self-center p-0 border-none relative h-[25px] w-[42px] cursor-default rounded-full bg-blackA6 shadow-[0_2px_10px] shadow-blackA4 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black'
        id='change-mode'
        style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
        asChild
      >
        <div>
          <Switch.Thumb className='block size-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]' />
        </div>
      </Switch.Root>
    </div>
  );
};