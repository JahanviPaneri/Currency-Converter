// import React, {useId} from 'react';

// const InputBox =({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     selectedCurrency = "usd",
//     amountDisabled = false,
//     currrencyDisabled = false,
//     className = "",
// }) => {

//     const id = useId()
//   return (
//     <div className={`bg-white p-3 rounded-lg text-black text-sm flex ${className}`}>
//         <div className='w-1-2'>
//             <label htmlFor={id}  className='text-black/40 mb-2 inline-block'>{label}</label>
//             <input 
//             id={id}
//             type="number"
//             className='outline-none w-full bg-transparent py-1.5'
//             placeholder='Amount'
//             disabled={amountDisabled}
//             value={amount}
//             onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
//              />
//         </div>
//         <div className='w-1/2 flex flex-wrap justify-end text-right'>
//         <p className="text-black/40 mb-2 w-full">Currency Type</p>
//         <select 
//         className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
//         value={selectedCurrency}
//         onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
//         disabled={currrencyDisabled}
//         >
//             {currencyOptions.map((currency) => (
//                 <option key={currency} value={currency}>{currency}</option>
//             ))}
//         </select>
//         </div>
//     </div>
//   );
// }

// export default InputBox;




import React, { useId } from 'react';

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'usd',
  amountDisabled = false,
  currencyDisabled = false,
  className = '',
}) => {
  const id = useId();

  return (
    <div className={`bg-white p-4 rounded-lg text-black text-sm flex ${className}`}>
      <div className='w-1/2 pr-2'>
        <label htmlFor={id} className='text-gray-500 block'>{label}</label>
        <input
          id={id}
          type="number"
          className='outline-none w-full bg-transparent py-2.5 border border-gray-300 rounded-md focus:border-blue-500'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='w-1/2 pl-2 flex flex-wrap items-end'>
        <label htmlFor={`${id}-currency`} className='text-gray-500 w-full'>Currency Type</label>
        <select
          id={`${id}-currency`}
          className='rounded-md px-2 py-2 bg-gray-100 cursor-pointer outline-none border border-gray-300'
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;

