import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'James K.',
    role: 'Systems Administrator',
    image: '/testimonials/james.jpg',
    quote: 'After completing the Linux Bootcamp, I went from a $65K help desk role to a $115K Linux Administrator position at a Fortune 500 company in just 2 months. The hands-on labs and interview prep made all the difference!'
  },
  {
    id: 2,
    name: 'Sarah M.',
    role: 'Cloud Engineer',
    image: '/testimonials/sarah.jpg',
    quote: 'Best investment in my career! I was struggling with Linux concepts for years, but this bootcamp\'s practical approach and real-world scenarios helped me pass my RHCSA on the first try. Now managing a cloud infrastructure team.'
  },
  {
    id: 3,
    name: 'Michael P.',
    role: 'DevOps Engineer',
    image: '/testimonials/michael.jpg',
    quote: 'The bootcamp\'s focus on automation and scripting gave me the confidence to implement enterprise-level solutions. Doubled my salary in 6 months!'
  },
  {
    id: 4,
    name: 'Lisa R.',
    role: 'Senior Systems Engineer',
    image: '/testimonials/lisa.jpg',
    quote: 'Coming from a Windows background, I was intimidated by Linux. This bootcamp broke down complex concepts into manageable pieces. Now I\'m leading Linux migrations!'
  }
];

