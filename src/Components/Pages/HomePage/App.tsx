import AppNavbar from "../../Layout/NavBar/Navbar";
import { SiteFooter } from "../../Layout/Footer/Footer";
import FlatCard from "../../UI/Card";
import { AppTimeline } from "../../UI/Timeline";
import { Flowbite } from "flowbite-react";


function App() {
  return (
    <Flowbite >
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 pt-16">
        {/* Header */}
        <AppNavbar/>
        {/* Hero Section - Banner */}
        <section className="h-5/6 flex items-center justify-center bg-cover bg-center text-white w-full pt-8 bg-gray-100 mt-10" 
          >
          <div className="flex items-center justify-between w-4/5 p-8 bg-opacity-75 rounded-lg shadow-lg bg-white">
            <div className="max-w-xl text-center">
              <h1 className="text-6xl font-extrabold text-blue-600 mb-20">
                Tom Aspinall
              </h1>
              <div className="mb-24">
                <p className="text-xl  text-blue-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <p className="text-xl mt-2  text-blue-600">Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-1/3 h-full p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-full">
                <img src="/profilepic.jpeg" alt="Description" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="m-10 rounded-lg shadow-lg mt-32">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 ">Some of My Skills</h1>
        <div id="cards" className="flex flex-wrap gap-6 justify-center p-10 bg-gray-100 pb-20">
          <FlatCard title="Support" text="We offer a range of support solutions to help meet your SLA's and keep your systems stable" />
          <FlatCard title="Analysis" text="Our expert business analysts can help identify opportunities for technology-driven value creation in your business" />
          <FlatCard title="Development" text="Bespoke development services for all stages of the product cycle"/>
          <FlatCard title="Development" text="Bespoke development services for all stages of the product cycle"/>
          <FlatCard title="Development" text="Bespoke development services for all stages of the product cycle"/>
          <FlatCard title="Development" text="Bespoke development services for all stages of the product cycle"/>
          <FlatCard title="Development" text="Bespoke development services for all stages of the product cycle"/>
        </div>
        </section>


        <section className="p-8 rounded-lg shadow-lg mt-32 m-10">

          {/* Title */}
          <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">About me</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <AppTimeline />
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-bold">some text here</h2>
              <p className="text-gray-700 dark:text-gray-300">something useful about how great we are</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <SiteFooter />
      </div>
    </Flowbite>
  );
} export default App;