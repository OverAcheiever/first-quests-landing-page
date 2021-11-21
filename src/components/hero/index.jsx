import CTAs from "./ctas";
import Header from "../header";
export default function Hero() {
  return (
    <div className="w-screen bg-black">
      <Header />

      <div className="w-full flex items-center justify-center bg-black">
        <div
          style={{ maxWidth: "80rem" }}
          className="w-full text-white flex gap-y-10 lg:gap-y-0 flex-col-reverse items-center pt-5 lg:flex-row justify-around"
        >
          <div className="px-5 lg:flex flex-col gap-6 md:flex items-center">
            <h1 className="text-2xl md:text-3xl mb-2 clearsans-bold md:px-44 ">
              First Steps into Web3 <br className="hidden lg:block" /> and
              Financial Independence.
            </h1>
            <p className="text-xl md:text-xl clearsans-thin">
              First Quests sets you on your greater Web3,
              <br /> Defi, and crypto adventure and will onboard
              <br /> you into the bankless Dao.
            </p>
          </div>
          <div>
            <img
              className=""
              src="https://cdn.discordapp.com/attachments/910172830203785256/910173481688268860/Bankless_First_Quest_POAP.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <CTAs />

      <div className="w-full bg-black flex justify-center">
        <div
          style={{ maxWidth: "81rem" }}
          className="w-full h-max bg-black flex flex-col items-center justify-between gap-y-0 p-4 md:flex-row xl:p-32 xl:py-12 xl:pt-20 xl:mx-16"
        >
          <div className="md:p-10 md:pr-0 text-white flex flex-col gap-4">
            <h1 className="text-2xl clearsans-bold lg:text-3xl">
              Bankless DAO
            </h1>
            <p className="text-md lg:text-lg clearsans-regular">
              is the premier educational leader for welcoming <br /> the
              uninitiated into the Defi fold.
            </p>
          </div>
          <div className="flex flex-row gap-x-2 items-center justify-center">
            <img
              src="https://cdn.discordapp.com/attachments/910172830203785256/910173349655748709/Header_DAO_Logo.png"
              alt=""
            />
            <h1 className="text-white text-3xl clearsans-bold">by</h1>
            <img
              className="w-2/4"
              src="https://cdn.discordapp.com/attachments/910172830203785256/910173347608932372/Header_Bankless_Logo2x.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
