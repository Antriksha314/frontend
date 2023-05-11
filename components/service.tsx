import Image from "next/image";

const Service = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div id="services" className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-white">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/images/happy.webp"
                alt="happy"
                width={500}
                height={500}
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white px-4 py-2">
                <h2 className="text-lg font-bold">Happy customers</h2>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ut risus quis ex commodo malesuada. Proin laoreet vestibulum
                elit ut suscipit. Sed convallis ligula tellus, a dapibus sapien
                fermentum eget.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/images/online.jpg"
                alt="online"
                width={500}
                height={300}
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white px-4 py-2">
                <h2 className="text-lg font-bold">Online delivery</h2>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ut risus quis ex commodo malesuada. Proin laoreet vestibulum
                elit ut suscipit. Sed convallis ligula tellus, a dapibus sapien
                fermentum eget.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/images/chat.jpg"
                alt="communication"
                width={500}
                height={300}
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white px-4 py-2">
                <h2 className="text-lg font-bold">Communications</h2>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ut risus quis ex commodo malesuada. Proin laoreet vestibulum
                elit ut suscipit. Sed convallis ligula tellus, a dapibus sapien
                fermentum eget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
