"use client";

import { ChangeEvent, useEffect, useState, useCallback } from "react";
import SideNav from "@/app/components/SideNav";
export default function Settings () {
    // default bank info
    const [bankInfo, setBankInfo] = useState({
        account_name:"",
        account_number:1234567890,
        bank_name:"",
        currency:""
    });

    // bank info from the form entries
    const [inputBankInfo, setInputBankInfo] = useState({
        account_name: "",
        account_number: 1234567890,
        bank_name: "",
        currency: ""
    });

    // add handler to update the form entries state

    const handleUpdateBankInfo = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) => {
            console.log("e value:::"+e);
        const {name, value} = e.target;
        console.log("Destructured data, Name::=> "+name+ " value ::=> "+value)
        setInputBankInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }
    ));
    };

    // update the bank info
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Bank Info updated...")
        console.log("Tried upading bankinfo...")
    };

    return (
        <div className="w-full">
          <main className='min-h-[90vh] flex items-start'>
            <SideNav/>
            
            <div className= 'md:w-5/6 w-full h-full p-6'>
                <h2 className='text-2xl font-bold'>Bank Information</h2>
                <p className="opacity-70 mb-4">
                    You can update your bank account information
                </p>

            <div className='flex md:flex-row flex-col items-start justify-between w-full md:space-x-4'>
                <section className='md:w-1/3 w-full bg-blue-50 h-full p-3 rounded-md space-y-3'>
                    <p className="text-sm opacity-75">
                        Account Name: {bankInfo.account_name}
                    </p>
                    <p className="text-sm opacity-75">
                        Account Number: {bankInfo.account_number}
                    </p>
                    <p className="text-sm opacity-75">
                        Bank Name: {bankInfo.bank_name}
                    </p>
                    <p className="text-sm opacity-75">
                        Currency: {bankInfo.currency}
                    </p>
                </section>


                <form
                    className='md:w-2/3 w-full p-3 flex flex-col'
                    method='POST'
                    onSubmit={handleSubmit}
                >
                    <label htmlFor='accountName' className='text-sm'>
                        Account Name
                    </label>
                    <input
                    type='text'
                    name='accountName'
                    id="accountName"
                    className = "border-[1px] p-2 rounded mb-3"
                    required
                    value={inputBankInfo.account_name}
                    onChange = {e => setInputBankInfo({...inputBankInfo, account_name: e.target.value})}
                    />

                    <label htmlFor='accountNumber' className='text-sm'>
                        Account Number
                    </label>
                    <input
                    type = 'number'
                    name = 'accountNumber'
                    id = 'accountNumber'
                    className = 'border-[1px] p-2 rounded mb-3'
                    required
                    value={inputBankInfo.account_number}
                    onChange={(e) => setInputBankInfo({...inputBankInfo, account_number:Number(e.target.value)})}
                    />

                    <label htmlFor='bankName' className='text-sm'>
                        Bank Name
                    </label>
                    <input
                    type = 'text'
                    name = 'bankName'
                    id = 'bankName'
                    className = 'border-[1px] p-2 rounded mb-3'
                    required
                    value={inputBankInfo.bank_name}
                    onChange={(e) => setInputBankInfo({...inputBankInfo, bank_name: e.target.value})}
                    />

                    <label htmlFor='currency' className='text-sm'>
                        Currency
                    </label>
                    <select
                    name = 'currency'
                    id = 'currency'
                    className = 'border-[1px] p-2 rounded mb-3'
                    required
                    value={inputBankInfo.currency}
                    onChange={(e) => setInputBankInfo({... inputBankInfo, currency:e.target.value})}
                    >
                        <option value=''>Select</option>
                        <option value='$'>USD</option>
                        <option value='€'>EUR</option>
                        <option value='£'>GBP</option>
                 </select>
                 <div className='flex items-center justify-end'>
                    <button
                    type='submit'
                    className='bg-blue-500 text-white p-2 w-[200px] rounded'
                    >
                    Update Bank Info
                    </button>
                   </div>     
                  </form>
            </div>
            </div>
          </main>

        </div>
    );
}