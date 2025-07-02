import React from "react";
import { Link } from "react-router";

const CryptoSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl rounded-xl p-10 bg-base-300  " >
        {/* Text Content */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">World's Marathons</h1>
          <h2 className="text-3xl font-semibold mb-2">OUR ONLINE SHOP</h2>
          <h2 className="text-3xl font-semibold text-black">
            SUPPORTS PAYMENTS WITH
          </h2>
          <h2 className="text-3xl font-semibold text-black">
            CRYPTOCURRENCIES
          </h2>
          <p className="text-gray-600 mt-4">
            Seamless checkout for runners worldwide — now accepting secure
            cryptocurrency payments for all your marathon essentials.
          </p>
          <Link to="https://www.worldmarathonmajors.com/">
            <button className="btn bg-blue-500 text-white cursor-pointer mt-6">Pay</button>
          </Link>
        </div>

        {/* Crypto Icons Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/p6bk2yMx/Kanchanara-Finance-Feeds-bitcoin-poster-1000x665.jpg"
              alt="Bitcoin"
              className="w-16 h-16"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/k2Rb3dJH/Coin-Smart-ethereum-2022-scaled.webp"
              alt="Ethereum"
              className="w-16 h-16"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/p6bk2yMx/Kanchanara-Finance-Feeds-bitcoin-poster-1000x665.jpg"
              alt="Monero"
              className="w-16 h-16"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/p6bk2yMx/Kanchanara-Finance-Feeds-bitcoin-poster-1000x665.jpg"
              alt="Tezos"
              className="w-16 h-16"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/hjq1Cs6/6771df4f0cc26c0b8fcbb95b-dogecoin-crypto-loan.webp"
              alt="Dogecoin"
              className="w-16 h-16"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/p6bk2yMx/Kanchanara-Finance-Feeds-bitcoin-poster-1000x665.jpg"
              alt="Cardano"
              className="w-16 h-16"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/k2Rb3dJH/Coin-Smart-ethereum-2022-scaled.webp"
              alt="Litecoin"
              className="w-16 h-16"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/hjq1Cs6/6771df4f0cc26c0b8fcbb95b-dogecoin-crypto-loan.webp"
              alt="Binance Coin"
              className="w-16 h-16"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/p6bk2yMx/Kanchanara-Finance-Feeds-bitcoin-poster-1000x665.jpg"
              alt="Aave"
              className="w-16 h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoSection;
