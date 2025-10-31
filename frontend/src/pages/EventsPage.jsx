import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { useState } from 'react';

const EventsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const x = useMotionValue(0);

  const events = [
    {
      id: 1,
      title: 'HackCode 2025',
      date: 'March 15-17, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Main Campus Auditorium',
      participants: '200+ Participants',
      description: 'Our flagship 48-hour hackathon where innovation meets collaboration. Build groundbreaking projects and compete for amazing prizes.',
      status: 'upcoming',
      gradient: 'from-cyan-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'AI/ML Workshop Series',
      date: 'April 5-7, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Computer Lab B',
      participants: '50 Participants',
      description: 'Deep dive into Machine Learning fundamentals, neural networks, and practical AI applications with industry experts.',
      status: 'upcoming',
      gradient: 'from-purple-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Web Dev Bootcamp',
      date: 'February 20, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Innovation Hub',
      participants: '80 Participants',
      description: 'Comprehensive full-stack web development workshop covering React, Node.js, and modern deployment practices.',
      status: 'completed',
      gradient: 'from-green-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Code & Coffee Meetup',
      date: 'Every Friday',
      time: '5:00 PM - 7:00 PM',
      location: 'Student Center',
      participants: '30+ Participants',
      description: 'Casual coding sessions where members collaborate on projects, share knowledge, and network over coffee.',
      status: 'recurring',
      gradient: 'from-orange-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Tech Talk: Cloud Computing',
      date: 'May 12, 2025',
      time: '3:00 PM - 5:00 PM',
      location: 'Virtual Event',
      participants: '150+ Participants',
      description: 'Industry leaders discuss cloud architecture, DevOps practices, and the future of cloud-native applications.',
      status: 'upcoming',
      gradient: 'from-cyan-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Competitive Programming',
      date: 'March 1, 2025',
      time: '1:00 PM - 4:00 PM',
      location: 'Lab C-203',
      participants: '60 Participants',
      description: 'Sharpen your algorithmic skills and problem-solving abilities in this intense coding competition.',
      status: 'upcoming',
      gradient: 'from-yellow-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Flowing Circuits Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              width: '100%',
              opacity: 0.2,
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            Our Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Join us for hackathons, workshops, tech talks, and collaborative coding sessions
          </motion.p>
        </motion.div>

        {/* Events Timeline/Grid */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: index % 2 === 0 ? 2 : -2,
                }}
                transition={{ duration: 0.4 }}
                className="card-3d rounded-2xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  boxShadow:
                    activeIndex === index
                      ? '0 0 60px rgba(56, 189, 248, 0.3)'
                      : '0 0 30px rgba(56, 189, 248, 0.1)',
                }}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden md:col-span-1">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover min-h-[250px]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-40"
                      style={{
                        backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-40`}
                    />

                    {/* Status Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                      className="absolute top-4 right-4 px-3 py-1 rounded-full glass border border-white/30 backdrop-blur-md"
                      style={{
                        boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)',
                      }}
                    >
                      <span className="text-xs font-bold uppercase">
                        {event.status === 'upcoming' && '🔥 Upcoming'}
                        {event.status === 'completed' && '✓ Completed'}
                        {event.status === 'recurring' && '🔁 Recurring'}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-2 p-8 flex flex-col justify-between">
                    <div>
                      <motion.h3
                        className="text-3xl font-bold mb-4 neon-text"
                        whileHover={{ scale: 1.02 }}
                      >
                        {event.title}
                      </motion.h3>

                      <p className="text-gray-400 mb-6 leading-relaxed">{event.description}</p>

                      {/* Event Details Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center">
                            <Calendar size={18} className="text-cyan-400" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Date</div>
                            <div className="text-gray-300 font-medium">{event.date}</div>
                          </div>
                        </motion.div>

                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                            <Clock size={18} className="text-purple-400" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Time</div>
                            <div className="text-gray-300 font-medium">{event.time}</div>
                          </div>
                        </motion.div>

                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center">
                            <MapPin size={18} className="text-cyan-400" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Location</div>
                            <div className="text-gray-300 font-medium">{event.location}</div>
                          </div>
                        </motion.div>

                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                            <Users size={18} className="text-purple-400" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Capacity</div>
                            <div className="text-gray-300 font-medium">{event.participants}</div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Action Button */}
                    {event.status !== 'completed' && (
                      <motion.div
                        className="mt-6"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div
                          className="inline-block px-6 py-3 rounded-full glass border border-cyan-400/50 cursor-pointer"
                          style={{
                            background:
                              'linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(168, 85, 247, 0.1))',
                            boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)',
                          }}
                        >
                          <span className="font-semibold neon-text">Register Now</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Animated Border Pulse */}
                {activeIndex === index && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      border: '2px solid rgba(56, 189, 248, 0.5)',
                      borderRadius: '1rem',
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;