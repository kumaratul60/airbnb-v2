function Footer() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 mt-5 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="hover:underline cursor-pointer">How Airbnb works</p>
        <p className="hover:underline cursor-pointer">Newsroom</p>
        <p className="hover:underline cursor-pointer">Investors</p>
        <p className="hover:underline cursor-pointer">Airbnb Plus</p>
        <p className="hover:underline cursor-pointer">Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="hover:underline cursor-pointer">Accessibility</p>
        <p className="hover:underline cursor-pointer">
          This is not a real site
        </p>
        <p className="hover:underline cursor-pointer">
          Its a prestty awesome clone
        </p>
        <p className="hover:underline cursor-pointer">Refferals accepted</p>
        <p className="hover:underline cursor-pointer">Become CrossFit</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p className="hover:underline cursor-pointer">
          Presents by{" "}
          <a href="https://github.com/kumaratul60" className="font-bold">
            ATUL{" "}
          </a>
        </p>
        <p className="hover:underline cursor-pointer">With React JS</p>
        <p className="hover:underline cursor-pointer">Next.JS</p>
        <p className="hover:underline cursor-pointer">Tailwind CSS</p>
        <p className="hover:underline cursor-pointer">Join Now</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORTS</h5>
        <p className="hover:underline cursor-pointer">Help Centre</p>
        <p className="hover:underline cursor-pointer">Trust & Support</p>
        <p className="hover:underline cursor-pointer">Youtube</p>
        <p className="hover:underline cursor-pointer">LinkedIN</p>
        <p className="hover:underline cursor-pointer">Facebook</p>
      </div>
    </div>
  );
}

export default Footer;
