
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Strategy</h2>
              <div className="w-full h-px bg-gray-700 mb-8"></div>
              
              <h3 className="text-4xl font-bold mb-6">Media</h3>
              <div className="w-full h-px bg-gray-700 mb-8"></div>
              
              <h3 className="text-4xl font-bold mb-6">Creative</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Creative that captivates and converts. We craft audience-first 
                content that doesn't just look good—it performs. From brand 
                storytelling to performance-driven assets, our creative breaks 
                through the noise, builds brand equity, and drives measurable 
                results across every channel.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">Short-Form Video</span>
                <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">Hi-Fi Video</span>
                <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">Statics</span>
                <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">Landing Pages</span>
                <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">Photography</span>
              </div>
              
              <h3 className="text-4xl font-bold mb-6">Measurement</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                At New Engen, measurement isn't an afterthought—it's the 
                foundation of success. Our always-on, AI-powered analytics 
                provide a real-time, cross-channel view of performance, 
                empowering brands to optimize spend, maximize impact, and 
                scale with confidence.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">Audience Management</span>
                <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">Intelligence & Insights</span>
                <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">Targeting & Activation</span>
                <span className="px-4 py-2 border border-gray-600 rounded-full text-sm">Measurement & Attribution</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 16 }, (_, i) => (
                <div key={i} className="aspect-square bg-yellow-400 rounded-lg"></div>
              ))}
            </div>
            
            <div className="grid grid-cols-5 gap-4">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="aspect-square bg-gray-700 rounded-lg"></div>
              ))}
            </div>
            
            <div className="absolute bottom-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
              For Creators
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
