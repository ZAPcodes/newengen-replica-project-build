
import { Award, Users, Target, CheckCircle } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: <Award className="h-6 w-6" />, title: "Industry Recognition", value: "25+ Awards" },
    { icon: <Users className="h-6 w-6" />, title: "Expert Team", value: "200+ Engineers" },
    { icon: <Target className="h-6 w-6" />, title: "Project Success", value: "99% On-Time" },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Quality Assured", value: "ISO Certified" }
  ];

  const values = [
    "Innovation in renewable energy technologies",
    "Sustainable development practices",
    "Client-focused project delivery",
    "Environmental responsibility",
    "Technical excellence and safety",
    "Global collaboration and partnerships"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Leading Energy Innovation for{" "}
                <span className="text-blue-600">15+ Years</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                NewenGen is a premier energy consultancy firm specializing in renewable energy solutions, 
                engineering services, and sustainable development. We've been at the forefront of the 
                energy transition, helping organizations worldwide adopt cleaner, more efficient energy systems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our multidisciplinary team of engineers, project managers, and sustainability experts 
                work collaboratively to deliver innovative solutions that drive both environmental 
                and economic value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-blue-600">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{achievement.value}</div>
                    <div className="text-sm text-gray-600">{achievement.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-blue-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Impact</h3>
              <p className="text-gray-600 mb-4">
                Our projects have contributed to reducing global carbon emissions by over 2.5 million tons annually.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2.5M</div>
                  <div className="text-xs text-gray-600">Tons CO₂ Reduced</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5GW</div>
                  <div className="text-xs text-gray-600">Renewable Capacity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
