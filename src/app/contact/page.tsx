import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center px-4 sm:px-6 py-12 bg-black text-center"
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">Contact Me</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl">
                {/* Email */}
                <div className="bg-gray-900 shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col items-center">
                    <a
                        href="mailto:sismijoseph1997@gmail.com"
                        className="rounded-2xl p-4 sm:p-6 flex flex-col items-center hover:shadow-xl transition w-full"
                    >
                        <FaEnvelope className="text-blue-600 text-3xl sm:text-4xl mb-3 sm:mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-1 sm:mb-2">Email</h3>
                        <p className="text-gray-300 text-sm sm:text-base break-words">sismijoseph1997@gmail.com</p>
                    </a>
                </div>

                {/* Phone */}
                <div className="bg-gray-900 shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col items-center">
                    <a
                        href="tel:+919876543210"
                        className="rounded-2xl p-4 sm:p-6 flex flex-col items-center hover:shadow-xl transition w-full"
                    >
                        <FaPhone className="text-green-600 text-3xl sm:text-4xl mb-3 sm:mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-1 sm:mb-2">Phone</h3>
                        <p className="text-gray-300 text-sm sm:text-base">+971 551560815</p>
                    </a>
                </div>

                {/* Location */}
                <div className="bg-gray-900 shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col items-center">
                    <div className="rounded-2xl p-4 sm:p-6 flex flex-col items-center hover:shadow-xl transition w-full">
                        <FaMapMarkerAlt className="text-red-600 text-3xl sm:text-4xl mb-3 sm:mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-1 sm:mb-2">Location</h3>
                        <p className="text-gray-300 text-sm sm:text-base">Dubai, UAE</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
