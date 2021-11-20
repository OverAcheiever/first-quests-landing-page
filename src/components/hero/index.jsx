import CTAs from "./ctas";

export default function Hero() {
  return (
    <div>
      <div className="w-full flex items-center justify-center bg-black">
        <div
          style={{ maxWidth: "80rem" }}
          className="w-full text-white flex flex-col-reverse items-center pt-5 lg:flex-row justify-around"
        >
          <div className="p-4 lg:flex flex-col gap-6">
            <h1 className="text-2xl xl:text-3xl mb-2 clearsans-bold">
              First Steps into Web3 and
              <br /> Financial Independence.
            </h1>
            <p className="text-md md:text-xl clearsans-thin">
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

      <div className="bg-black">
        <div className="w-max h-max bg-black flex flex-col items-center justify-between gap-y-0 p-4 md:flex-row xl:p-32 xl:py-12 xl:pt-20 xl:mx-16">
          <div className="md:p-10 text-white flex flex-col gap-4">
            <h1 className="text-xl clearsans-bold lg:text-3xl">Bankless DAO</h1>
            <p className="text-md lg:text-lg clearsans-regular">
              is the premier educational leader for welcoming <br /> the
              uninitiated into the Defi fold.
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center">
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
