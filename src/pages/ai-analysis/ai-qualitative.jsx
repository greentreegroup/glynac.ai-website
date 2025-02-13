import React from "react";
import {Typography } from "@material-tailwind/react";
import { Footer } from '@/widgets/layout/Footer'; // Ensure the path is correct

export function Qualitative() {
  return (
    <>
    <div>
      {/* Hero Section */}
      <div className="h-[60vh] flex flex-col justify-center bg-gray-200 text-black text-center">
        <div className="pt-16"> {/* Adjusted padding top for the text */}
          <h1 className="text-6xl font-bold mb-6">AI Analysis</h1>
          <p className="text-xl max-w-4xl mx-auto">
            Our AI-powered analysis provides a comprehensive view of workplace communication by examining both qualitative and quantitative factors. This data-driven approach helps businesses foster a more connected, productive, and positive work environment.
          </p>
        </div>
      </div>

      {/* AI Qualitative Section */}
      <div className="py-12 px-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-8">Qualitative Analysis Category</h2>

        {/* Subsection: Positive Language */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4 flex items-center justify-start">
            <span className="mr-2">✔</span> Positive Language
          </h4>
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 text-left">
              <p>
                Our AI detects language that reflects positivity, agreement, and an action-oriented mindset. This includes encouraging statements, solution-focused responses, and proactive communication that fosters collaboration. Ensuring a positive language environment promotes communication efficiency, teamwork, and a constructive workplace culture.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2 flex items-center justify-start">
                <span className="mr-2">⭐</span> How can this be useful?
              </h5>
              <p>
                Positive language fosters a collaborative and motivating work environment. Businesses that track positive language can ensure employees maintain a constructive approach to workplace interactions. Proper monitoring can also enhance customer interactions, employee engagement, and productivity.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2 flex items-center justify-start">
                <span className="mr-2">📊</span> How to measure?
              </h5>
              <p>
                A frequency score is assigned based on the number of positive phrases detected per 10,000 words. For example, a score of 8 would mean 8 instances of positive language in that volume of text.
              </p>
            </div>
            <div className="w-full md:w-1/4 transform -translate-x-40">
              <img src="/img/positive-language.png" alt="Positive Language" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        {/* Subsection: Complaint Language */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4 flex items-center justify-start">
            <span className="mr-2">✔</span> Complaint Language
          </h4>
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 text-left">
              <p>
                We analyze messages related to workplace concerns, including management complaints, pay issues, working environment dissatisfaction, and employee retention topics. Understanding complaint patterns helps organizations address recurring issues proactively, improving employee satisfaction and retention.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2 flex items-center justify-start">
                <span className="mr-2">⭐</span> How can this be useful?
              </h5>
              <p>
                Identifying complaint language helps businesses recognize underlying employee concerns, such as dissatisfaction with management, pay disputes, or workplace conditions. Recognizing patterns in complaints enables businesses to address recurring issues, implement policy improvements, and improve retention rates.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2 flex items-center justify-start">
                <span className="mr-2">📊</span> How to measure?
              </h5>
              <p>
                Complaint language is measured by tracking the frequency of dissatisfaction-related statements per 10,000 words. For example, a score of 6 would indicate that 6 instances of complaint language were found in the given text sample.
              </p>
            </div>
            <div className="w-full md:w-1/4 transform -translate-x-40">
              <img src="/img/complaint-language.png" alt="Complaint Language" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        {/* Subsection: Negative Language */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4 flex items-center justify-start">
            <span className="mr-2">✔</span> Negative Language
          </h4>
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 text-left">
              <p>
                Our system identifies language that is problem-focused, resistant, or expresses refusal. This includes statements that emphasize obstacles, convey a lack of capability, or focus on issues without proposing solutions. Recognizing negative language early enables businesses to implement corrective actions and encourage a more solution-driven mindset.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2 flex items-center justify-start">
                <span className="mr-2">⭐</span> How can this be useful?
              </h5>
              <p>
                Use of negative language in the workplace environment can lead to a toxic or inefficient work culture. Employees who focus on problems without focusing on solutions will result in decreased morale. Monitoring negative language allows businesses to track the trends of frustration and intervene with support and solutions.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2 flex items-center justify-start">
                <span className="mr-2">📊</span> How to measure?
              </h5>
              <p>
                Negative language is quantified by counting instances of problem-focused, resistant, or frustrated statements per 10,000 words.
              </p>
            </div>
            <div className="w-full md:w-1/4 transform -translate-x-40">
              <img src="/img/negative-language.png" alt="Negative Language" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        {/* Subsection: Unclear Language */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4 flex items-center justify-start">
            <span className="mr-2">✔</span> Unclear Language
          </h4>
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 text-left">
              <p>
                We track writing patterns that exhibit circular logic, where ideas are repeated without clear progression, leading to confusion or miscommunication. Identifying unclear communication helps teams improve clarity, reduce misunderstandings, and enhance overall productivity.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2 flex items-center justify-start">
                <span className="mr-2">⭐</span> How can this be useful?
              </h5>
              <p>
                Unclear communication can lead to misunderstandings, project delays, and inefficiencies. By analyzing unclear language, businesses can improve communication practices, ensuring employees convey their messages concisely and effectively.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2 flex items-center justify-start">
                <span className="mr-2">📊</span> How to measure?
              </h5>
              <p>
                Unclear language is assessed by detecting instances of redundant, circular, or ambiguous statements per 10,000 words.
              </p>
            </div>
            <div className="w-full md:w-1/4 transform -translate-x-40">
              <img src="/img/unclear-language.png" alt="Unclear Language" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        {/* Subsection: Harassment Language */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4 flex items-center justify-start">
            <span className="mr-2">✔</span> Harassment Language
          </h4>
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 text-left">
              <p>
                Our AI detects language that may intimidate, embarrass, or harass others. This includes words or phrases that create a hostile work environment. Each instance is measured for frequency per 10,000 words to provide objective insights. Monitoring harassment-related language allows organizations to maintain a respectful workplace and ensure compliance with company policies.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2 flex items-center justify-start">
                <span className="mr-2">⭐</span> How can this be useful?
              </h5>
              <p>
                Workplace harassment can create a disrespectful environment, lowering morale and reducing retention rates. Proactively monitoring such language also ensures compliance with workplace policies and legal regulations, helping organizations maintain a respectful and inclusive culture.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2 flex items-center justify-start">
                <span className="mr-2">📊</span> How to measure?
              </h5>
              <p>
                Harassment language is measured by tracking occurrences of words or phrases that could intimidate, embarrass, or threaten others per 10,000 words.
              </p>
            </div>
            <div className="w-full md:w-1/4 transform -translate-x-40">
              <img src="/img/harassment-language.png" alt="Harassment Language" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>        
      </div>

      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl container mx-auto px-8 flex items-center">
          {/* Left Side: Image */}
          <div className="w-1/2 pr-12">
            <img
              src="/img/training-image.png" // Replace with relevant image
              alt="Training"
              className="w-full h-[400px] object-contain rounded-lg shadow-none"
            />
          </div>

          {/* Right Side: Title and Text */}
          <div className="w-1/2">
            <Typography variant="h3" color="blue-gray" className="font-bold text-3xl mb-6">
              Training
            </Typography>
            <Typography color="blue-gray" className="text-xl">
              Users can review and validate AI-identified language choices to refine sentiment analysis. By accepting or rejecting classifications, organizations can continuously train the AI for more accurate and tailored monitoring. This iterative learning process helps businesses fine-tune their communication analysis and create a healthier work environment.
            </Typography>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl container mx-auto px-8 text-center">
          {/* Section Text */}
          <Typography variant="h2" color="blue-gray" className="text-4xl font-bold mb-8">
            How can AI Qualitative Analysis be useful?
          </Typography>

          <Typography color="blue-gray" className="text-xl mb-12 max-w-3xl mx-auto">
            Effective workplace communication is the foundation of a productive, inclusive, and collaborative environment. By analyzing qualitative aspects of language, organizations gain deeper insights into employee sentiment, team dynamics, and potential areas of concern. In an era where communication is fast-paced and often digital, AI-driven qualitative analysis allows businesses to improve morale and cultivate an environment where respect and efficiency thrive together.
          </Typography>

          {/* Centered Image */}
          <div className="w-full flex justify-center">
            <img
              src="/img/inclusive.png"
              alt="Inclusive"
              className="w-1/2 object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>


    </div>
    {/* Footer */}
    <Footer />
    </>
  );
}

export default Qualitative;
