import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, MessageSquare, Star, CheckCircle, Users, Award, TrendingUp } from "lucide-react";
import AnimatedText from "./AnimatedText";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";

const testimonials = [
	{
		name: "Aarav Sharma",
		role: "Data Science Intern",
		company: "Tech Innovations Ltd",
		quote: "The hands-on projects at Inlighn Tech transformed my skills and boosted my confidence for a tech career. The mentorship was exceptional and the real-world applications made all the difference.",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
		rating: 5,
		achievement: "Placed at Google"
	},
	{
		name: "Priya Patel",
		role: "Full Stack Developer",
		company: "Digital Solutions Inc",
		quote: "Expert mentorship guided me through every step, making complex concepts easy to grasp. The curriculum is perfectly aligned with industry requirements.",
		image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
		rating: 5,
		achievement: "₹12 LPA Package"
	},
	{
		name: "Rohan Mehta",
		role: "Cybersecurity Trainee",
		company: "SecureNet Corp",
		quote: "The flexible learning pace allowed me to balance work and upskill effectively. The practical labs and security tools training were outstanding.",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
		rating: 5,
		achievement: "Security Analyst"
	},
	{
		name: "Sneha Verma",
		role: "Data Analyst",
		company: "Analytics Pro",
		quote: "I loved working with real-world datasets. It felt like I was already working in the industry. The visualization techniques I learned are invaluable.",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
		rating: 5,
		achievement: "Business Analyst"
	},
	{
		name: "Vikram Singh",
		role: "Full Stack Intern",
		company: "WebTech Solutions",
		quote: "The community is amazing. I connected with so many talented peers and mentors. The collaborative environment accelerated my learning significantly.",
		image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
		rating: 5,
		achievement: "Senior Developer"
	},
	{
		name: "Anjali Rao",
		role: "Cybersecurity Analyst",
		company: "CyberGuard Systems",
		quote: "The curriculum is top-notch and always updated with the latest industry trends. The ethical hacking modules were particularly comprehensive.",
		image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
		rating: 5,
		achievement: "Security Expert"
	},
	{
		name: "Arjun Nair",
		role: "Data Science Intern",
		company: "AI Innovations",
		quote: "The projects here are challenging and rewarding. I learned machine learning, deep learning, and AI applications that are directly applicable in my current role.",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
		rating: 5,
		achievement: "ML Engineer"
	},
	{
		name: "Neha Reddy",
		role: "Full Stack Developer",
		company: "CloudTech Inc",
		quote: "The instructors are incredibly supportive and knowledgeable. The cloud deployment and DevOps training prepared me perfectly for modern development practices.",
		image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
		rating: 5,
		achievement: "Cloud Architect"
	},
];

const stats = [
	{
		icon: Users,
		value: "10,000+",
		label: "Students Trained",
		color: "from-secondary-cyan to-primary-medium"
	},
	{
		icon: Award,
		value: "95%",
		label: "Placement Rate",
		color: "from-accent-rust to-accent-rust/80"
	},
	{
		icon: TrendingUp,
		value: "₹8.5 LPA",
		label: "Average Package",
		color: "from-secondary-cyan to-light-blue"
	},
	{
		icon: CheckCircle,
		value: "500+",
		label: "Partner Companies",
		color: "from-primary-medium to-primary-dark"
	}
];

type Testimonial = typeof testimonials[0];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
	return (
		<TiltCard>
			<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-[400px] md:w-[450px] flex-shrink-0 border border-gray-100 hover-magnetic">
				<div className="flex items-center gap-4 mb-6">
					<img
						src={testimonial.image}
						alt={testimonial.name}
						className="w-16 h-16 rounded-full border-4 border-secondary-cyan/20 object-cover"
					/>
					<div className="flex-1">
						<h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
						<p className="text-secondary-cyan font-medium">{testimonial.role}</p>
						<p className="text-gray-500 text-sm">{testimonial.company}</p>
					</div>
					<div className="text-right">
						<div className="flex items-center gap-1 mb-1">
							{[...Array(testimonial.rating)].map((_, i) => (
								<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
							))}
						</div>
						<span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
							{testimonial.achievement}
						</span>
					</div>
				</div>
				<p className="text-gray-700 leading-relaxed mb-4 italic">
					"{testimonial.quote}"
				</p>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2 text-sm text-gray-500">
						<CheckCircle className="w-4 h-4 text-green-500" />
						<span>Verified Graduate</span>
					</div>
					<MessageSquare className="w-5 h-5 text-secondary-cyan" />
				</div>
			</div>
		</TiltCard>
	);
};

const TestimonialSection = () => {
	const duplicatedTestimonials = [...testimonials, ...testimonials];

	const carouselVariants: Variants = {
		animate: {
			x: [0, -(testimonials.length * (450 + 32))], // card width 450px + gap 32px
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 50, // Slower for better readability
					ease: "linear",
				},
			},
		},
	};

	return (
		<section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23134E4A%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-secondary-cyan/20 rounded-full px-6 py-3 mb-8 shadow-lg hover-magnetic">
						<MessageSquare className="w-5 h-5 text-secondary-cyan" />
						<span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Success Stories</span>
					</div>

					<AnimatedText
						text="What Our Learners Say About Us"
						className="text-4xl md:text-5xl font-tech font-bold text-gray-900 mb-6"
						type="words"
						delay={0.2}
						stagger={0.1}
					/>
					
					<AnimatedText
						text="Real stories from students who transformed their careers with our comprehensive tech programs"
						className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
						type="words"
						delay={0.5}
						stagger={0.05}
					/>
				</div>

				{/* Stats Section */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
					{stats.map((stat, index) => (
						<TiltCard key={index}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover-magnetic"
							>
								<div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
									<stat.icon className="w-6 h-6 text-white" />
								</div>
								<div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
								<div className="text-gray-600 text-sm font-medium">{stat.label}</div>
							</motion.div>
						</TiltCard>
					))}
				</div>

				{/* Testimonials Carousel */}
				<div className="w-full overflow-hidden mb-12">
					<motion.div 
						className="flex gap-8" 
						variants={carouselVariants} 
						animate="animate"
					>
						{duplicatedTestimonials.map((testimonial, index) => (
							<TestimonialCard key={index} testimonial={testimonial} />
						))}
					</motion.div>
				</div>

				{/* Call to Action */}
				<div className="text-center">
					<TiltCard>
						<div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-4xl mx-auto hover-magnetic">
							<AnimatedText
								text="Ready to Join Our Success Stories?"
								className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
								type="words"
								delay={0.2}
								stagger={0.1}
							/>
							<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
								Start your journey with INLIGHN TECH today and become the next success story. 
								Join thousands of students who have transformed their careers.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<MagneticButton strength={0.4} range={120}>
									<button className="bg-gradient-to-r from-secondary-cyan to-primary-medium hover:from-secondary-cyan/90 hover:to-primary-medium/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 hover-shine">
										<span>Start Your Journey</span>
										<ArrowRight className="w-5 h-5" />
									</button>
								</MagneticButton>
								<MagneticButton strength={0.3} range={100}>
									<button className="border-2 border-primary-medium text-primary-medium hover:bg-primary-medium hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
										View All Programs
									</button>
								</MagneticButton>
							</div>
						</div>
					</TiltCard>
				</div>
			</div>
		</section>
	);
};

export default TestimonialSection;