import Navbar from "@/components/Navbar";

export async function generateMetadata() {
  return {
    icons: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon.png",
      },
    ],
  };
}
const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-[90%] sm:w-[80%] m-auto flex flex-col gap-3 mt-10">
        <div className="mb-8">
          <button className="bg-[#212127] rounded-md px-3 sm:px-4 font-semibold py-3 font-karla text-xl sm:text-2xl md:text-3xl text-gray-300">
            DMCA - Disclaimer
          </button>
        </div>
        <p className="font-karla text-xl sm:text-2xl text-gray-400">
          Mangazuna.xyz is committed to respecting the intellectual property
          rights of others and complying with the Digital Millennium Copyright
          Act (DMCA). We take copyright infringement seriously and will respond
          to notices of alleged copyright infringement that comply with the DMCA
          and any other applicable laws.
        </p>
        <p className="font-karla text-xl sm:text-2xl text-gray-400">
          If you believe that any content on our website is infringing upon your
          copyrights, please send us an email. Please allow up to 2-5 business
          days for a response. Please note that emailing your complaint to other
          parties such as our Internet Service Provider, Hosting Provider, and
          other third parties will not expedite your request and may result in a
          delayed response due to the complaint not being filed properly.
        </p>
        <p className="font-karla text-xl sm:text-2xl text-gray-400 mt-4 sm:mt-5 md:mt-10">
          In order for us to process your complaint, please provide the
          following information:
        </p>
        <ul className="list-disc px-6 sm:px-8 md:px-10">
          <li className="text-gray-400 font-karla text-lg sm:text-xl">
            Your name, address, and telephone number. We reserve the right to
            verify this information.
          </li>
          <li className="text-gray-400 font-karla text-lg sm:text-xl">
            Identification of the copyrighted work claimed to have been
            infringed.
          </li>
          <li className="text-gray-400 font-karla text-lg sm:text-xl">
            The exact and complete URL link where the infringing material is
            located.
          </li>
          <li className="text-gray-400 font-karla text-lg sm:text-xl">
            Please write to us in English or Indonesian.
          </li>
        </ul>
        <p className="font-karla text-xl sm:text-2xl text-gray-400 mt-4 sm:mt-5 md:mt-10">
          Please note that anonymous or incomplete messages will not be dealt
          with. Thank you for your understanding.
        </p>
        <h1 className="uppercase font-medium font-karla text-xl sm:text-2xl text-gray-300 mt-4 sm:mt-5 md:mt-7">
          Disclaimer
        </h1>
        <p className="font-karla text-xl sm:text-2xl text-gray-400 mt-4 sm:mt-5 ">
          None of the files listed on Moopa.live are hosted on our servers. All
          links point to content hosted on third-party websites. Moopa.live does
          not accept responsibility for content hosted on third-party websites
          and has no involvement in the downloading/uploading of movies. We only
          post links that are available on the internet. If you believe that any
          content on our website infringes upon your intellectual property
          rights and you hold the copyright for that content, please report it
          to contact@mangazuna.xyz and the content will be immediately removed.
        </p>
      </div>
    </>
  );
};

export default page;
