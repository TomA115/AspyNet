import {Footer} from "flowbite-react";

export function SiteFooter() {
    return (
      <Footer container className="mt-auto dark:bg-gray-100 bg-gray-100 ">
        <div className="w-full text-center">
          <Footer.Copyright href="#" by="Tom Aspinall" year={new Date().getFullYear()} />
        </div>
      </Footer>
    );
  }