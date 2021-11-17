export default function Footer(){
    return (
      <div>
        <footer
          style={{ borderBottom: "5px solid rgb(220, 38, 38)" }}
          className="h-40 bg-black w-full flex justify-center lg:flex flex items-center justify-evenly border-solid color-red-600"
        >
          <div className="text-white flex items-center hidden lg:inline-flex ">©2021 Bankless Dao</div>
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

          <div className="flex items-center gap-4 hidden lg:inline-flex">
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
        </footer>
      </div>
    );
}