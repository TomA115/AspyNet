import AppNavbar from "../../Layout/NavBar/Navbar";
import { SiteFooter } from "../../Layout/Footer/Footer";
import FlatCard from "../../UI/Card";
import { Flowbite } from "flowbite-react";
import ImageLink from "../../UI/ImageLink";
import ContactForm from "../../UI/ContactForm";


function App() {
  return (
    <Flowbite >
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 pt-16">
        {/* Header */}
        <AppNavbar/>
        {/* Hero Section - Banner */}
        <section className="h-5/6 flex flex-col items-center justify-center bg-cover bg-center text-white w-full pt-8 bg-gray-100 mt-10">
          <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between w-4/5 p-8 bg-opacity-75 rounded-lg shadow-lg bg-white">
            <div className="flex items-center justify-center w-full sm:w-full md:w-2/5 h-full p-4 mb-8 sm:mb-8 md:mb-0 md:mr-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-full">
          <img src="/profilepic.jpeg" alt="Description" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="max-w-xl text-center sm:text-center md:text-left">
              <h1 className="text-6xl font-extrabold text-blue-600 mb-20">
          Tom Aspinall
              </h1>
              <div className="mb-24">
          <p className="text-xl text-blue-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <p className="text-xl mt-2 text-blue-600">Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
              </div>
              <section className="flex justify-center mt-10">
          <div className="flex space-x-10">
            <div className="flex flex-col items-center">
              <ImageLink imageUrl="cancer-research.png" linkUrl="https://www.cancerresearchuk.org/" altText="cancer research logo"/>
            </div>
            <div className="flex flex-col items-center">
              <ImageLink imageUrl="kidney-research.png" linkUrl="https://www.kidneyresearchuk.org/support/" altText="kidney research logo"/>
            </div>
            <div className="flex flex-col items-center">
              <ImageLink imageUrl="claire-house.png" linkUrl="https://www.clairehouse.org.uk/donate/" altText="claire house logo"/>
            </div>
          </div>
        </section>  
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="m-10 rounded-lg shadow-lg mt-32">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 ">Some of My Skills</h1>
        <div id="cards" className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center p-10 bg-gray-100 pb-20">
          <FlatCard title="Support" text="We offer a range of support solutions to help meet your SLA's and keep your systems stable" />
          <FlatCard title="Analysis" text="Our expert business analysts can help identify opportunities for technology-driven value creation in your business" />
          <FlatCard title="Development" text="Bespoke development services for all stages of the product cycle"/>
          <FlatCard title="Development" text="Bespoke development services for all stages of the product cycle"/>
          <FlatCard title="Development" text="Bespoke development services for all stages of the product cycle"/>
          <FlatCard title="Development" text="Bespoke development services for all stages of the product cycle"/>
          <FlatCard title="Development" text="Bespoke development services for all stages of the product cycle"/>
        </div>
        </section>

        {/* About Me Section */}
        {/* 
        <section className="p-8 rounded-lg shadow-lg mt-32 m-10 w-full mx-auto sm:1/3 md:w-4/6 lg:w-5/6">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">About me</h1>

          <div className="text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
            <p className="mb-4">Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.</p>
            <p className="mb-4">Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.</p>
          </div>  

        Icons section

        <section className="flex justify-center mt-10">
          <div className="flex space-x-10">
            <div className="flex flex-col items-center">
              <ImageLink imageUrl="cancer-research.png" linkUrl="https://www.cancerresearchuk.org/" altText="cancer research logo"/>
            </div>
            <div className="flex flex-col items-center">
              <ImageLink imageUrl="kidney-research.png" linkUrl="https://www.kidneyresearchuk.org/support/" altText="kidney research logo"/>
            </div>
            <div className="flex flex-col items-center">
              <ImageLink imageUrl="claire-house.png" linkUrl="https://www.clairehouse.org.uk/donate/" altText="claire house logo"/>
            </div>
          </div>
        </section>      
        </section>
        */}

        <section className="mt-32 w-screen">
        {/* Contact form */}
        <ContactForm/>
        </section>

        {/* Footer */}
        <SiteFooter />
      </div>
    </Flowbite>
  );
} export default App;