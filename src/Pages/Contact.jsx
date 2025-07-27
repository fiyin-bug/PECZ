import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, Instagram, Youtube, Music, Headphones, Mic } from "lucide-react"


export const ContactUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const contactInfo = [
    { icon: Mail, text: "peczyscologne@gmail.com", href: "mailto:peczyscologne@gmail.com" },
    { icon: Phone, text: "07013084388", href: "tel:07013084388" },
    { icon: Instagram, text: "Follow us on Instagram", href: "https://www.instagram.com/peczys.c" },
   
  ]

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  const floatingIcons = [Music, Headphones, Mic]

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23c2a562%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      {floatingIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-yellow-600 opacity-20"
          initial={{ x: "-100%", y: "-100%" }}
          animate={{
            x: ["100%", "-100%"],
            y: ["100%", "-100%"],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 20 + index * 5,
            ease: "linear",
          }}
        >
          <Icon size={50 + index * 20} />
        </motion.div>
      ))}
      <motion.div
        className="bg-white bg-opacity-80 backdrop-blur-lg rounded-xl p-8 max-w-md w-full relative z-10 border border-yellow-600"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-gray-600 text-center mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
        >
          Ready to rock? Reach out to us for any inquiries, collaborations, or just to say hello!
        </motion.p>
        <motion.div className="space-y-6">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="flex items-center space-x-4 text-gray-800 hover:text-yellow-600 transition-colors duration-300 group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="bg-yellow-600 p-3 rounded-full group-hover:bg-white transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <item.icon size={24} className="text-white" />
              </motion.div>
              <span className="text-lg">{item.text}</span>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute -inset-2 bg-yellow-600 opacity-20 rounded-lg z-[-1]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  />
                )}
              </AnimatePresence>
            </motion.a>
          ))}
        </motion.div>
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <p className="text-gray-500">Let's create unforgettable moments together!</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactUs;
