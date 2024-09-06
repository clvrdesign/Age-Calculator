import { useState } from 'react';

function App() {
  const [age, setAge] = useState<number | null>(null);  // Age state, allowing null
  const [birthDate, setBirthDate] = useState<string>(''); // Track selected birthdate

  const calculate = () => {
    if (!birthDate) return;

    const birthDateObj = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    const dayDiff = today.getDate() - birthDateObj.getDate();

    // Adjust age if the birthdate hasn't occurred yet this year
    const adjustedAge =
      monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;

    setAge(adjustedAge);
  };

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center bg-slate-950'>
        <div className='text-gray-100 text-2xl'>
          {age !== null ? `Your age is: ${age}` : 'Please select a birthdate'}
        </div>
        <div className='w-[350px]'>
          <input
            type="date"
            className='w-full h-10 bg-slate-900 px-4 outline-none text-slate-100 border border-slate-800 focus:border-slate-700 my-5 rounded-lg'
            onChange={(e) => setBirthDate(e.target.value)} // Set birthdate on input change
          />
          <button
            onClick={calculate}
            className='w-full h-10 bg-sky-500 px-4 outline-none text-slate-100 border-none rounded-lg'
          >
            Calculate Age
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
