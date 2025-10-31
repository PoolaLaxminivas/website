import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Users, Rocket, Award } from 'lucide-react';
import { useRef } from 'react';

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Empowering students with cutting-edge coding skills and fostering a collaborative learning environment.',
      color: 'cyan',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a strong network of passionate developers who support and learn from each other.',
      color: 'purple',
    },
    {
      icon: Rocket,
      title: 'Innovation Hub',
      description: 'Creating innovative projects and solutions that push the boundaries of technology.',
      color: 'cyan',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality code and exceptional learning experiences.',
      color: 'purple',
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Parallax Floating Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-50%']) }}
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #38bdf8, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Code With Us is a vibrant community of passionate developers, innovators, and tech enthusiasts dedicated to pushing the boundaries of what's possible through code.
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold neon-text">Our Story</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Founded by a group of coding enthusiasts, Code With Us started as a small study group and has grown into a thriving community of over 500+ members.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                We organize hackathons, coding workshops, tech talks, and collaborative projects that bridge the gap between academic learning and real-world application.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Our mission is simple: foster a culture of continuous learning, innovation, and collaboration where every member can grow and excel.
              </motion.p>
            </div>
          </motion.div>

          {/* Right: 3D Floating Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              animate={{
                rotateY: [0, 360],
                rotateX: [0, 10, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-full aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center relative"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 0 60px rgba(56, 189, 248, 0.3)',
              }}
            >
              <div className="text-9xl font-bold opacity-20" style={{ transform: 'translateZ(50px)' }}>
                {'</>'}
              </div>
              
              {/* Orbiting Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-cyan-400"
                  style={{
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.8)',
                  }}
                  animate={{
                    x: [0, Math.cos((i / 8) * Math.PI * 2) * 150, 0],
                    y: [0, Math.sin((i / 8) * Math.PI * 2) * 150, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'linear',
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="card-3d p-6 rounded-xl glass border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer group"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                boxShadow: `0 0 30px rgba(${feature.color === 'cyan' ? '56, 189, 248' : '168, 85, 247'}, 0.1)`,
              }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                  feature.color === 'cyan'
                    ? 'from-cyan-500/20 to-cyan-600/20'
                    : 'from-purple-500/20 to-purple-600/20'
                } flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300`}
                style={{
                  boxShadow: `0 0 20px rgba(${feature.color === 'cyan' ? '56, 189, 248' : '168, 85, 247'}, 0.3)`,
                }}
              >
                <feature.icon className={`text-${feature.color}-400`} size={24} />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 neon-text">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: '500+', label: 'Active Members' },
            { number: '50+', label: 'Projects Built' },
            { number: '100+', label: 'Events Hosted' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              className="text-center p-8 rounded-xl glass border border-purple-400/20 cursor-pointer"
              style={{ boxShadow: '0 0 40px rgba(168, 85, 247, 0.2)' }}
            >
              <motion.div
                className="text-5xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, #38bdf8, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;