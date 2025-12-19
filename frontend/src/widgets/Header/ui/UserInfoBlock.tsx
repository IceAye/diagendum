type UserInfoBlockProps = {
  firstName: string;
  lastName: string;
  email: string;
};

export const UserInfoBlock = ({ firstName, lastName, email }: UserInfoBlockProps) => {
  return (
    <div className='px-2 py-2 border-b border-gray-200 mb-2'>
      <p className='text-sm font-semibold'>
        {firstName} {lastName}
      </p>
      <p className='text-xs text-gray-500'>{email}</p>
    </div>
  );
};
