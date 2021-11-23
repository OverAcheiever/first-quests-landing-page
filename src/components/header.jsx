export default function Header() {
  return (
    <div>
      <header className=" p-6 flex xl:px-24 h-40 bg-black w-full flex items-center justify-between">
        <div className=" h-24 flex gap-4">
          <img
            src="https://cdn.discordapp.com/attachments/910172830203785256/910173349655748709/Header_DAO_Logo.png"
            alt=""
          />

          <img
            className="hidden md:block"
            src="https://cdn.discordapp.com/attachments/910172830203785256/910173347608932372/Header_Bankless_Logo2x.png"
            alt=""
          />
        </div>

        <div className="lg:hidden">
          <button
            style={{ border: "1px solid #FFF" }}
            className="text-white rounded-full px-3 py-1 border-white bg-black "
          >
            Connect Wallet
          </button>
        </div>

        <div className="flex gap-6 hidden lg:inline-flex">
          <button
            style={{ border: "1px solid #FFF" }}
            className="text-white rounded-full px-3 py-1 border-white bg-black "
          >
            Connect Wallet
          </button>
          <a href="/" target="_blank">
            <img
              src="https://cdn.discordapp.com/attachments/910172830203785256/910173393213591552/Header_Medium_Logo.png"
              alt=""
            />
          </a>
          <a href="/" target="_blank">
            <img
              src="https://cdn.discordapp.com/attachments/910172830203785256/910173354315624468/Header_Discord_Logo.png"
              alt=""
            />
          </a>
          <a href="/" target="_blank">
            <img
              src="https://cdn.discordapp.com/attachments/910172830203785256/910173399702204416/Header_Twitter_Logo.png"
              alt=""
            />
          </a>
          <a href="/" target="_blank">
            <img
              src="https://cdn.discordapp.com/attachments/910172830203785256/910179667888181328/unknown.png"
              alt=""
            />
          </a>
        </div>
      </header>
    </div>
  );
}
