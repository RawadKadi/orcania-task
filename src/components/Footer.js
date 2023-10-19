import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-gray-100 p-8 mt-20">
      <div className="flex justify-between items-start mb-4 flex-wrap">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">⚡pwr chain</h1>
        </div>
        <div className="flex flex-col items-center mt-4">
          <label className="mb-2" htmlFor="email">
            Join our newsletter
          </label>
          <div className="flex items-center">
            <input
              className="p-2 rounded border"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex space-x-4 mb-4 flex-wrap justify-center md:justify-start">
        
        <Link href="/explore" passHref><button>Explore</button></Link>
        <Link href="/transactions" passHref><button>Transactions</button></Link>
        <Link href="/nodes" passHref><button>Nodes</button></Link>
        <Link href="/pwr-wallet" passHref><button>PWR Wallet</button></Link>
      </div>
      {/* Social Links */}
      <div className="flex space-x-4 mb-4">
        <Link href="https://twitter.com" passHref>
          <button className="bg-black text-white p-2 rounded">Join our Twitter</button>
        </Link>
        <Link href="https://telegram.org" passHref>
          <button className="bg-black text-white p-2 rounded">Join our Telegram</button>
        </Link>
        <Link href="https://discord.com" passHref>
          <button className="bg-black text-white p-2 rounded">Join our Discord</button>
        </Link>
      </div>
      {/* Copyright */}
      <div className="flex justify-between items-center text-gray-600">
        <div>©WOM Protocol Pte. Ltd. All Rights reserved</div>
        <div className="flex space-x-4 mt-4">
          <Link href="/terms" passHref>
            <button>Terms</button>
          </Link>
          <Link href="/privacy" passHref>
            <button>Privacy</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;