
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [verificationResult, setVerificationResult] = useState<string | null>(null);

  const handleVerify = () => {
    if (certificateId.trim()) {
      // Simulate verification process
      setTimeout(() => {
        setVerificationResult("Certificate verified successfully!");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Verify <span className="text-yellow-400">Certificate</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Validate the authenticity of certificates issued by New Engen Academy
            </p>
          </div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-scale-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Certificate Verification</h2>
              <p className="text-gray-600">Enter your certificate ID to verify its authenticity</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="certificateId" className="block text-sm font-medium text-gray-700 mb-2">
                  Certificate ID
                </label>
                <input
                  type="text"
                  id="certificateId"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  placeholder="Enter your certificate ID (e.g., NE-2024-001234)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors duration-200"
                />
              </div>
              
              <Button 
                onClick={handleVerify}
                className="w-full bg-orange-400 hover:bg-orange-500 text-gray-800 font-semibold py-3 rounded-full transition-colors duration-200"
                disabled={!certificateId.trim()}
              >
                Verify Certificate
              </Button>
              
              {verificationResult && (
                <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in">
                  {verificationResult}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">How Verification Works</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Enter Certificate ID",
                description: "Input the unique certificate ID found on your certificate"
              },
              {
                step: "02",
                title: "Instant Verification",
                description: "Our system checks the certificate against our secure database"
              },
              {
                step: "03",
                title: "Get Results",
                description: "Receive immediate confirmation of certificate authenticity"
              }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl font-bold text-yellow-400 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VerifyCertificate;
