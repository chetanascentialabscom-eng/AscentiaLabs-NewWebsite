import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Tag,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import SEO from "../../components/SEO";
import { seoData } from "../../utils/seoData";

const TravelMargin2026 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black">
      <SEO {...seoData.travelmargin2026} />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>

            <div className="mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                <Tag className="w-3 h-3 mr-2" />
                Travel
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl  mb-6 text-white leading-tight">
              The 2-Minute Itinerary: How 60% of Travel Leaders are Reclaiming
              Their Margins in 2026
            </h1>

            <div className="flex flex-wrap items-center text-blue-200/80 mb-8 gap-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Arham Jain</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>15/05/2026</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>7 min read</span>
              </div>
              {/* <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                <span>Share</span>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-400/20 p-6 md:p-8">
              {/* Featured Image */}
              <div className="mb-6">
                <img
                  src="/blogs/blog8.png"
                  alt="Tourism Report 2025"
                  className="w-full h-64 md:h-96 object-cover rounded-xl"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-blue-200/80 leading-relaxed mb-6">
                  The data for 2026 is officially in, and it signals a
                  "strategic inflection point" for travel agencies. According to
                  the latest research from Phocuswright, over 60% of travel
                  businesses have shifted their focus toward Agentic AI—systems
                  that don't just "chat" but actually execute complex tasks
                  across workflows.
                </p>
                <h2 className="text-3xl text-white mb-4 mt-8">
                  But according to the Phocuswright 2026 Travel Technology
                  Report
                </h2>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-slate-800/30 border border-blue-400/20 p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-8 h-8 text-blue-400 mr-3" />
                      <h3 className="text-xl text-white">
                        Search Engine Decline
                      </h3>
                    </div>

                    <p className="text-3xl text-blue-400 mb-2">51% → 36%</p>

                    <p className="text-blue-200/80">
                      Travel agencies are moving away from traditional search
                      engines as their primary planning tool.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 border border-blue-400/20 p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <BarChart3 className="w-8 h-8 text-green-500 mr-3" />
                      <h3 className="text-xl text-white">Automation Shift</h3>
                    </div>

                    <p className="text-3xl text-green-500 mb-2">60%</p>

                    <p className="text-blue-200/80">
                      Travel leaders are reclaiming margins by adopting
                      automated itinerary planning engines and reducing manual
                      friction.
                    </p>
                  </div>
                </div>
                <p className="text-blue-200/80">
                  If your team is still manually building packages, you are
                  essentially paying a "legacy tax" on every booking.
                </p>

                <h2 className="text-3xl  text-white mb-4 mt-8">
                  To stay competitive, the research suggests focusing on three
                  pillars of automation:
                </h2>

                <h3 className="text-2xl  text-white mb-3 mt-6">
                  1. Instant Dynamic Packaging
                </h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Reducing the build-time for complex trips from hours to under
                  2 minutes.
                </p>

                <h3 className="text-2xl  text-white mb-3 mt-6">
                  2. Commercial Policy Automation
                </h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Removing human error from markup and policy management.
                </p>

                <h3 className="text-2xl  text-white mb-3 mt-6">
                  3. Booking Atomicity
                </h3>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  Ensuring 100% reliability in multi-supplier itineraries.
                </p>

                {/* <div className="bg-gradient-to-r from-blue-600 to-black text-white p-6 rounded-xl my-8">
                  <h3 className="text-2xl  mb-6">
                    Usage of Different Travel Apps by Travelers
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl  mb-2">45%</div>
                      <div className="text-blue-100">Flight Booking Apps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl  mb-2">38%</div>
                      <div className="text-blue-100">Hotel Booking Apps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl  mb-2">32%</div>
                      <div className="text-blue-100">Travel Planning Apps</div>
                    </div>
                  </div>
                </div> */}

                {/* <h2 className="text-3xl  text-white mb-4 mt-8">
                  The 2026 Solution: Global vs. Category-Wise Logic
                </h2> */}

                {/* <h3 className="text-2xl  text-white mb-3 mt-6">
                  Virtual Reality (VR) and Augmented Reality (AR)
                </h3> */}
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  We built Route Maestro to align with exactly where the
                  industry is heading. While the Phocuswright report shows that
                  many firms are still "experimenting," Route Maestro users are
                  already "scaling"—building faster, booking smarter, and
                  keeping their overhead low.
                </p>

                <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
                  <h4 className=" text-blue-300 mb-2">
                    Official Research Source
                  </h4>
                  <p className="text-blue-100">
                    <a
                      href="https://www.phocuswright.com/Travel-Research/Research-Updates/2026/Report-Preview-Phocuswrights-Travel-Innovation-and-Technology-Trends-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500"
                    >
                      You can read the full industry breakdown and technological
                      benchmarks in the official Phocuswright 2026 Travel
                      Innovation Report here: View Official Report
                    </a>
                  </p>
                </div>
                {/* <h2 className="text-3xl  text-white mb-4 mt-8">
                  Future Predictions
                </h2>
                <p className="text-blue-100/90 leading-relaxed mb-6">
                  The travel industry is expected to continue its digital
                  transformation, with mobile applications becoming even more
                  integral to the travel experience. We anticipate increased
                  integration of IoT devices, blockchain technology for secure
                  transactions, and enhanced AI capabilities for predictive
                  travel analytics.
                </p> */}

                <div className="mt-8 pt-6 border-t border-blue-400/20">
                  <Link
                    to="/blog"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300  transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Return To Blogs
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Other Blogs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl  text-white mb-4">
              Other Blogs
            </h2>
            <p className="text-blue-200/80 text-lg">
              Explore more insights and articles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link to="/travel-app-development-in-tourism" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img
                  src="/blogs/blog1.jpg"
                  alt="Travel App Development"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Travel
                  </span>
                  <h3 className="text-xl  text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    HOW DID TRAVEL APP DEVELOPMENT BECOME CRUCIAL IN THE TOURISM
                    ...
                  </h3>
                  <div className="flex items-center text-sm text-blue-300/70 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">Arham Jain</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>18/06/2025</span>
                  </div>
                  <p className="text-blue-400 ">Read More →</p>
                </div>
              </article>
            </Link>

            <Link to="/benefits-ai-travel-tourism" className="group">
              <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img
                  src="/blogs/blog3.jpg"
                  alt="AI in Travel"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    AI & Technology
                  </span>
                  <h3 className="text-xl  text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                    BENEFITS OF AI IN TRAVEL AND TOURISM INDUSTRY
                  </h3>
                  <div className="flex items-center text-sm text-blue-300/70 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">Tech Team</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>12/06/2025</span>
                  </div>
                  <p className="text-blue-400 ">Read More →</p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelMargin2026;
