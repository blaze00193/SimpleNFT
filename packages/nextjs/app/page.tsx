import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5 w-[90%] md:w-[75%]">
        <h1 className="text-center mb-6">
          <span className="block text-2xl mb-2">SpeedRunEthereum</span>
          <span className="block text-4xl font-bold">Simple NFT</span>
        </h1>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/nft.jpeg"
            width="727"
            height="231"
            alt="challenge banner"
            className="rounded-xl border-4 border-primary"
          />
          <div className="max-w-3xl">
            <p className="text-center text-lg mt-8">
              A simple NFT to learn basics of 🏗️ Scaffold-ETH 2. The smart contract was deployed using 👷‍♀️
              <a href="https://hardhat.org/getting-started/" target="_blank" rel="noreferrer" className="underline">
                HardHat
              </a>{" "}.
            </p>
            <p className="text-center text-lg">
              🌟 The final deliverable is an app that lets users purchase and transfer NFTs. The contracts is deployed to Sepolia
              testnet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
