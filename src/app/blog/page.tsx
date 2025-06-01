import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      title: "Power of E-Gaming",
      excerpt: "Exploring how e-gaming has become a cultural phenomenon and its impact on modern entertainment and social dynamics.",
      link: "/blog/power-of-e-gaming",
      category: "Gaming",
      readTime: "5 min read"
    },
    {
      title: "AI in Modern Software Development",
      excerpt: "How artificial intelligence is revolutionizing development processes and creating new paradigms in software engineering.",
      link: "/blog/ai-in-software-development",
      category: "Technology",
      readTime: "7 min read"
    },
    {
      title: "The Future of Web Design",
      excerpt: "Emerging trends in web design and how they're transforming user experiences across digital platforms.",
      link: "/blog/future-of-web-design",
      category: "Design",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#lelele] to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Latest Insights
            </span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Explore my thoughts on technology, design, and the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="bg-[#2a2a2a] rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-2 group"
            >
              <div className="h-48 bg-gradient-to-br from-yellow-600/20 to-[#2a2a2a] flex items-center justify-center">
                <div className="text-yellow-400 text-5xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                  {index === 0 && "🎮"}
                  {index === 1 && "🤖"}
                  {index === 2 && "💻"}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-yellow-400 text-sm font-medium">{post.category}</span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-6">{post.excerpt}</p>
                <Link 
                  href={post.link}
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-300"
                >
                  Read article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/blog" 
            className="inline-block px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;