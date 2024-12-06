import Image from "next/image";

const SocialMedia = ({ size }: { size: number }) => {
  return (
    <div className="flex justify-center gap-2 pb-4" style={{ pointerEvents: "auto" }}>

      <a
        className="bg-opacity-0 p-4 transition-all transform hover:scale-125 scale-100 flex justify-center items-center"
        href="https://www.linkedin.com/in/jazibwaqarr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center items-center">
          <Image
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={size}
            height={size}
            className="object-contain"
          />
        </div>
      </a>
      <a
        className="bg-opacity-0 p-4 transition-all transform hover:scale-125 scale-100 flex justify-center items-center"
        href="https://github.com/jrza"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center items-center">
          <Image
            src="/icons/github.svg"
            alt="GitHub"
            width={size}
            height={size}
            className="object-contain"
          />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