export default function Home() {
  const router = useRouter();
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address');
      return;
    }

    // Store form data in localStorage for checkout page
    localStorage.setItem('customerData', JSON.stringify(formData));

    // Redirect to checkout page
    router.push('/checkout');
  };

  const highlightOrderForm = () => {
    const orderForm = document.querySelector('#order-form');
    if (orderForm) {
      setIsHighlighted(true);
      orderForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => setIsHighlighted(false), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Head>
        <title>Red Hat Linux Administration Bootcamp | Your Gateway to a Six-Figure Tech Career</title>
        <meta name="description" content="Transform your career in just 4 weeks with our intensive Red Hat Linux Bootcamp" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          {/* Logo */}
          <div className="w-[200px]">
            <Image
              src="/Logos/SCENERGYLINKLOGO.png"
              alt="Scenergylink Logo"
              width={200}
              height={60}
              priority
            />
          </div>
          {/* Phone Number */}
          <div>
            <a href="tel:+17033092325" className="text-xl text-gray-800 hover:text-gray-900">
              +1 (703) 309-2325
            </a>
          </div>
        </div>

        {/* Blue Banner */}
        <div className="bg-[#0067BC] text-white p-4 rounded-lg mb-8 text-center">
          <p className="text-xl font-medium">
            From Novice to Linux Pro, Power Up Your Tech Career, Professional Linux Engineering Starts Here
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0">
                    <Image
                      src="/linuxmuscular.png"
                      alt="Linux Muscular"
                      width={64}
                      height={64}
                      className="rounded-full"
                      priority
                    />
                  </div>
                </div>
                <div className="h-[60px] w-[200px] relative">
                  <Image
                    src="/Logos/SCENERGYLINKLOGO.png"
                    alt="Scnergylink Logo"
                    width={200}
                    height={60}
                    priority
                  />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-[#333] leading-tight">
                RED HAT LINUX ADMINISTRATION BOOTCAMP
              </h1>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
                  Master Red Hat Linux: Your Gateway to a Six-Figure Tech Career
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Transform your career in just 4 weeks with our intensive Red Hat Linux Bootcamp - designed for ambitious professionals ready to command top positions in tech.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Why This Bootcamp Is Different
                </h3>
                <p className="text-lg text-gray-600">
                  Our proven system has launched over 500 successful Linux administrators into high-paying positions. We don't just teach - we transform careers.
                </p>
              </div>
            </div>

            {/* Video Section */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <video
                  className="w-full h-full"
                  controls
                  preload="auto"
                  controlsList="nodownload"
                  playsInline
                >
                  <source src="/videos/TestVideo_training.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 text-center bg-gray-50 border-t border-gray-100">
                <p className="text-red-600 font-semibold">
                  Watch This Video Before You Sign Up!
                </p>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-white rounded-lg p-6 shadow-lg mt-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div>
                  <p className="text-xl text-gray-800 font-medium mb-2">
                    "This bootcamp changed my career trajectory completely!"
                  </p>
                  <p className="text-gray-600">
                    -- <span className="text-teal-600">John Smith</span>, Senior Linux Administrator
                  </p>
                </div>
              </div>
            </div>

            {/* Special Offer Section */}
            <div className="mt-12 space-y-8">
              <div className="text-center">
                <p className="text-red-500 font-handwriting text-2xl mb-4">Our Best Offer in History...</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Get Lifetime Access To Our Complete Red Hat Linux Administrator Training Program...
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 mb-8">
                  ...And Over 27 Hours of Hands-On Labs, Practice Tests, and Career Resources For <span className="font-bold">99% Off!</span>
                </p>
                <button 
                  onClick={() => highlightOrderForm()}
                  className="bg-[#0067BC] text-white text-xl px-8 py-4 rounded-lg shadow-lg hover:bg-[#005ba8] transition-colors mb-8"
                >
                  Yes! I Want All Access For Just $599!
                </button>
                <p className="text-gray-600 font-handwriting text-xl">
                  Keep Scrolling to See Everything You're Getting Today...
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-center">
                  <p className="text-red-500 text-2xl mb-4">Amazing Offer #1</p>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    The Complete RHCSA Certification Training Program!
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    The Red Hat Administrator Bootcamp helps you master every required skill to become a certified Linux professional in just 4 weeks, including system administration, networking, security, and all essential RHCSA exam topics.
                  </p>
                  
                  <div className="text-left max-w-2xl mx-auto">
                    <h4 className="text-xl font-semibold mb-4">Our proven curriculum includes:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>48+ hours of live instructor-led training</li>
                      <li>100+ hands-on lab exercises</li>
                      <li>Practice exam simulations</li>
                      <li>Resume building workshops</li>
                      <li>Interview preparation</li>
                      <li>Career coaching sessions</li>
                      <li>Lifetime access to course materials</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200"></div>
                <div>
                  <p className="text-lg font-bold text-gray-800">
                    "This bootcamp changed my career trajectory completely!"
                  </p>
                  <p className="text-gray-600">
                    -- John Smith, Senior Linux Administrator
                  </p>
                </div>
              </div>
            </div>

            {/* Success Journey Section */}
            <div className="bg-[#1a2937] text-white rounded-xl p-8 mt-12">
              <div className="text-center mb-8">
                <p className="text-teal-400 font-handwriting text-2xl mb-4">Here's What You Can Expect...</p>
                <h2 className="text-4xl font-bold mb-4">Your Success Journey</h2>
                <p className="text-xl font-semibold text-teal-400 mb-2">The Numbers Speak</p>
                <ul className="space-y-2 text-gray-300">
                  <li>98% first-attempt RHCSA certification success</li>
                  <li>85% job placement within 3 months</li>
                  <li>Average salary increase: $65,000+</li>
                  <li>Lifetime access to course materials</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Week 1 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-teal-400 text-2xl">✓</span>
                    <h3 className="text-xl font-bold">Week 1: Foundation</h3>
                  </div>
                  <ul className="pl-9 space-y-1 text-gray-300">
                    <li>Linux fundamentals</li>
                    <li>Command line mastery</li>
                    <li>System navigation</li>
                    <li>Basic administration</li>
                  </ul>
                </div>

                {/* Week 2 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-teal-400 text-2xl">✓</span>
                    <h3 className="text-xl font-bold">Week 2: Advanced Skills</h3>
                  </div>
                  <ul className="pl-9 space-y-1 text-gray-300">
                    <li>User management</li>
                    <li>Storage administration</li>
                    <li>Network configuration</li>
                    <li>Security implementation</li>
                  </ul>
                </div>

                {/* Week 3 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-teal-400 text-2xl">✓</span>
                    <h3 className="text-xl font-bold">Week 3: Enterprise Ready</h3>
                  </div>
                  <ul className="pl-9 space-y-1 text-gray-300">
                    <li>Service management</li>
                    <li>Container operations</li>
                    <li>System monitoring</li>
                    <li>Performance tuning</li>
                  </ul>
                </div>

                {/* Week 4 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-teal-400 text-2xl">✓</span>
                    <h3 className="text-xl font-bold">Week 4: Career Launch</h3>
                  </div>
                  <ul className="pl-9 space-y-1 text-gray-300">
                    <li>RHCSA exam preparation</li>
                    <li>Mock interviews</li>
                    <li>Resume workshops</li>
                    <li>Job search strategy</li>
                  </ul>
                </div>
              </div>

              <div className="text-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Graduate Success Formula</h3>
                  <p className="text-gray-300 text-xl">
                    Go from beginner to certified Red Hat professional in just 4 weeks with our proven curriculum and step-by-step guidance...
                  </p>
                </div>

                <button 
                  onClick={() => highlightOrderForm()}
                  className="bg-[#0067BC] text-white text-xl px-8 py-4 rounded-lg shadow-lg hover:bg-[#005ba8] transition-colors"
                >
                  Yes! I Want Lifetime Access For Just $599!
                </button>

                <p className="text-gray-300 font-handwriting text-xl">
                  Keep scrolling to see everything you're getting! 
                </p>
              </div>
            </div>

            {/* Linux Mastery Section */}
            <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Linux Mastery is Essential in Every IT Career Path
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      For Cybersecurity Professionals
                    </h3>
                    <p className="text-gray-600">
                      Linux serves as the backbone of security operations, offering unparalleled advantages in threat detection and prevention. Its open-source nature allows security experts to examine code for vulnerabilities and implement robust security measures. With built-in firewalls, encryption capabilities, and comprehensive auditing tools, Linux provides the essential framework for security operations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      For Software Developers
                    </h3>
                    <p className="text-gray-600">
                      The development landscape heavily relies on Linux, with two-thirds of web servers running on Linux environments. Its powerful command-line interface enables efficient coding, testing, and deployment processes. The platform offers native support for virtually all programming languages and provides a stable, modular environment perfect for development work.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      For Data Engineers
                    </h3>
                    <p className="text-gray-600">
                      Data engineering professionals primarily work with Linux virtual machines and servers, whether in public clouds or private infrastructure. Understanding Linux commands and shell scripting is crucial for managing data pipelines, automating workflows, and handling large-scale data operations.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      For System Administrators
                    </h3>
                    <p className="text-gray-600">
                      Linux's stability and reliability make it ideal for server management and system administration. Its modular architecture allows for precise control over system resources, while its extensive toolset enables efficient system monitoring and maintenance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Core Skills Across All Fields
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Command-line interface mastery</li>
                      <li>Shell scripting (Bash, Python)</li>
                      <li>System security configuration</li>
                      <li>Package management</li>
                      <li>Network administration</li>
                      <li>Performance monitoring</li>
                      <li>Version control with Git</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Career Advantages
                    </h3>
                    <p className="text-gray-600">
                      Mastering Linux significantly enhances your employability in the tech sector. Its widespread adoption across industries, from startups to enterprise organizations, makes Linux expertise a valuable asset for career advancement. The platform's reliability, security features, and cost-effectiveness have made it the preferred choice for companies worldwide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button 
                  onClick={() => highlightOrderForm()}
                  className="bg-[#0067BC] text-white text-xl px-8 py-4 rounded-lg shadow-lg hover:bg-[#005ba8] transition-colors"
                >
                  Yes! I Want Lifetime Access For Just $599!
                </button>
              </div>
            </div>

            {/* Success Stories Section */}
            <div className="bg-gray-900 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Success Stories from Our Graduates
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Join thousands of successful professionals who transformed their careers through our program
                  </p>
                </div>
                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-gray-800 rounded-lg p-6 space-y-4 relative overflow-hidden"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                          <p className="text-[#0067BC]">{testimonial.role}</p>
                        </div>
                      </div>
                      <blockquote>
                        <p className="text-gray-300 text-lg">"{testimonial.quote}"</p>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="max-w-4xl mx-auto my-20">
              <div className="text-center mb-12">
                <p className="text-2xl text-[#0067BC] font-handwriting">Awesome Offer #27</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Last But <span className="underline decoration-[#0067BC] decoration-4">Definitely</span> Not Least, You'll Get Our
                  <span className="block">Ultimate Linux Administrator's Toolkit!</span>
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  ...Get all of our best resources and reference materials covering each and every aspect of Linux system administration including:
                </p>
              </div>

              {/* Features List */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl p-8 mb-12 border border-gray-100">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ul className="space-y-6">
                      <li className="flex items-center space-x-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-[#0067BC]/10 rounded-lg flex items-center justify-center">
                          <span className="text-[#0067BC] text-xl">✓</span>
                        </span>
                        <span className="text-gray-700 text-lg">Complete command reference guides</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-[#0067BC]/10 rounded-lg flex items-center justify-center">
                          <span className="text-[#0067BC] text-xl">✓</span>
                        </span>
                        <span className="text-gray-700 text-lg">System troubleshooting playbooks</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-[#0067BC]/10 rounded-lg flex items-center justify-center">
                          <span className="text-[#0067BC] text-xl">✓</span>
                        </span>
                        <span className="text-gray-700 text-lg">Security hardening checklists</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-[#0067BC]/10 rounded-lg flex items-center justify-center">
                          <span className="text-[#0067BC] text-xl">✓</span>
                        </span>
                        <span className="text-gray-700 text-lg">Performance optimization templates</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-6">
                      <li className="flex items-center space-x-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-[#0067BC]/10 rounded-lg flex items-center justify-center">
                          <span className="text-[#0067BC] text-xl">✓</span>
                        </span>
                        <span className="text-gray-700 text-lg">Network configuration guides</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-[#0067BC]/10 rounded-lg flex items-center justify-center">
                          <span className="text-[#0067BC] text-xl">✓</span>
                        </span>
                        <span className="text-gray-700 text-lg">Shell scripting examples</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-[#0067BC]/10 rounded-lg flex items-center justify-center">
                          <span className="text-[#0067BC] text-xl">✓</span>
                        </span>
                        <span className="text-gray-700 text-lg">And much more...</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <p className="text-xl font-bold text-gray-900">
                    Total Value: <span className="line-through text-gray-500">$997</span> 
                    <span className="text-[#0067BC] ml-2">Included Free!</span>
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <button 
                  onClick={() => highlightOrderForm()}
                  className="bg-[#0067BC] text-white text-xl px-12 py-4 rounded-lg shadow-lg hover:bg-[#005ba8] transition-all duration-300 transform hover:scale-105 mb-8"
                >
                  Yes! I Want All Access For Just $599!
                </button>
                <p className="text-[#0067BC] text-2xl font-handwriting mt-4">
                  INCLUDED In This Amazing Offer!
                </p>
              </div>
            </div>

            {/* Final Call to Action Section */}
            <div className="max-w-4xl mx-auto my-20 text-center">
              <div className="bg-gradient-to-br from-[#1a2937] to-[#2d3f50] text-white rounded-2xl p-8 md:p-12 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Get Lifetime Access To Our Complete Linux Administrator Training Program
                  <span className="block text-[#0067BC] mt-2">For Just $599!</span>
                </h2>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
                  <div className="flex items-start space-x-3">
                    <span className="text-[#0067BC] text-xl">→</span>
                    <span>Over 27 hours of hands-on training</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#0067BC] text-xl">→</span>
                    <span>RHCSA exam preparation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#0067BC] text-xl">→</span>
                    <span>Career advancement resources</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#0067BC] text-xl">→</span>
                    <span>Interview preparation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#0067BC] text-xl">→</span>
                    <span>Resume building workshops</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#0067BC] text-xl">→</span>
                    <span>Lifetime community access</span>
                  </div>
                </div>

                <p className="text-2xl font-bold text-[#0067BC] mb-12">
                  (Total Value: <span className="line-through text-gray-400">$2,997</span>)
                </p>

                {/* Steps */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">
                    Take Action Now:
                  </h3>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-[#0067BC] rounded-full flex items-center justify-center text-white font-bold">1</span>
                      <span>Click the button below</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-[#0067BC] rounded-full flex items-center justify-center text-white font-bold">2</span>
                      <span>Complete your registration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-[#0067BC] rounded-full flex items-center justify-center text-white font-bold">3</span>
                      <span>Start your journey to a six-figure Linux career today</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => highlightOrderForm()}
                  className="bg-[#0067BC] text-white text-xl px-12 py-6 rounded-xl shadow-lg hover:bg-[#005ba8] transition-all duration-300 transform hover:scale-105 mb-8 font-bold"
                >
                  Yes! I Want Lifetime Access For Just $599!
                </button>

                {/* Warning */}
                <p className="text-yellow-400 text-xl font-bold mb-8 animate-pulse">
                  WARNING: Only 10 Spots Remaining at This Price!
                </p>

                {/* Final Note */}
                <p className="text-lg text-gray-300 mb-8">
                  Remember: Your success in tech starts with this one decision. Don't wait - these spots will fill up fast!
                </p>

                {/* Contact Information */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <p className="text-lg">
                    Call Us today for more Information: 
                    <a href="tel:+17033092325" className="text-red-500 font-extrabold hover:text-red-400 transition-colors ml-2 text-xl">
                      +1 (703) 309-2325
                    </a>
                  </p>
                  <div className="text-center mt-8 pb-4 text-white">
                    <p>Powered by SCENERGYLINK LLC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Form */}
          <div 
            id="order-form"
            className={`bg-white rounded-lg shadow-lg p-6 sticky top-4 transition-all duration-300 ${
              isHighlighted ? 'ring-8 ring-red-500 scale-[1.02] animate-pulse' : ''
            }`}
          >
            <div className="bg-[#0067BC] text-white p-4 rounded-t-lg -mt-6 -mx-6 mb-6">
              <h3 className="text-2xl font-bold text-center">
                SPECIAL OFFER: Lifetime Access Just $599!
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Step 1: Enter Your Contact Information
                </h4>
                {formError && (
                  <div className="text-red-500 text-sm mb-4">
                    {formError}
                  </div>
                )}
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone no."
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Step 2: Complete Your Order!
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Red Hat Linux Bootcamp - Limited Time Offer!</span>
                    <span className="font-bold">$599</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    All prices in USD
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#0067BC] text-white py-4 rounded-lg font-bold text-xl hover:bg-[#005ba8] transition-colors"
                >
                  Secure Your Spot Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
