import React from 'react';
import {
  BookOpen,
  Users,
  Key,
  FileText,
  Phone,
  Send,
  FolderOpen,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  ThumbsUp,
  GraduationCap,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define BenefitCardProps interface
interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: string | number; className?: string }>;
  bgColor: string;
  iconBg: string;
  delay: number;
}

// BenefitCard Component
const BenefitCard = ({ title, description, icon: Icon, bgColor, iconBg, delay }: BenefitCardProps) => {
  return (
    <div
      className="text-center animate-fade-in hover-scale group cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Enhanced Icon Circle */}
      <div className="relative mb-10 mx-auto w-52 h-52 flex items-center justify-center">
        {/* Outer glow circles */}
        <div
          className={`absolute inset-0 rounded-full ${bgColor} opacity-40 scale-110 group-hover:scale-130 transition-all duration-700 ease-out`}
        ></div>
        <div
          className={`absolute inset-2 rounded-full ${bgColor} opacity-60 scale-105 group-hover:scale-125 transition-all duration-500 ease-out`}
        ></div>

        {/* Main circle with enhanced styling */}
        <div
          className={`relative w-44 h-44 rounded-full ${iconBg} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-3 border-4 border-white/20 group-hover:border-white/40`}
        >
          <Icon
            size={56}
            className="text-white drop-shadow-2xl group-hover:scale-125 transition-all duration-500 group-hover:rotate-3"
          />
          {/* Inner glow effect */}
          <div className="absolute inset-4 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
        </div>

        {/* Animated border rings */}
        <div
          className="absolute inset-6 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-all duration-500 group-hover:scale-110"
        ></div>
        <div
          className="absolute inset-8 rounded-full border border-white/20 group-hover:border-white/40 transition-all duration-700 group-hover:scale-105"
        ></div>
      </div>

      {/* Enhanced Content */}
      <div
        className="space-y-6 group-hover:translate-y-2 transition-all duration-500 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg group-hover:shadow-2xl border border-white/40 group-hover:border-white/60"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mx-auto group-hover:w-24 transition-all duration-500"></div>
        <p className="text-gray-600 leading-relaxed max-w-sm mx-auto group-hover:text-gray-700 transition-colors duration-300 text-base">
          {description}
        </p>        {/* Subtle call-to-action */}
        <div className="pt-4">
          <span className="text-sm font-semibold text-purple-600 group-hover:text-purple-700 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            Learn More →
          </span>
        </div>
      </div>
    </div>
  );
};

