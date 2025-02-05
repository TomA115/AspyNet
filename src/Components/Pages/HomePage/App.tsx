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
          <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between w-11/12 p-8 bg-opacity-75 rounded-lg shadow-lg bg-white">
            <div className="flex items-center justify-center w-full sm:w-full md:w-2/5 h-full p-4 mb-8 sm:mb-8 md:mb-0 md:mr-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-full">
          <img src="/profilepic.jpeg" alt="Description" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="max-w-3xl text-center sm:text-center md:text-left w-full flex flex-col justify-center h-full overflow-hidden">
              <h1 className="text-6xl font-extrabold text-blue-600 mb-6 text-center">
          Tom Aspinall
              </h1>
              <div className="mb-8">
          <p className="text-xl text-black text-left">I am a London based product engineer with over four years of experience building and supporting enterprise products. 
            I have experience across the stack but have the most experience in C# .NET, React, TypeScript, Azure and Microsoft SQL Server.
          </p>
          <p className="text-xl text-black text-left mt-8">
            I spent four years completing my degree apprenticeship in 
            Digital and Technology Solutions (BsC) with the University of Exeter and Bank of England where I now continue to work as a product engineer on a variety of enterprise apps.
          </p>
          <p className="text-xl mt-4 text-black text-left">I am always trying to learn new skills and expand my capabilities. My primary passion is for solving problems and it's what I enjoy most about my work
            and about working with technology in general.
          </p>
          <p className="text-xl mt-4 text-black text-left">Before you continue (or leave) I ask that you consider clicking one of the three links below. It could make a real difference.
          </p>
          <p className="text-xl mt-2 text-black text-left">Thank you.
          </p>
              </div>
          <section className="flex justify-center mt-1">
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
        <h1 className="text-4xl font-extrabold text-center text-blue-600 ">I have experience with</h1>
        <div id="cards" className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center p-10 bg-gray-100 pb-20">
          <FlatCard title="CI/CD" text={["Azure DevOps", "GitHub actions", "Automated testing", "Build and release pipelines", "JIRA/Confluence"]} />
          <FlatCard title="Frontend" text={["TypeScript/Javascript", "React", "CSS", "Component libraries", "Redux"]} />
          <FlatCard title="Backend" text={["C# .NET Core", "Azure Functions", "RESTful APIs", "Entity Framework", "Python"]} />
          <FlatCard title="Business Intelligence" text={["Microsoft SSAS/IS/RS flows", "MDX Cubes", "Tableau server", "Visual Basic (Excel/.NET)"]} />
          <FlatCard title="System types" text={["Full-stack web apps", "noSQL databases", "Time-series data", "Master data managment", "Data lakes"]} />
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