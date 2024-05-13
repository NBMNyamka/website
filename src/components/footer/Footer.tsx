import { Redressed } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Container from "../Container";

const redressed = Redressed({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  return (
    <footer className="bg-black/85 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <Link href="/" className="flex items-center gap-1 cursor-pointer">
            <Image
              src="/image/icon.png"
              alt="logo"
              width="30"
              height="30"
              className="rounded-full"
            />
            <div className={`${redressed.className} font-bold text-2xl `}>
              Trip Mongolia
            </div>
          </Link>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Quality is our priority. We take pride in delivering oustanding
              services and pay attention to detail to provide the best, most
              authentic experiences to our guests, while at the same time
              offering lasting benefits to local communities.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
            <h3 className="text-base font-bold mb-2">Information</h3>
            <Link href="#">About us</Link>
            <Link href="#">Contact us</Link>
            <Link href="#">Package</Link>
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">FAQ</Link>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
