import { Link } from 'react-router-dom';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 animate-slideUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Premium Tech Products at Unbeatable Prices
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Discover the latest gadgets and tech accessories for work, play, and
              everything in between.
            </p>
            <Link to="/products">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 flex items-center gap-2"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex-1 animate-fadeIn">
            <img
              src="https://images.unsplash.com/photo-1523206489230-c012066d937a?w=600&h=400&fit=crop"
              alt="Tech Products"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">1000+</div>
            <p className="text-blue-100">Premium Products</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <p className="text-blue-100">Customer Support</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100%</div>
            <p className="text-blue-100">Satisfaction Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );
};
