import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const offerings = [
  {
    title: "Strategy",
    content:
      "Genuine impact starts with a plan. Before we spend a single dollar on media, we immerse ourselves in your business to deliver insights on your market, customers, and competition, providing deeply researched perspectives on where and how to grow your brand across the full customer journey.",
    tags: [
      "Market Research",
      "Consumer Segmentation & Market Sizing",
      "Competitive Intelligence",
      "Media & Content Planning",
      "Strategic Consulting",
    ],
    image: "https://via.placeholder.com/400x300?text=Strategy+Animation",
  },
  {
    title: "Media",
    content:
      "Real growth takes more than quick wins—it demands a strategic, full-funnel media approach. At New Engen, we leverage deep consumer research and insights, innovative creative strategy, and precision media planning and buying to craft high-performance campaigns that maximize impact while fueling long-term brand momentum.",
    tags: [
      "Paid Search & Shopping",
      "Paid Social",
      "TikTok",
      "Affiliate Marketing",
      "Acorn Creator Suite",
      "Display",
      "Video & Audio",
      "Retail Media & Marketplaces",
    ],
    image: "https://via.placeholder.com/400x300?text=Media+Animation",
  },
  {
    title: "Creative",
    content:
      "Creative that captivates and converts. We craft audience-first content that doesn't just look good—it performs. From brand storytelling to performance-driven assets, our creative breaks through the noise, builds brand equity, and drives measurable results across every channel.",
    tags: [
      "Short-Form Video",
      "Hi-Fi Video",
      "Statics",
      "Landing Pages",
      "Photography",
    ],
    image: "https://via.placeholder.com/400x300?text=Creative+Animation",
  },
  {
    title: "Measurement",
    content:
      "At New Engen, measurement isn't an afterthought—it's the foundation of success. Our always-on, AI-powered analytics provide a real-time, cross-channel view of performance, empowering brands to optimize spend, maximize impact, and scale with confidence.",
    tags: [
      "Audience Management",
      "Intelligence & Insights",
      "Targeting & Activation",
      "Measurement & Attribution",
    ],
    image: "https://via.placeholder.com/400x300?text=Measurement+Animation",
  },
];

const OfferingItem = ({ offering, index, isExpanded, onInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, onInView, index]);

  return (
    <div ref={ref} className="py-12">
      <motion.div
        initial={{ opacity: 0.7 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-bold mb-4 text-white transition-colors duration-500 hover:text-yellow-400">
          {offering.title}
        </h3>
        <div className="w-full h-px bg-gray-700 mb-8"></div>
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start pt-4">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">{offering.content}</p>
              <div className="flex flex-wrap gap-3">
                {offering.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 border border-gray-600 rounded-full text-sm text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={offering.image}
                alt={offering.title}
                className="w-full max-w-md rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const WhatWeProvide = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="what-we-provide" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          What We Provide
        </h2>
        <div className="space-y-4">
          {offerings.map((offering, index) => (
            <OfferingItem
              key={index}
              offering={offering}
              index={index}
              isExpanded={expandedIndex === index}
              onInView={() => setExpandedIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
