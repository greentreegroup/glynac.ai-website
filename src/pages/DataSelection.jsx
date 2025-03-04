import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Typography } from "@material-tailwind/react";

export function DataSelection() {
 
  const [currentSlide, setCurrentSlide] = useState(0);

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  
  const handleArrowClick = (direction) => {
    if (direction === "right" && currentSlide < 1) {
      setCurrentSlide(currentSlide + 1); 
    } else if (direction === "left" && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <div className="bg-white min-h-[250vh]">
        
        <header
          className="h-[3cm] w-full flex justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: 'url("/img/Blue backgound.jpg")' }}
          data-aos="fade-down"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <Typography variant="h1" className="text-5xl font-extrabold text-white">
              Data Selection
            </Typography>
          </div>
        </header>

        
        <section className="m-8 flex gap-4 pt-[3cm]">
          <div className="w-full lg:w-3/5 mt-24">
            <div className="text-center mb-16">
              <Typography variant="h2" className="font-bold mb-4 text-dark-gray text-6xl">
                The Power of Data Selection
              </Typography>
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="text-xl font-bold mb-4 text-dark-gray"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                Data selection is crucial for AI models to succeed. By choosing the right data, you can improve model accuracy, prevent overfitting, and enhance generalization.
              </Typography>
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="text-lg font-normal mb-4 text-dark-gray"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                The selection process involves curating, cleaning, and transforming raw data into meaningful insights for training models effectively.
              </Typography>
            </div>
          </div>

          
          <div
            className="w-2/5 h-[calc(100vh-3cm)] hidden lg:block transition-all duration-300 ease-in-out transform hover:scale-100 hover:shadow-[0_0_20px_10px_rgba(37,99,235,0.7)] hover:rounded-3xl overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="1200"
          >
            <img
              src="/img/Data selection.webp"
              className="h-full w-full object-cover rounded-3xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
        </section>

       
        <section className="p-8 flex justify-center">
          <div className="relative w-3/4 overflow-hidden" style={{ position: "relative", top: "calc(60vh - 7cm)" }}>
            
            {currentSlide === 0 && (
              <div className="flex justify-center gap-12 mb-12 w-full">
                <div className="w-1/3 text-center" data-aos="fade-up">
                  <div className="bg-gradient-to-br from-blue-300 via-white to-white p-6 rounded-lg shadow-md">
                    <Typography variant="h3" className="text-3xl font-bold text-dark-gray mb-4">
                      Understanding the Data's Structure
                    </Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg">
                      To build a successful AI model, it's crucial to understand the inherent structure of your data. Identifying patterns, inconsistencies, and biases ensures that you’re starting with a suitable dataset.
                    </Typography>
                  </div>
                </div>

                <div className="w-1/3 text-center" data-aos="fade-up">
                  <div className="bg-gradient-to-br from-pink-300 via-white to-white p-6 rounded-lg shadow-md">
                    <Typography variant="h3" className="text-3xl font-bold text-dark-gray mb-4">
                      Data Cleaning
                    </Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg">
                      Data cleaning involves rectifying errors, handling missing values, and addressing outliers to ensure the integrity of your dataset. This process prevents these issues from skewing your model’s learning.
                    </Typography>
                  </div>
                </div>

                <div className="w-1/3 text-center" data-aos="fade-up">
                  <div className="bg-gradient-to-br from-green-300 via-white to-white p-6 rounded-lg shadow-md">
                    <Typography variant="h3" className="text-3xl font-bold text-dark-gray mb-4">
                      Feature Engineering
                    </Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg">
                      Feature engineering is the art of transforming raw data into new, meaningful features that enhance your model’s ability to identify patterns and relationships.
                    </Typography>
                  </div>
                </div>
              </div>
            )}

            
            {currentSlide === 1 && (
              <div className="flex justify-center gap-12 w-full">
                <div className="w-1/3 text-center" data-aos="fade-up">
                  <div className="bg-gradient-to-br from-blue-300 via-white to-white p-6 rounded-lg shadow-md">
                    <Typography variant="h3" className="text-3xl font-bold text-dark-gray mb-4">
                      Data Augmentation
                    </Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg">
                      Data augmentation involves artificially expanding your dataset by creating variations, which helps improve your model’s robustness against unseen data.
                    </Typography>
                  </div>
                </div>

                <div className="w-1/3 text-center" data-aos="fade-up">
                  <div className="bg-gradient-to-br from-gray-300 via-white to-white p-6 rounded-lg shadow-md">
                    <Typography variant="h3" className="text-3xl font-bold text-dark-gray mb-4">
                      Data Selection
                    </Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg">
                      Data selection isn’t just about picking a subset; it’s about optimizing the dataset to ensure it is diverse, relevant, and robust, empowering your model to generalize and perform effectively.
                    </Typography>
                  </div>
                </div>
              </div>
            )}

            
            <div className="absolute bottom-4 right-4 transform translate-x-1/2 translate-y-1/2">
              <Button
                onClick={() => handleArrowClick("left")}
                className="bg-black-300 hover:bg-blue-700 text-black py-2 px-4 rounded-full"
                style={{ display: "flex", alignItems: "center" }}
              >
                ← 
              </Button>
            </div>

            <div className="absolute bottom-4 right-16 transform translate-x-1/2 translate-y-1/2">
              <Button
                onClick={() => handleArrowClick("right")}
                className="bg-black-300 hover:bg-blue-700 text-black py-2 px-4 rounded-full"
                style={{ display: "flex", alignItems: "center" }}
              >
                → 
              </Button>
            </div>
          </div>
        </section>

        
        <div
          className="absolute top-[calc(150vh-3cm)] left-0 right-0 flex justify-center items-center py-4"
          data-aos="fade-up"
          style={{
            fontWeight: 800, 
            transition: "all 0.7s ease", 
          }}
        >
          <Typography variant="h2" className="text-black text-3xl font-bold">
            How Do You Optimize?
          </Typography>
        </div>

        
        <div className="flex justify-center mt-[4cm] mb-6">
          <Button color="blue" size="lg" className="bg-maroon hover:bg-red-800">
            Start Optimizing Your Data
          </Button>
        </div>
      </div>
    </>
  );
}

export default DataSelection;
