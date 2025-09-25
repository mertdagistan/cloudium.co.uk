import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CLOUDIUM
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Innovative Digital
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            We specialize in creating cutting-edge software solutions that transform businesses. 
            From web applications to AI-powered tools, we bring your digital vision to life with 
            modern technology and exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Expertise
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver comprehensive digital solutions across multiple platforms and technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Web Applications */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Image
                  src="/globe.svg"
                  alt="Web Applications"
                  width={32}
                  height={32}
                  className="invert"
                />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Web Applications
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Scalable and modern platforms that streamline business processes and deliver 
                seamless user experiences with cutting-edge web technologies.
              </p>
            </div>

            {/* Mobile Applications */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-sm"></div>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Mobile Applications
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                High-performance iOS and Android apps designed for global users, 
                combining native performance with exceptional user experience.
              </p>
            </div>

            {/* AI Tools */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 text-white font-bold text-lg">AI</div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                AI Tools
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Intelligent solutions that enhance productivity, automate workflows, 
                and simplify everyday life through advanced artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About CLOUDIUM TECHNOLOGIES
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
              <p className="text-xl mb-8">
                Our UK-based technology company was founded with the vision of creating innovative 
                digital solutions and bringing them to the global market. We specialize in developing 
                web applications, mobile apps, and AI-powered tools that combine functionality, 
                performance, and user-friendly design.
              </p>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg mb-8">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Mission
                </h4>
                <p className="mb-6">
                  We believe technology is more than just a tool—it's a way to create real value 
                  across industries and everyday life. With a focus on innovation, reliability, 
                  and sustainability, our mission is to deliver digital products that help 
                  businesses and individuals thrive in a fast-changing world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Ready to transform your digital presence? Let's discuss your project.
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Email Us
                  </p>
                  <a 
                    href="mailto:info@cloudium.co.uk"
                    className="text-2xl font-bold text-blue-600 hover:text-purple-600 transition-colors"
                  >
                    info@cloudium.co.uk
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  CLOUDIUM TECHNOLOGIES LIMITED
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Based in the United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-xl font-bold">CLOUDIUM TECHNOLOGIES LIMITED</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 CLOUDIUM TECHNOLOGIES LIMITED. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}