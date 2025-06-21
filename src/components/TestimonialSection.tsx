import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

const testimonials = [
	{
		name: "Aarav Sharma",
		role: "Data Science Intern",
		quote: "The hands-on projects at Inlighn Tech transformed my skills and boosted my confidence for a tech career.",
		image: "https://via.placeholder.com/50?text=AS",
	},
	{
		name: "Priya Patel",
		role: "Full Stack Developer",
		quote: "Expert mentorship guided me through every step, making complex concepts easy to grasp.",
		image: "https://via.placeholder.com/50?text=PP",
	},
	{
		name: "Rohan Mehta",
		role: "Cybersecurity Trainee",
		quote: "The flexible learning pace allowed me to balance work and upskill effectively.",
		image: "https://via.placeholder.com/50?text=RM",
	},
	{
		name: "Sneha Verma",
		role: "Data Analyst",
		quote: "I loved the real-world datasets. It felt like I was already working in the industry.",
		image: "https://via.placeholder.com/50?text=SV",
	},
	{
		name: "Vikram Singh",
		role: "Full Stack Intern",
		quote: "The community is amazing. I connected with so many talented peers and mentors.",
		image: "https://via.placeholder.com/50?text=VS",
	},
	{
		name: "Anjali Rao",
		role: "Cybersecurity Analyst",
		quote: "The curriculum is top-notch and always updated with the latest industry trends.",
		image: "https://via.placeholder.com/50?text=AR",
	},
	{
		name: "Arjun Nair",
		role: "Data Science Intern",
		quote: "The projects here are challenging and rewarding. I learned so much.",
		image: "https://via.placeholder.com/50?text=AN",
	},
	{
		name: "Neha Reddy",
		role: "Full Stack Developer",
		quote: "The instructors are incredibly supportive and knowledgeable. Highly recommended!",
		image: "https://via.placeholder.com/50?text=NR",
	},
];

type Testimonial = typeof testimonials[0];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
	return (
		<div className="bg-gray-800 p-6 rounded-lg flex flex-col items-start gap-4 w-[350px] md:w-[400px] flex-shrink-0">
			<div className="flex items-center gap-4">
				<img
					src={testimonial.image}
					alt={testimonial.name}
					className="w-12 h-12 rounded-full border-2 border-cyan-400"
				/>
				<div>
					<p className="font-bold text-white">{testimonial.name}</p>
					<p className="text-sm text-gray-400 italic">{testimonial.role}</p>
				</div>
			</div>
			<p className="text-gray-300 mt-2 flex-grow">"{testimonial.quote}"</p>
			<MessageSquare className="w-5 h-5 text-cyan-500 self-end" />
		</div>
	);
};

const TestimonialSection = () => {
	const duplicatedTestimonials = [...testimonials, ...testimonials];

	const carouselVariants: Variants = {
		animate: {
			x: [0, -(testimonials.length * (400 + 32))], // card width 400px + gap 32px
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 40, // Adjust for speed
					ease: "linear",
				},
			},
		},
	};

	return (
		<section id="testimonials" className="py-20 bg-black text-white relative overflow-hidden">
			<div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none"></div>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.h2
					className="text-4xl font-bold mb-12 text-center"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 0.5 }}
				>
					What Our Learners Say
				</motion.h2>

				<div className="w-full overflow-hidden">
					<motion.div className="flex gap-8" variants={carouselVariants} animate="animate">
						{duplicatedTestimonials.map((testimonial, index) => (
							<TestimonialCard key={index} testimonial={testimonial} />
						))}
					</motion.div>
				</div>

				<div className="text-center mt-12">
					<button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center mx-auto transition-colors duration-300">
						View More Testimonials <ArrowRight className="ml-2 w-5 h-5" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default TestimonialSection;
