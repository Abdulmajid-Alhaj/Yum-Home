function FAQ() {
    return (
      <section className=" py-10 bg-[#15192A] sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <h1 className=" text-[#F1543F] font-montserratefont font-semibold text-[20px] mb-4">FAQ</h1>
          <div className=" mx-auto mt-8 space-y-4 md:mt-16">
            {questions.map((question, index) => (
              <div
                key={index}
                className=" duration-200 cursor-pointer hover:bg-[#242332] hover:translate-y-3  "
              >
                <button
                  type="button"
                  id={`question${index + 1}`}
                  data-state="closed"
                  className="flex items-center justify-between w-full px-4 py-5  sm:p-6"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="flex text-lg font-semibold space-x-9">
                    <span style={{ color: '#F1543F',fontSize:'40px' }}>0{index + 1}</span> 
                    <span style={{ color: '#ffffff' }}>{question.title}</span>
                  </span>
                  <svg
                    id={`arrow${index + 1}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`answer${index + 1}`}
                  style={{ display: 'none' }}
                  className="px-4 pb-5   sm:px-6 sm:pb-6"
                >
                  <p className=" pl-20  text-white">{question.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white text-base mt-9">
            Show more 
          </p>
          
        </div>
      </section>
    );
  }

  const questions = [
    {
      title: 'What types of events do you plan?',
      answer: 'We specialize in a variety of events including weddings, corporate events, private parties, themed events, and more. Visit our Services page for a complete list.`',
    },
    {
      title: 'How do I get started with planning my event?',
      answer: 'Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.',
    },
    {
      title: 'How far in advance should I book your services?',
      answer: 'We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.',
    },
    {
      title: 'How do you handle unexpected issues on the event day?',
      answer: 'Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.',
    },
   
  ];
  
  function toggleAnswer(index) {
    const answer = document.getElementById(`answer${index + 1}`);
    const arrow = document.getElementById(`arrow${index + 1}`);
  
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
      arrow.style.transform = 'rotate(-180deg)';
    } else {
      answer.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
    }
  }
  
  export default FAQ;












