import  {IoLogoInstagram, IoLogoLinkedin, IoLogoGithub} from 'react-icons/io'
import { IoLogoDiscord } from "react-icons/io5";

export default function () {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-transparent content-center text-center font-poppins">
      <div>
        <h2 className="font-wicked tracking-wider text-2xl pt-20 pb-10">
          Open and available to new opportunities. <br /> Feel free to reach
          out.
        </h2>
        <a
          href="mailto:samuelsibuea82@gmail.com"
          className="px-3 py-2 uppercase bg-gradient-to-r from-sky-600 to-sky-800 rounded-lg"
        >
          Contact me
        </a>
      </div>
      <div className="flex flex-col items-center justify-between py-10">
        <ul className="flex flex-row gap-x-5">
          <li>
            <a href="https://www.instagram.com/samuelsibuea_1/">
            <IoLogoInstagram
                size={35}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/samuel-sibuea/">
              <IoLogoLinkedin size={35} />
            </a>
          </li>
          <li>
            <a href="https://github.com/ifs20004-itdel">
              <IoLogoGithub size={35} />
            </a>
          </li>
          <li>
            <a href='https://discordapp.com/users/703608800296304691'>
              <IoLogoDiscord size={35} />
            </a>
          </li>
        </ul>
        <p className=' p-3'>Sammy ~ samuelsibuea-dev.vercell.app</p>
      </div>
    </div>
  );
}
