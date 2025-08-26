import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center px-6 py-12 bg-black-50 text-center"
        >
            <h2 className="text-4xl font-bold mb-10">Contact Me</h2>

            <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
                {/* Email */}
                <div className="bg-gray-900 shadow-lg rounded-2xl p-6 flex flex-col items-center">

                    <a
                        href="mailto:sismijoseph1997@gmail.com"
                        className="rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition"
                    >
                        <FaEnvelope className="text-blue-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold text-blue-400 mb-2">Email</h3>
                        <p className="text-white-600">sismijoseph1997@gmail.com</p>
                    </a>
                </div>

                {/* Phone */}
                <div className="bg-gray-900 shadow-lg rounded-2xl p-6 flex flex-col items-center">
                    <a
                        href="tel:+919876543210"
                        className="rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition"
                    >
                        <FaPhone className="text-green-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold text-blue-400 mb-2">Phone</h3>
                        <p className="text-white-600">+91 98765 43210</p>
                    </a>
                </div>


                {/* Location */}
                <div className="bg-gray-900 shadow-lg rounded-2xl p-6 flex flex-col items-center">
                    <a
                        className="rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition"
                    >
                        <FaMapMarkerAlt className="text-red-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold text-blue-400 mb-2">Location</h3>
                        <p className="text-white-600">Dubai, UAE</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
