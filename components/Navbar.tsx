import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-[76px] lg:top-[46px] pt-[5px] lg:pt-[35px] left-0 right-0 w-full z-1000 bg-black">
      <div className="section-container flex justify-center lg:justify-between items-center lg:items-center relative py-1.5 lg:py-0">
        <Image
          src="/fametonic-mobile-logo.png"
          width={107.78}
          height={46.07}
          alt="Fametonic Mobile Logo"
          className="lg:hidden"
        />
        <Image
          src="/fametonic-logo.svg"
          width={173.12}
          height={74}
          alt="Fametonic Logo"
          className="hidden lg:block"
        />
        <div className="hidden lg:flex ml-auto items-center gap-10">
          <Link className="ml-auto" href="#">
            <p className="text-lg font-semibold text-[#A9A9A9]">About us</p>
          </Link>
          <Link className="ml-auto" href="#">
            <p className="text-lg font-semibold text-[#A9A9A9]">Contact</p>
          </Link>
        </div>
        <Image
          className="lg:hidden absolute right-[-10px]"
          src="/hamburger.svg"
          width={20}
          height={12}
          alt="Menu Button"
        />
      </div>
    </nav>
  );
};

export default Navbar;
