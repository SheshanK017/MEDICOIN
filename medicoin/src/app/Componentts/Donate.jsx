// pages/donate.js
import Head from 'next/head';
import Link from 'next/link'; // Import Link component for navigation
import { useState } from 'react';

const Donate = () => {
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { currency, amount, username });
  };

  return (
    <>
      <Head>
        <title>Donate - MEDICOIN</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center gap-10">
        <div className="text-5xl font-bold font-shes text-blueSecondary hover:text-rishabh">MEDICOIN</div>
        <div className="max-w-xl w-full bg-[white]/10 p-10 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-blueSecondary font-abc">HELP FOR THE HEALTH</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="currency" className="block font-semibold mb-2 text-blueSecondary">Currency:</label>
              <select id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="amount" className="block font-semibold mb-2  text-blueSecondary">Amount to donate:</label>
              <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="username" className="block font-semibold mb-2  text-blueSecondary">Username:</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <Link href="/CW20">=
            <button className="bg-none text-blueSecondary border border-blueSecondary px-4 py-2 rounded-2xl hover:bg-blue hover:text-rishabh hover:border-rishabh transition duration-300  font-bold font-aldrich text-xl ml-44"  >DONATE</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Donate;
