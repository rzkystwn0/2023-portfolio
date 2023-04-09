import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="flex sm:justify-between sm:flex-row flex-col mt-12 sm:mt-2">
        <Image src="Shape1.svg" alt="Shape1" width={350} height={350} className="float-left order-2 sm:order-1 sm:block hidden" />
        <Image src="Shape1.svg" alt="Shape1" width={220} height={220} className="float-left order-2 sm:order-1 sm:hidden block " />
        <div className="text-white  order-1 sm:order-2">
          <h6 className="text-center sugar text-3xl">HI, I'AM</h6>
          <h1 className="text-center sugar text-7xl leading-tight">
            RIZKY <br /> Setiawan
          </h1>
          <p className="text-center roboto-serif text-3xl w-72 block mx-auto">OnGoing Designer and Web Developer</p>
          <a href="/" className="bg-white my-2 w-32 rounded-lg py-2 block text-center mx-auto text-black font-semibold cursor-pointer hover:bg-white/60 ">Contact</a>
          <div className="flex justify-center my-2">
            <a href="https://www.instagram.com/shqn_" target="_blank" className="mx-2">
              <Image src="/instagram.svg" alt="instagram" width={36} height={36} />
            </a>
            <a href="http://gmail.com/" target="_blank" className="mx-2">
              <Image src="/mail.svg" alt="mail" width={36} height={36} />
            </a>
          </div>
            <Image src='/MouseScroll.svg' alt="MouseScroll" width={30} height={50} className="mx-auto mt-8 animate-bounce" />
        </div>
        <Image src="Shape2.svg" alt="Shape1" width={350} height={350} className=" float-right  order-3 sm:order-3 sm:block hidden" />
        <Image src="Shape2.svg" alt="Shape1" width={250} height={250} className=" ml-auto  order-3 sm:order-3 block sm:hidden -mt-32" />
      </div>
    </div>
  );
}
