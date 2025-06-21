
const Footer = () => {
  const footerLinks = {
    Services: [
      "Strategy & Planning",
      "Creative & Content",
      "Media & Advertising",
      "Analytics & Insights",
      "Technology Solutions",
      "Influencer Marketing"
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "News & Insights",
      "Case Studies",
      "Contact"
    ],
    Resources: [
      "Blog",
      "White Papers",
      "Industry Reports",
      "Webinars",
      "Tools",
      "Support"
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-800 rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-wider">NEW ENGEN</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Industry-leading digital marketing agency partnering with bold brands 
              to drive genuine impact across every stage of the customer journey.
            </p>
            <div className="space-y-3">
              <div className="text-gray-300">hello@newengen.com</div>
              <div className="text-gray-300">+1 (555) 123-4567</div>
              <div className="text-gray-300">New York, NY</div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 New Engen. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
