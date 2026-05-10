export function Support() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-sm border border-gray-100 mt-10">
      <h1 className="text-3xl font-bold text-[var(--color-trust-blue)] mb-6">Support & Help Center</h1>
      <p className="text-gray-700 mb-8 text-lg">
        Need assistance with your certification, navigating the modules, or technical issues? We are here to help.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
          <ul className="space-y-4 text-gray-700">
            <li><strong>Email:</strong> thierryniyonkuru2050@gmail.com</li>
            <li><strong>Phone:</strong> +250 787 018 450</li>
            <li><strong>Address:</strong> Ruyenzi, Kamonyi, Kigali, Rwanda</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Send us a message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md" />
            <textarea placeholder="How can we help?" rows={4} className="w-full p-3 border border-gray-300 rounded-md"></textarea>
            <button className="bg-[var(--color-trust-blue)] text-white px-6 py-2 rounded-md font-bold hover:bg-blue-800 transition">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
