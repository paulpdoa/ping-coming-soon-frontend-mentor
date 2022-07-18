import { useState } from 'react';

const Input = () => {

    const [isEmail,setIsEmail] = useState(true);
    const [email,setEmail] = useState(''); 

    const notifyMe = (e) => {
      e.preventDefault();
      setIsEmail(true);
      if(isEmail) {
        alert(`You will be notified at ${email}. Thank you!`);
      }  
    }

  return (
    <form onSubmit={notifyMe} className="flex md:flex-row flex-col gap-2 w-full justify-center items-center md:items-stretch mt-7">
        <div className="flex flex-col md:w-[25%] w-[80%] relative">
            <input onInvalid={() => setIsEmail(false)} value={email} onChange={(e) => setEmail(e.target.value)} className={`outline-none rounded-full ${isEmail ? 'border-gray-300' : 'border-red-500'} border md:p-4 p-3 w-full placeholder:text-sm placeholder:text-gray-300 text-sm`} type="email" placeholder="Your email address..." />
            { !isEmail ? <span className="text-xs text-red-500 italic absolute -bottom-5 left-5">Please provide a valid email address</span> : '' }
        </div>
        <button className="notify-hover blue-bg p-2 rounded-full md:w-[13%] w-[80%] text-white text-sm font-semibold">Notify Me</button>
    </form>
  )
}

export default Input