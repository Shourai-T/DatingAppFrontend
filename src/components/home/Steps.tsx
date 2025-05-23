import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ArrowLeft from "../../assets/img/arrow_left_white.png";
import ArrowRight from "../../assets/img/arrow_right_white.png";
import BgStep1 from "../../assets/img/Bg_Step1.jpg";
import BgStep2 from "../../assets/img/Bg_Step2.jpg";
import BgStep3 from "../../assets/img/Bg_Step3.jpg";

const Steps = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const steps = [
    {
      number: "1.",
      title: "Tìm kiếm ý tưởng",
      description:
        'từ các bài đăng trong mục "Cộng đồng" hoặc AI, từ đó lên kế hoạch hẹn hò thật hoàn hảo',
      image: BgStep1,
      buttonText: "Tìm kiếm ngay",
    },
    {
      number: "2.",
      title: "Tạo kế hoạch hẹn hò",
      description:
        "và bắt đầu viết lên 1 lịch trình đã được lên kế hoạch kĩ lưỡng",
      image: BgStep2,
      buttonText: "Tạo ngay",
    },
    {
      number: "3.",
      title: "Thực hiện kế hoạch",
      description: "đã được chuẩn bị và tận hưởng những khoảnh khắc tuyệt vời",
      image: BgStep3,
      buttonText: "Bắt đầu ngay",
    },
  ];

  const handlePrevStep = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveStep((prev) => (prev === 1 ? 3 : prev - 1));
  };

  const handleNextStep = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveStep((prev) => (prev === 3 ? 1 : prev + 1));
  };
  return (
    <section className="bg-[#F7F2EA] py-2">
      <div className="">
        <div className="w-full h-20 md:h-28 bg-[#455038] flex items-center justify-center mb-2 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white text-center">
            Các bước để lên kế hoạch hẹn hò
          </h2>
        </div>{" "}
        <div className="flex flex-col md:flex-row gap-4 md:gap-2">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === activeStep;
            const showLeftArrow = stepNumber !== 1;
            const showRightArrow = stepNumber !== 3;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${
                  isActive && !isMobile ? "flex-[2]" : "flex-1"
                }
                                    min-h-[350px] md:min-h-[480px] overflow-hidden transition-all duration-500 ${
                                      !isMobile ? "cursor-pointer" : ""
                                    }`}
                onClick={() => !isMobile && setActiveStep(stepNumber)}
              >
                {isMobile || isActive ? (
                  <>
                    {" "}
                    <img
                      src={step.image}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E3A22]/70 to-transparent" />{" "}
                    <div className="absolute z-10 inset-0 flex items-center justify-between px-2 md:px-4 pointer-events-none">
                      {!isMobile && (
                        <>
                          <div className="pointer-events-auto">
                            {showLeftArrow && (
                              <button
                                onClick={handlePrevStep}
                                className=""
                                aria-label="Previous step"
                              >
                                <img src={ArrowLeft} className="w-8 md:w-16" />
                              </button>
                            )}
                          </div>
                          <div className="pointer-events-auto">
                            {showRightArrow && (
                              <button
                                onClick={handleNextStep}
                                className=""
                                aria-label="Next step"
                              >
                                <img src={ArrowRight} className="w-8 md:w-16" />
                              </button>
                            )}
                          </div>
                        </>
                      )}
                    </div>{" "}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-serif text-white mb-2 md:mb-3">
                          {isMobile
                            ? `${step.number} ${step.title}`
                            : step.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/90 mb-3 md:mb-4">
                          {step.description}
                        </p>
                        <button
                          className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-white rounded-full text-olive-900 hover:bg-white/90 transition-colors text-sm md:text-base"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Add your navigation or action logic here
                          }}
                        >
                          <Heart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                          {step.buttonText}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-[#455038] flex items-center justify-center">
                    <span className="text-4xl md:text-6xl lg:text-8xl font-serif text-white/90">
                      {step.number}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
