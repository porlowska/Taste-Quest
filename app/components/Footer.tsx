import { Footer, FooterCopyright, FooterIcon } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export default function PageFooter() {
  return (
    <Footer container>
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <FooterCopyright href="#" by="MEGEB™" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <FooterIcon href="#" icon={BsFacebook} />
          <FooterIcon href="#" icon={BsInstagram} />
          <FooterIcon href="#" icon={BsTwitter} />
          <FooterIcon
            href="https://github.com/porlowska/megeb"
            icon={BsGithub}
          />
          <FooterIcon href="#" icon={BsYoutube} />
        </div>
      </div>
    </Footer>
  );
}
