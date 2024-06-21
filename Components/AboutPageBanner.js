import React from "react";
import Link from "next/link";

const AboutPageBanner = () => {
  return (
    <>
      {" "}
      <div className="px-32 py-14 max-sm:px-8">
        <div className="h-auto  mt-24 ">
          <p className=" max-sm:text-sm">
            <span className="text-gray-700 font-light text-3xl underline max-sm:text-sm">
              Our Mission :
            </span>{" "}
            <br />
            <br />
            At stockit, we revolutionize equity research with Language Models,
            offering unparalleled access to non-financial data. Democratizing
            financial insights, we empower everyone with comprehensive market
            knowledge, fostering informed decisions and a more inclusive
            financial landscape.
            <br />
            <br />@ Follow stockit&ensp;
            <a
              href="https://twitter.com/stockitofficial"
              className="underline "
            >
              Twitter
            </a>
            <br />@ Follow stockit&ensp;
            <a
              href="https://www.linkedin.com/company/stockit"
              className="underline "
            >
              Linkedin
            </a>
            <br />@ Follow stockit&ensp;
            <a
              href="https://www.instagram.com/stockitofficial/"
              className="underline "
            >
              Instagram
            </a>
          </p>
        </div>
        <div className="h-auto  mt-10">
          <p className="max-sm:text-sm">
            <span className="text-gray-700 font-light text-3xl underline max-sm:text-sm">
              Meet the Team :
            </span>
            <br />
            <br />
            We believe that innovation and expertise are at the heart of
            delivering superior investment solutions. Our team is composed of
            passionate individuals with diverse backgrounds.
          </p>
        </div>
        <div className="">
          <div className="h-auto border border-gray-300 mt-8 justify-center p-6 rounded-md">
            <p className="max-sm:text-sm">
              <span className="text-2xl text-gray-800">Biswarup Sen</span>
              <br />
              <span className="underline">Founder & CEO →</span>
              <br />
              <br />
              As the founder, Biswarup Sen brings his passion for AI and machine
              learning to the world of finance. As a developer, his background
              is deeply rooted in technology, and he has a vision for creating
              value in society by combining technology with finance.
              <br />
              <br />@ Follow&ensp;
              <a href="https://twitter.com/biswarupz" className="underline ">
                Twitter
              </a>
              <br />@ Connect&ensp;
              <a
                href="https://www.linkedin.com/in/biswarup-sen/"
                className="underline "
              >
                Linkedin
              </a>
            </p>
          </div>

          <div className="h-auto border border-gray-300 mt-8 justify-center p-6 rounded-md">
            <p className="max-sm:text-sm">
              <span className="text-2xl text-gray-800">Sai Sharan</span>
              <br />
              <span className="underline">Co-founder & CFO →</span>
              <br />
              <br />
              Sai Sharan, our co-founder and CFO, is the financial backbone of
              stockit. With over 5 years of hands-on experience as a financial
              trader, Sai brings a unique perspective to our team. He has
              successfully navigated the intricacies of stock trading, forex
              trading, and cryptocurrency markets, making him a valuable asset
              in understanding market dynamics and trends.
              <br />
              <br />@ Follow&ensp;
              <a href="https://twitter.com/Saiyu0643" className="underline ">
                Twitter
              </a>
              <br />@ Connect&ensp;
              <a
                href="https://www.linkedin.com/in/sai-sharan-4b5383252/"
                className="underline "
              >
                Linkedin
              </a>
            </p>
          </div>
          <div className="h-auto border border-gray-300 mt-8 justify-center p-6 rounded-md">
            <p className="max-sm:text-sm">
              <span className="text-2xl text-gray-800">Adarsh Arunkumar</span>
              <br />
              <span className="underline">Co-founder & CTO →</span>
              <br />
              <br />
              As the CTO and Co-Founder of stockit AI, Adarsh brings his deep
              expertise in machine learning and AI to the company, with over 4
              years of experience in ML, ethical hacking, applied AI, and
              research. He is an active open source contributor and has worked
              in several startups before joining stockit.
              <br />
              <br />@ Follow&ensp;
              <a href="https://twitter.com/adarshxs" className="underline ">
                Twitter
              </a>
              <br />@ Connect&ensp;
              <a
                href="https://www.linkedin.com/in/adarshxs/"
                className="underline "
              >
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPageBanner;
