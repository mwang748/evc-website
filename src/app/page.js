// this is the new home page
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/images/homepage/sunsetcar.jpg"
        alt="sunsetcar"
        width="5000"
        height="5000"
      />
    </div>
  );
}
