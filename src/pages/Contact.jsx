import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <>    <div className="bg-base-200 m-10 py-10 px-5 md:px-10 rounded-2xl shadow-inner">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <p className="text-center text-gray-600 mt-2 mb-10">Get in touch and let us know how we can help.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Address Card */}
          <div className="flex flex-col items-center p-5 shadow-lg rounded-lg bg-base-100">
            <MapIcon className="h-10 w-10 text-orange-500" />
            <h2 className="font-semibold text-lg mt-2">Address</h2>
            <p className="text-gray-600 mt-1">#1, Junaid Plaza, Thane - Shil Road, Mumbra - 400612</p>
            <button className="mt-4 text-orange-500 hover:text-orange-600">View on map →</button>
          </div>
          
          {/* Contact Card */}
          <div className="flex flex-col items-center p-5 shadow-lg rounded-lg">
            <PhoneIcon className="h-10 w-10 text-orange-500" />
            <h2 className="font-semibold text-lg mt-2">Contact</h2>
            <p className="text-gray-600">+91 (996) 788 1994</p>
            <p className="text-gray-600">+91 (996) 788 1999</p>
          </div>
          
          {/* Email Card */}
          <div className="flex flex-col items-center p-5 shadow-lg rounded-lg">
            <EnvelopeIcon className="h-10 w-10 text-orange-500" />
            <h2 className="font-semibold text-lg mt-2">Email</h2>
            <p className="text-gray-600">support@mailerbakery.com</p>
            <p className="text-gray-600">contact@mailerbakery.com</p>
          </div>
        </div>

        <div className="text-center text-gray-600 mt-10">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae.</p>
        </div>
      </div>
    </div>
    </>
  );
}