// BenefitsSection Component
const BenefitsSection = () => {
  const benefits = [
    {
      title: 'High Quality Resources',
      description:
        'Our expertly designed resources provide hands-on learning and real-world skills. With up-to-date content and comprehensive coverage, we deliver quality education that prepares you for success.',
      icon: BookOpen,
      bgColor: 'bg-gradient-to-br from-orange-100 to-pink-100',
      iconBg: 'bg-gradient-to-br from-orange-400 to-pink-500',
      delay: 0,
    },
    {
      title: 'Expert Instructors',
      description:
        'Learn from seasoned industry professionals who bring real-world experience and insights to every lesson, guiding you with practical knowledge and mentorship.',
      icon: Users,
      bgColor: 'bg-gradient-to-br from-purple-100 to-indigo-100',
      iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      delay: 150,
    },
    {
      title: 'Internship Portal Access',
      description:
        'Get exclusive portal access to all course materials, career resources, and internship opportunities, allowing you to learn at your own pace and advance your career.',
      icon: Key,
      bgColor: 'bg-gradient-to-br from-cyan-100 to-teal-100',
      iconBg: 'bg-gradient-to-br from-cyan-400 to-teal-500',
      delay: 300,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-gray-100">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            The Best Beneficial Side of
          </h1>
          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-8 leading-tight">
            INLIGNTECH
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the exceptional advantages that set us apart in delivering world-class education and career opportunities.
          </p>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="relative">
          {/* Improved Connecting Elements */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px">
            <svg className="w-full h-32" viewBox="0 0 1200 120" fill="none">
              <path
                d="M100 60 Q400 30 600 60 T1100 60"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="12,8"
                fill="none"
                className="animate-pulse"
              />
              <circle cx="200" cy="50" r="6" fill="#ec4899" className="animate-bounce" style={{ animationDelay: '0.5s' }}>
                <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="600" cy="65" r="5" fill="#3b82f6" className="animate-bounce" style={{ animationDelay: '1s' }}>
                <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="1000" cy="55" r="4" fill="#10b981" className="animate-bounce" style={{ animationDelay: '1.5s' }}>
                <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
              </circle>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 relative z-10">
            {benefits.map((benefit) => (
              <BenefitCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                bgColor={benefit.bgColor}
                iconBg={benefit.iconBg}
                delay={benefit.delay}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Call-to-Action */}
        <div className="text-center mt-24 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have accelerated their careers with our comprehensive programs.
            </p>
            <button
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-indigo-700"
              aria-label="Start your internship journey"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// InternshipRoadmap Component
const InternshipRoadmap = () => {
  const statistics = [
    {
      number: '5000+',
      label: 'INTERNS ENROLLED',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '9000+',
      label: 'PROJECTS COMPLETED',
      icon: Briefcase,
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '93%',
      label: 'SATISFACTION RATE',
      icon: ThumbsUp,
      color: 'from-green-500 to-green-600',
    },
    {
      number: '30+',
      label: 'TOP INSTRUCTORS',
      icon: GraduationCap,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const steps = [
    {
      id: 1,
      title: 'Registration Form & Portal Access',
      description: 'Register yourself at InLighnTech and get your portal access',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
    },
    {
      id: 2,
      title: 'Interview Call - Next Day',
      description: 'Schedule and attend your interview call',
      icon: Phone,
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-200',
      bgColor: 'bg-purple-50',
    },
    {
      id: 3,
      title: 'Offer Letter with Batch Group Link',
      description: 'Once you receive Offer Letter, You will get access of WhatsApp Group',
      icon: Send,
      color: 'from-green-500 to-green-600',
      borderColor: 'border-green-200',
      bgColor: 'bg-green-50',
    },
    {
      id: 4,
      title: 'Select Your Project and Submit Work',
      description: 'Select your project by on your own or select the project given in the portal and submit your work',
      icon: FolderOpen,
      color: 'from-orange-500 to-orange-600',
      borderColor: 'border-orange-200',
      bgColor: 'bg-orange-50',
    },
    {
      id: 5,
      title: 'Experience Letter & Letter of Completion',
      description: 'Once you Submit your Project, You’ll get ISO-Certified Completion Certificate and Letter of Completion',
      icon: Award,
      color: 'from-yellow-500 to-yellow-600',
      borderColor: 'border-yellow-200',
      bgColor: 'bg-yellow-50',
    },
  ];

  // Placeholder Header and Footer
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 mb-20">
      <Header />
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden mt-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className=" mt-20 absolute bottom-20 right-1/4 w-64 h-64 bg-green-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transform hover-scale">
                <span className="text-white font-bold text-2xl">IL</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="ml-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                InLighn Tech
              </span>
              <p className="text-gray-600 text-sm mt-1">Industry Leading Internships</p>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            ROADMAP OF
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              INTERNSHIP JOURNEY
            </span>
          </h1>
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 mb-16 border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-4"></div>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Best in Industry</span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-4"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We Provide Best{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-2xl shadow-lg transform hover-scale">
                  Industry
                </span>
              </span>{' '}
              Services For You.
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed max-w-4xl mx-auto">
              At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning
              and industry needs. Founded with a passion for providing meaningful and immersive learning experiences, we
              offer internship programs that equip students and young professionals with practical skills in{' '}
              <span className="font-semibold text-blue-600">Cyber Security</span>,
              <span className="font-semibold text-purple-600">Full Stack Development</span>,
              <span className="font-semibold text-green-600">Data Science</span>, and
              <span className="font-semibold text-orange-600">Project Management</span>.
            </p>
          </div>
        </div>

        {/* Enhanced Roadmap Section */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute inset-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 600">
              <defs>
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="25%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#10B981" />
                  <stop offset="75%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
              <path
                d="M 100 100 Q 250 80 400 120 Q 550 160 700 100 Q 850 40 950 80"
                stroke="url(#roadGradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="15,10"
                className="animate-dash"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="relative z-10 space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Content Card */}
                <div
                  className={`flex-1 transform transition-all duration-500 hover-scale ${
                    index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 ${step.borderColor} border-2 ${step.bgColor} bg-opacity-30`}
                  >
                    {/* Step Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg transform hover:rotate-12 transition-transform duration-300`}
                        >
                          <step.icon size={28} strokeWidth={2.5} />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Step {step.id}</span>
                          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 bg-gradient-to-br ${step.color} rounded-full animate-pulse`}></div>
                        <CheckCircle className="text-green-500" size={20} />
                      </div>
                    </div>
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                    {/* Progress Bar */}
                    <div className="mt-6 flex items-center space-x-4">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${(step.id / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-500">{Math.round((step.id / 5) * 100)}%</span>
                    </div>
                  </div>
                </div>
                {/* Step Number Circle */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl transform hover-scale border-4 border-white`}
                  >
                    {step.id}
                  </div>
                </div>
                {/* Spacer for opposite side */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20">
            <button
              className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-12 py-6 rounded-full font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover-scale group bg-size-200 hover:bg-pos-100 animate-gradient"
              aria-label="Begin your internship journey"
            >
              <span>Begin your Journey</span>
              <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform duration-300" size={28} />
            </button>
            <p className="text-gray-600 mt-6 text-lg">Join thousands of successful graduates</p>
          </div>
        </div>

        {/* Enhanced WhatsApp Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-60 animate-pulse"></div>
            <div
              className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover-scale cursor-pointer group"
              aria-label="Contact us via WhatsApp"
            >
              <svg className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486" />
              </svg>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-20">
          <div className="relative rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-pink-500/90 to-orange-400/90"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover-scale"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/90 font-semibold text-sm tracking-wide uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BenefitsSection />
    </div>
  );
};

export default InternshipRoadmap;