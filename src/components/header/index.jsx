export default function Header() {
  return (
    <div>
      <header className="h-40 bg-black w-full flex items-center justify-between">
        <div className=" h-24 flex gap-4 ml-20">
          <img
            src="https://cdn.discordapp.com/attachments/910172830203785256/910173349655748709/Header_DAO_Logo.png"
            alt=""
          />

          <img
            src="https://cdn.discordapp.com/attachments/910172830203785256/910173344874262578/Header_Bankless_Logo.png"
            alt=""
          />
        </div>

        <div className="flex gap-6 mr-32">
          <button
            style={{ border: "1px solid #FFF" }}
            className="text-white rounded-xl px-2 border-white bg-black"
          >
            Connect Wallet
          </button>
          <a href="/">
            <img
              src="https://cdn.discordapp.com/attachments/910172830203785256/910173393213591552/Header_Medium_Logo.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="https://cdn.discordapp.com/attachments/910172830203785256/910173354315624468/Header_Discord_Logo.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="https://cdn.discordapp.com/attachments/910172830203785256/910173399702204416/Header_Twitter_Logo.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="https://cdn.discordapp.com/attachments/910172830203785256/910179667888181328/unknown.png"
              alt=""
            />
          </a>
        </div>
      </header>

      <footer className="h-40 bg-black w-full flex mt-20 flex items-center justify-evenly border-solid color-red-600">
        <div className="text-white flex items-center">©2021 Bankless Dao</div>
        <div className="flex h-24">
          <img
            src="https://cdn.discordapp.com/attachments/910172830203785256/910173349655748709/Header_DAO_Logo.png"
            alt=""
          />

          <img
            src="https://cdn.discordapp.com/attachments/910172830203785256/910173344874262578/Header_Bankless_Logo.png"
            alt=""
          />
        </div>

        <div className="flex items-center gap-4">
          <a href="/">
            <img
              src="https://cdn.discordapp.com/attachments/910172830203785256/910173393213591552/Header_Medium_Logo.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="https://cdn.discordapp.com/attachments/910172830203785256/910173354315624468/Header_Discord_Logo.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="https://cdn.discordapp.com/attachments/910172830203785256/910173399702204416/Header_Twitter_Logo.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="https://cdn.discordapp.com/attachments/910172830203785256/910179667888181328/unknown.png"
              alt=""
            />
          </a>
        </div>
      </footer>

      <div className=" bg-red-600 h-3 w-full"></div>
    </div>
  );
}
