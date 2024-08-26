import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="wrapper flex flex-col items-center justify-center gap-4 p-5 sm:flex-row">

         <Link href='/'>
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={118}
            height={30}
          />
        </Link>

        <p className="text-center">{currentYear} Host. All Rights Reserved.</p>
      </div>
    </footer>



  );
}

export default Footer;
