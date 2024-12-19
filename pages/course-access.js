import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CourseAccess() {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const details = localStorage.getItem('orderDetails');
    if (details) {
      setOrderDetails(JSON.parse(details));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <Head>
        <title>Course Access - RHCSA Bootcamp</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Welcome to RHCSA Bootcamp!
          </h1>

          {orderDetails && (
            <div className="mb-6">
              <p className="text-gray-600">
                Order ID: {orderDetails.orderId}
              </p>
            </div>
          )}

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Getting Started
              </h2>
              <div className="prose max-w-none">
                <p>Welcome to your RHCSA Bootcamp! Here's how to get started:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Join our Discord community for support</li>
                  <li>Schedule your 1-on-1 orientation call</li>
                  <li>Download the course materials</li>
                  <li>Set up your lab environment</li>
                </ol>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Course Materials
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      📚 Course Syllabus
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      📝 Study Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      🖥️ Lab Setup Instructions
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  Support Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-green-600 hover:text-green-800 flex items-center"
                    >
                      💬 Join Discord Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-green-600 hover:text-green-800 flex items-center"
                    >
                      📅 Schedule Orientation Call
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+17033092325"
                      className="text-green-600 hover:text-green-800 flex items-center"
                    >
                      📞 Call Support: +1 (703) 309-2325
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">
                Important Dates
              </h3>
              <ul className="space-y-2">
                <li>Course Start Date: Immediate Access</li>
                <li>Course Duration: 12 weeks</li>
                <li>Live Sessions: Weekly (Schedule TBA)</li>
                <li>Office Hours: Mon-Fri 9AM-5PM EST</li>
              </ul>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Need assistance? Call us at{' '}
              <a
                href="tel:+17033092325"
                className="text-blue-600 hover:text-blue-700"
              >
                +1 (703) 309-2325
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
