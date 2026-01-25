'use client';
import { useTranslations } from 'next-intl';
import { Heart, CreditCard, Building2, Bitcoin, ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';

export default function DonatePage() {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const cryptoAddresses = [
    { 
      name: 'Ethereum (ETH)', 
      address: '0x54b9694cebc596d8c712ab225347343e2a7bd7e6',
      icon: '⟠'
    },
    { 
      name: 'Bitcoin (BTC)', 
      address: '3BuBreK55MS2fF9MfzMTXL4cG6GQDot3aD',
      icon: '₿'
    },
    { 
      name: 'USD Coin (USDC - Ethereum)', 
      address: '0x54b9694cebc596d8c712ab225347343e2a7bd7e6',
      icon: '$'
    },
    { 
      name: 'Other (MetaMask) Wallet', 
      address: '0x66e4cFE637e73A4C5F34fdf6539c849c3366a0AB',
      icon: '🦊'
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-brand-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-6 animate-pulse">
            <Heart className="w-full h-full text-brand-600" fill="currentColor" />
          </div>
          <h1 className="text-6xl font-bold text-neutral-900 mb-6">
            Donate Now
          </h1>
          <p className="text-2xl text-neutral-600 max-w-3xl mx-auto">
            Your support transforms lives. Every donation helps us fulfill dreams and provide hope to cancer warriors.
          </p>
        </div>
      </section>

      {/* Better Giving Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6 text-center">
              Donate via Better Giving
            </h2>
            <div className="bg-gradient-to-br from-white to-brand-50 rounded-2xl p-8 border-2 border-brand-200 hover:shadow-2xl transition-all">
              <p className="text-lg text-neutral-600 mb-6">
                Through <a href="https://better.giving/donate/1293778" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-semibold hover:underline">Better Giving</a>, you can donate with zero platform fees. You can choose from multiple options such as <strong>crypto, DAFs, stocks</strong>, and more. This ensures that more of your donation goes directly toward supporting our mission.
              </p>
              <div className="flex items-center gap-4 mb-6 p-4 bg-blue-50 rounded-xl">
                <div className="w-16 h-16 flex-shrink-0">
                  <img src="public/logo.png" alt="Better Giving" className="w-full h-full rounded-lg" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Tutti Cancer Warriors</div>
                  <div className="text-sm text-neutral-600">Born to Thrive</div>
                </div>
              </div>
              <a
                href="https://better.giving/donate/1293778"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-10 py-5 bg-gradient-to-r from-brand-600 to-purple-600 text-white text-center font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Donate with Better Giving →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PayPal Section */}
      <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6 text-center">
              PayPal
            </h2>
            <div className="bg-white rounded-2xl p-8 border-2 border-yellow-200 hover:shadow-2xl transition-all">
              <p className="text-lg text-neutral-600 mb-6 text-center">
                Use PayPal for a quick and secure donation. No matter the amount, your contribution makes a real difference.
              </p>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=6JXEDTNATW3PS"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-10 py-5 bg-[#FFC439] hover:bg-[#FFB700] text-neutral-900 text-center font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72c.074-.428.456-.72.847-.72h8.646c2.916 0 4.973 1.299 5.338 3.867.198 1.415-.047 2.589-.681 3.463-.785 1.091-2.135 1.64-3.968 1.64h-2.516a.793.793 0 0 0-.784.68l-.924 5.395-.031.18a.44.44 0 0 1-.433.378z"/>
                </svg>
                Donate with PayPal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6 text-center">
              Bank Transfer
            </h2>
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                  <h3 className="text-lg font-bold text-neutral-900 mb-4">IBAN</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <div className="text-sm font-semibold text-blue-600">USD Account</div>
                        <div className="text-neutral-900 font-mono">RO36BTRLUS DCRT OCS5281601</div>
                      </div>
                      <button
                        onClick={() => copyToClipboard('RO36BTRLUSDCRTOCS5281601', 'usd')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {copied === 'usd' ? <Check className="w-5 h-5" /> : 'Copy'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <div className="text-sm font-semibold text-blue-600">EUR Account</div>
                        <div className="text-neutral-900 font-mono">RO24BTRLEURCRTOCS5281601</div>
                      </div>
                      <button
                        onClick={() => copyToClipboard('RO24BTRLEURCRTOCS5281601', 'eur')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {copied === 'eur' ? <Check className="w-5 h-5" /> : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-neutral-900 mb-4">SWIFT Code</h3>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="text-neutral-900 font-mono text-lg">BTRLRO22</div>
                    <button
                      onClick={() => copyToClipboard('BTRLRO22', 'swift')}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {copied === 'swift' ? <Check className="w-5 h-5" /> : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Section - ANIMATED */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-brand-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6 text-center">
              Crypto Donations
            </h2>
            <div className="mb-6 text-center">
              <img 
                src="https://tutticancerwarriors.org/wp-content/uploads/2025/03/chatgpt-image-oct-7-2025-09_59_32-am.png" 
                alt="Verified Nonprofit on Kraken" 
                className="w-32 h-32 mx-auto rounded-full"
              />
              <p className="text-sm text-neutral-600 mt-2">Verified Nonprofit on Kraken</p>
            </div>
            <div className="space-y-4">
              {cryptoAddresses.map((crypto, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-purple-100 hover:border-purple-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-brand-600 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {crypto.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900">{crypto.name}</h3>
                        <div className="text-sm text-neutral-600 font-mono break-all">{crypto.address}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(crypto.address, crypto.name)}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex-shrink-0"
                    >
                      {copied === crypto.name ? <Check className="w-5 h-5" /> : 'Copy'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6 animate-pulse">
            Thank You! 💜
          </h2>
          <p className="text-2xl text-white/90 max-w-2xl mx-auto">
            Your generosity brings hope and makes dreams come true for warriors fighting cancer every day.
          </p>
        </div>
      </section>
    </div>
  );
}