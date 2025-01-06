import  { useState } from 'react';
import { Search } from 'lucide-react';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState({});

  const categories = ['All', 'Shopping', 'Orders', 'Shipping', 'Returns', 'Sellers'];

  const faqData = [
    {
      question: "How do I create an account?",
      answer: "Creating an account is simple! Click the \"Sign Up\" button in the top right corner of our website. Fill in your details including name, email, and password. Verify your email address through the link we'll send you, and you're ready to start shopping!",
      category: "Shopping"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and digital wallets. All payments are processed securely through our encrypted payment system.",
      category: "Shopping"
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the \"Order History\" section. There you'll find detailed information about your order status and shipping updates.",
      category: "Orders"
    },
    {
      question: "How do I become a seller?",
      answer: "To become a seller, click on the \"Become a Seller\" link in the footer. Complete the seller application form, provide necessary documentation, and agree to our seller terms. Once approved, you can start listing your products and managing your shop.",
      category: "Sellers"
    },
    {
      question: "What is your return policy?",
      answer: "Our return policy varies by seller. Generally, items can be returned within 30 days of delivery if they're in original condition. Check the specific product page for detailed return information. Some items may not be eligible for return.",
      category: "Returns"
    }
  ];

  const toggleItem = (index: string | number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const FAQItem = ({ question, answer, index }) => (
    <div className="bg-white rounded-lg shadow-sm p-4 transition-all duration-200 hover:shadow-md">
      <button
        onClick={() => toggleItem(index)}
        className="w-full text-left flex justify-between items-center"
      >
        <span className="font-semibold text-gray-800">{question}</span>
        <span className={`transform transition-transform duration-200 ${expandedItems[index] ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {expandedItems[index] && (
        <div className="mt-4 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600">Find answers to common questions about our marketplace</p>
      </div>

      {/* Search */}
      <div className="relative max-w-xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search your question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              activeCategory === category
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-800 hover:bg-gray-100'
            } shadow-sm`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;