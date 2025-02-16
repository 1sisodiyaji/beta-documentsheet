import { useState } from 'react';
import { toast } from 'react-toastify';

const ContactPageMessage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, mobile, message } = formData;

    if (!name.trim()) {
      toast.error('Name is required!');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      toast.error('Valid email is required!');
      return false;
    }

    if (!mobile.trim() || !/^\d{10}$/.test(mobile)) {
      toast.error('Valid 10-digit mobile number is required!');
      return false;
    }

    if (!message.trim()) {
      toast.error('Message cannot be empty!');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/user/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Feedback submitted successfully!');
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        toast.error('Failed to submit feedback. Try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-start space-y-4 md:py-6  md:pb-0 pb-20 md:space-y-0 md:space-x-4 ">
        <div className="w-full md:w-1/2 p-4">
          <iframe
            src="https://lottie.host/embed/d6822f26-b60e-4b30-a3dd-5684a85a6223/bBLzC6lflG.lottie"
            className="w-full md:h-[50vh]"
            frameBorder="0"
            title="contact-animations"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 p-4 bg-gray-50 rounded-lg shadow border-2">
          <form className="max-w-3xl" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-400 rounded-md"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-400 rounded-md"
              required
            />

            <label>Mobile Number</label>
            <input
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-400 rounded-md"
              required
              maxLength={10}
            />

            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-400 rounded-md"
              rows="4"
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full mt-4 p-2 font-regular rounded-md ${
                isLoading
                  ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                  : 'bg-[#219B9D] hover:bg-[#1A776F] text-white'
              }`}
            >
              {isLoading ? 'Submitting' : 'Raise a Query'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPageMessage;
