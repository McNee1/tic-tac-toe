interface ToggleProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
}

export const Toggle = ({ checked, onChange, text }: ToggleProps) => {
  return (
    <label className='relative inline-flex cursor-pointer items-center'>
      <input
        checked={checked}
        className='peer sr-only'
        onChange={onChange}
        type='checkbox'
      />
      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-2 peer-focus:ring-green-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-green-800"></div>
      <span className='ml-3 text-sm font-medium text-gray-900 dark:text-white'>
        {text}
      </span>
    </label>
  );
};
