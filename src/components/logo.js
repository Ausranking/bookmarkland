import Image from "next/image";
import Link from "next/link";

const Logo = ({ theme }) => {
  return (
    <div className="">
      <Link href="/">
        <Image
          src={theme === "dark" ? "/darklogo.svg" : "/logo.svg" }
          alt="logo"
          height={10}
          width={140}
        />
      </Link>
    </div>
  );
};

export default Logo;
