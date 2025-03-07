import { motion } from 'framer-motion';

const Contact = () => (
  <motion.section
    className="max-w-7xl mx-auto md:py-24 py-16 px-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-green-200 p-8 animate-gradientMove">
      <h2 className="text-3xl font-bold text-center mb-8">Ready to Order?</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="/assets/order.png"
            alt="Contact"
            className="w-full max-w-md mx-auto hidden md:block"
          />
        </div>
        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 shadow rounded-lg">
            <span className="text-2xl">📞</span>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:9916566269" className="text-gray-600 hover:underline">
                9916566269
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 shadow rounded-lg">
            <span className="text-2xl">📧</span>
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:contact@documentsheet.com" className="text-gray-600 hover:underline">
                contact@documentsheet.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 shadow rounded-lg">
            <span className="text-2xl">💬</span>
            <div>
              <h3 className="font-semibold">WhatsApp</h3>
              <a
                href="https://wa.me/919916566269"
                className="text-orange-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Contact;
