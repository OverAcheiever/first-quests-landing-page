export default function White() {
  return (
    <div>
      <div
        className="w-screen bg-cover"
        style={{
          backgroundImage: `url("https://cdn.discordapp.com/attachments/910172830203785256/910173445160042556/mountain.png")`,
        }}
      >
        <div className="w-full flex justify-center">
          <div
            style={{ maxWidth: "65rem" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 lg:gap-y-0 pt-40 px-5 sm:px-14 lg:px-10"
          >
            <div>
              <div className="flex flex-col gap-5 ">
                <h1 className="text-4xl clearsans-bold ">Why Go Bankless?</h1>
                <p className="text-lg clearsans-regular">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  rem recusandae distinctio libero sint. Labore, neque? Quasi
                  pariatur laborum ut labore ipsum non unde illum eos quam
                  voluptates corporis doloribus accusantium, rerum obcaecati
                  harum quidem corrupti enim dolor aliquid saepe quis laudantium
                  eum. Qui perspiciatis enim illum provident quasi dolores.
                </p>
                <div className="flex justify-center mt-10">
                  <img
                    className="w-full"
                    src="https://cdn.discordapp.com/attachments/910172830203785256/910173467062702161/Bankless_2021_POAP.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-4xl clearsans-bold ">Decentralisation</h1>
                <p className="text-lg mt-5 clearsans-regular">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  iure enim suscipit natus quo fugiat, distinctio,
                  necessitatibus, unde porro harum maiores maxime quis
                  voluptatibus molestias laborum minima assumenda? Animi{" "}
                </p>
              </div>
              <div>
                <h1 className="text-4xl clearsans-bold ">Financial Freedom</h1>
                <p className="text-lg mt-5 clearsans-regular ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  iure enim suscipit natus quo fugiat, distinctio,
                  necessitatibus, unde porro harum maiores maxime quis
                  voluptatibus molestias laborum minima assumenda? Animi{" "}
                </p>
              </div>
              <div>
                <h1 className="text-4xl mt-5 clearsans-bold ">Collaborative</h1>
                <p className="text-lg clearsans-regular ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  iure enim suscipit natus quo fugiat, distinctio,
                  necessitatibus, unde porro harum maiores maxime quis
                  voluptatibus molestias laborum minima assumenda? Animi{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>START YOUR FIRST QUEST</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
}
