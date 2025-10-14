import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { cn } from '../lib/utils';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id='contact'
      className='py-24 px-4 relative bg-secondary/30'
    >
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In <span className='text-primary'>Touch</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8 max-md:mx-auto'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
            <div className='space-y-6 justify-between'>
              {/* ************** EMAIL ************** */}
              <div className=' text-start flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <div className=''>
                  <h4 className='font-medium '>Email</h4>
                  <a
                    className='text-muted-foreground hover:text-primary transition-colors duration-300'
                    href='mailto:hassanhammoud2000@gmail.com'
                  >
                    hassan3HaWebDev@gmail.com
                  </a>
                </div>
              </div>

              {/* ************** PHONE ************** */}
              <div className='text-start flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <div className=''>
                  <h4 className='font-medium'>Phone</h4>
                  <a
                    className='text-muted-foreground hover:text-primary transition-colors duration-300'
                    href='tel:+96170118991'
                  >
                    +961 70 118 991
                  </a>
                </div>
              </div>

              {/* ************** LOCATION ************** */}
              <div className='text-start flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div className=''>
                  <h4 className='font-medium'>Location</h4>
                  <a className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                    Halba, Akkar, Lebanon
                  </a>
                </div>
              </div>
            </div>
            <div className='pt-8'>
              <h4 className='font-medium mb-4'>Connect With Me</h4>
              <div className='flex space-x-4 justify-center '>
                <a
                  className='text-muted-foreground hover:text-primary transition-colors duration-300'
                  target='_blank'
                  href='https://www.linkedin.com/in/hassan-hammoud-3ha'
                >
                  <Linkedin size={24} />
                </a>
                <a
                  className='text-muted-foreground hover:text-primary transition-colors duration-300'
                  target='_blank'
                  href='https://github.com/Hassan-Hammoud'
                >
                  <Github size={24} />
                </a>
                <a
                  className='text-muted-foreground hover:text-primary transition-colors duration-300'
                  target='_blank'
                  href='https://www.facebook.com/hassan.hammoud.7127'
                >
                  <Facebook size={24} />
                </a>
                <a
                  className='text-muted-foreground hover:text-primary transition-colors duration-300'
                  target='_blank'
                  href='https://www.instagram.com/hssn_3ha'
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          {/* CONTACT FROM */}
          <div className='bg-card p-8 rounded-lg shadow-xs'>
            <h3 className='text-2xl font-semibold mb-6'>Send A Message</h3>
            <form
              onSubmit={handleSubmit}
              className='space-y-6'
            >
              {/* YOUR NAME */}
              <div className=''>
                <label
                  className='block text-sm font-medium mb-2'
                  htmlFor='name'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  required
                  placeholder='John Doe...'
                />
              </div>

              {/* YOUR EMAIL */}
              <div className=''>
                <label
                  className='block text-sm font-medium mb-2'
                  htmlFor='email'
                >
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  required
                  placeholder='John@domain.com'
                />
              </div>
              {/* YOUR MESSAGE */}
              <div className=''>
                <label
                  className='block text-sm font-medium mb-2'
                  htmlFor='message'
                >
                  Your Message
                </label>

                <textarea
                  id='message'
                  name='message'
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                  required
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer'
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
