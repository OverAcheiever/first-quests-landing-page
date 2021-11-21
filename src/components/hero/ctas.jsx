import React from "react";

export default function CTAs() {
  const CTAs = [
    {
      title: "Contribute",
      image:
        "https://cdn.discordapp.com/attachments/868463273333366834/910542687239798834/9hZu47EYq40cbggIhxhgW0GM1eiuWwRkdjXbze5GRDjS8w6JtpkArV1QAAAABJRU5ErkJggg.png",
      description: " Contribute to the fast growing Defi community.",
      ctaLabel: "GET INVOLVED",
    },
    {
      title: "Make $Bank",
      image:
        "https://cdn.discordapp.com/attachments/868463273333366834/910542687239798834/9hZu47EYq40cbggIhxhgW0GM1eiuWwRkdjXbze5GRDjS8w6JtpkArV1QAAAABJRU5ErkJggg.png",
      description: "Get paid in crypto for contributing to DAO.",
      ctaLabel: "START EARNING",
    },
    {
      title: "Community",
      image:
        "https://cdn.discordapp.com/attachments/868463273333366834/910542687239798834/9hZu47EYq40cbggIhxhgW0GM1eiuWwRkdjXbze5GRDjS8w6JtpkArV1QAAAABJRU5ErkJggg.png",
      description:
        "Become part of the Bankless Community, everyone is welcome.",
      ctaLabel: "JOIN THE DAO",
    },
  ];

  return (
    <div style={{}} className="w-full flex items-center justify-center bg-black">
      <div
        style={{ maxWidth: "73rem", }}
        className="w-full flex flex-col items-center gap-5 py-10 lg:flex-row justify-between px-24 py-20 gap-x-20"
      >
        {CTAs.map((cta, key) => (
          <div
            key={key}
            style={{ border: "1px solid #FFF" }}
            className="flex flex-col justify-between w-64 h-64 border-black bg-black text-white rounded-xl p-6"
          >
            <div className="flex justify-between clearsans-bold text-2xl">
              <h1> {cta.title} </h1>
              
            </div>
            <p className="text-md mt-5 clearsans-thin">{cta.description}</p>
            <button
              style={{ backgroundColor: "#ff3131" }}
              className="w-full h-10 text-black clearsans-regular text-lg rounded-lg mt-12"
            >
              {cta.ctaLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
