import { Footer, FooterCopyright, FooterIcon } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function PageFooter() {
  return (
    <Footer container className="bg-light">
      <div className="flex w-full flex-col items-center  ">
        <FooterCopyright
          href="/"
          by="MEGEB™"
          year={2024}
          className="text-dark"
        />
        <div className="mt-4 flex space-x-6 pb-2">
          <FooterIcon href="#" icon={BsLinkedin} className="text-dark" />
          <FooterIcon
            href="https://github.com/porlowska/megeb"
            icon={BsGithub}
            className="text-dark"
          />
        </div>
      </div>
    </Footer>
  );
}
