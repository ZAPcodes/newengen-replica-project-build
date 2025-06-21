
const Clients = () => {
  const clients = [
    "NORDSTROM", "yitty", "EVERLANE",
    "KHAITE", "JOCKEY", "EVEREVE", 
    "MEN'S WEARHOUSE", "CHICO'S", "CUYANA"
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-8">
              <span className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg font-semibold">
                Fashion & Apparel
              </span>
            </div>
            <h2 className="text-6xl font-bold text-gray-800 leading-tight mb-8">
              OUR
              <br />
              CLIENTS SHINE
            </h2>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {clients.map((client, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                  <span className="font-semibold text-gray-800">{client}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="bg-teal-100 p-8 rounded-3xl relative">
            <div className="text-6xl text-gray-600 mb-4">"</div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              New Engen's approach and capabilities are impressive. 
              Working together, we'll be able to dive into the nuances 
              of channel impact and the complexities of our 
              promotional calendar. This will allow us to realize the 
              incremental value of exclusive product drops with key 
              brand partners and not leave any opportunity untapped. 
              New Engen's ability to evolve their omnichannel 
              marketing and measurement strategies to respond to 
              evolving consumer expectations is key to our achieving 
              [our] ambitions sooner than later.
            </p>
            <div className="flex justify-between items-end">
              <div>
                <div className="font-semibold text-gray-800">Joe Shoemaker</div>
                <div className="text-gray-600">VP of Digital</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-2xl text-gray-800">Snipes</div>
              </div>
            </div>
            <div className="text-6xl text-gray-600 absolute bottom-8 right-8">"</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
