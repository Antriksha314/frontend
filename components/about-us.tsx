import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="drop-shadow-xl bg-gray-900 container flex justify-between mx-auto">
      <section className="my-8 px-8">
        <div className="text-3xl text-white font-extrabold mb-4 min-w-min px-6 ">Codext one of the best system in SAAS</div>
        <p className="text-lg text-white px-6 mb-4 break-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
          tortor auctor, tempor mauris in, scelerisque quam. Nunc id nunc ut
          nulla porttitor blandit a sed dolor.
        </p>
        <button className="bg-white rounded-md mt-3 px-4 py-3">Try live demo</button>
      </section>
      <section className="my-8">
        <figure className="my-4 py-4 pr-4">
          <Image src="/first.jpg" alt="Office" width={1200} height={800} />
        </figure>
      </section>
    </section>
  );
};

export default AboutUs;
