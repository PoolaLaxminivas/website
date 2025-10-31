import { motion } from 'framer-motion';
import { Github, Instagram, Mail, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #38bdf8, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Have questions? Want to join us? We'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 neon-text">Connect With Us</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you're interested in joining our club, attending events, or collaborating on projects, we're here to help. Reach out through any of our social channels or drop us an email.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'contact@codewithus.club',
                  link: 'mailto:contact@codewithus.club',
                  color: 'cyan',
                },
                {
                  icon: Github,
                  label: 'GitHub',
                  value: '@codewithus',
                  link: 'https://github.com',
                  color: 'purple',
                },
                {
                  icon: Instagram,
                  label: 'Instagram',
                  value: '@codewithus.club',
                  link: 'https://instagram.com',
                  color: 'cyan',
                },
                {
                  icon: MessageSquare,
                  label: 'Discord',
                  value: 'Join our server',
                  link: 'https://discord.com',
                  color: 'purple',
                },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                  }}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    boxShadow: '0 0 30px rgba(56, 189, 248, 0.05)',
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                      item.color === 'cyan'
                        ? 'from-cyan-500/20 to-cyan-600/20'
                        : 'from-purple-500/20 to-purple-600/20'
                    } flex items-center justify-center`}
                    style={{
                      boxShadow: `0 0 20px rgba(${item.color === 'cyan' ? '56, 189, 248' : '168, 85, 247'}, 0.3)`,
                    }}
                  >
                    <item.icon className={`text-${item.color}-400`} size={20} />
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                    <div className="font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="p-6 rounded-xl glass border border-purple-400/20"
              style={{
                background: 'rgba(168, 85, 247, 0.05)',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.1)',
              }}
            >
              <h3 className="text-xl font-bold mb-3 text-purple-400">Office Hours</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Monday - Friday: 3:00 PM - 6:00 PM</p>
                <p>Location: Student Center, Room 205</p>
                <p className="text-xs text-gray-500 mt-4">* Office hours may vary during exam weeks and holidays</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Section (Replaces Form) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                boxShadow: '0 0 60px rgba(56, 189, 248, 0.2)',
              }}
            >
              {/* 3D Animated Visualization */}
              <div className="aspect-square flex items-center justify-center p-12 relative overflow-hidden">
                {/* Central Logo/Icon */}
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
                  className="relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div
                    className="text-9xl font-bold opacity-80"
                    style={{
                      background: 'linear-gradient(135deg, #38bdf8, #a855f7, #22d3ee)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 60px rgba(56, 189, 248, 0.5)',
                      transform: 'translateZ(50px)',
                    }}
                  >
                    {'</>'}
                  </div>
                </motion.div>

                {/* Orbiting Elements */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full"
                    style={{
                      background: i % 2 === 0 ? '#38bdf8' : '#a855f7',
                      boxShadow: `0 0 20px ${i % 2 === 0 ? 'rgba(56, 189, 248, 0.8)' : 'rgba(168, 85, 247, 0.8)'}`,
                    }}
                    animate={{
                      x: [
                        Math.cos((i / 12) * Math.PI * 2) * 150,
                        Math.cos(((i + 6) / 12) * Math.PI * 2) * 150,
                        Math.cos((i / 12) * Math.PI * 2) * 150,
                      ],
                      y: [
                        Math.sin((i / 12) * Math.PI * 2) * 150,
                        Math.sin(((i + 6) / 12) * Math.PI * 2) * 150,
                        Math.sin((i / 12) * Math.PI * 2) * 150,
                      ],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                  />
                ))}

                {/* Floating Text */}
                <motion.div
                  className="absolute bottom-8 left-0 right-0 text-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="text-lg font-semibold neon-text">Join Our Community</p>
                  <p className="text-sm text-gray-400 mt-2">One Club, Infinite Learning</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-2xl"
              animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm">
            Made with <span className="text-red-500">❤</span> by Code With Us
          </p>
          <motion.div
            className="mt-4 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;