import React, { useState } from "react";
import "../CSS/faq.css";


export default function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: "How does the meal planning feature work on your website?",
      answer:
        "Our meal planning feature allows you to browse and select recipes for the week or month. You can customize your meal schedule, and with just a few clicks, our system generates a comprehensive grocery list based on your chosen recipes.",
      open: false
    },
    {
      question: "Can I customize the meal plans based on dietary preferences or restrictions?",
      answer: "Yes, absolutely! Our website provides options for customization based on various dietary preferences and restrictions. Whether you're vegetarian, following a gluten-free diet, or have other specific preferences, you can tailor your meal plans to suit your needs.",
      open: false
    },
    {
      question:
        "What type of recipes do you offer, and how often are they updated?",
      answer: "We offer a diverse range of recipes, including international cuisines, healthy options, and comfort foods. Our recipe database is regularly updated to introduce new and exciting dishes, ensuring that you always have a variety of choices for your meal plans.",
      open: false
    },
    {
    question:
        "How does the grocery list feature work, and can it be integrated with popular shopping apps?",
    answer: "Our grocery list feature simplifies your shopping experience. You can easily generate a list based on your selected recipes. While direct integration with popular shopping apps may vary, our system allows you to export the list, making it convenient for both in-store and online shopping.",
    open: false
    },
    {
    question:
        "Is nutritional information provided for the recipes on your website?",
    answer: "Yes, we prioritize transparency and health-conscious choices. Nutritional information, including calories, macronutrients, and more, is available for each recipe, empowering you to make informed decisions about your meals.",
    open: false
    },
    {
    question:
        "Can I sync my meal plans and grocery lists across multiple devices?",
    answer: "Certainly! Our website offers seamless syncing across various devices, allowing you to access your meal plans and grocery lists wherever you are. Whether you're on your computer, tablet, or smartphone, your plans are always at your fingertips.",
    open: false
    },
    {
    question:
        "Do you offer any features to help users save money on groceries?",
    answer: "Yes, we understand the importance of budgeting. Our website provides money-saving tips, suggests alternative ingredients, and highlights cost-effective recipes to help you make the most of your grocery budget.",
    open: false
    },
    {
    question:
        "Are there community or social features for users to share their meal plans and recipe recommendations?",
        answer: "No, we do not currently offer community or social features that allow users to share their meal plans and exchange recipe recommendations.",
        open: false
    },

  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

const FAQ = ({ faq, index, toggleFAQ }) => {
    return (
      <div
        className={"faq " + (faq.open ? "open" : "")}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        <div className="faq-question">{faq.question}</div>
        <div className="faq-answer">{faq.answer}</div>
      </div>
    );
  };