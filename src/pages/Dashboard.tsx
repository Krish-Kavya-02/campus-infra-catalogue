
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const BuildingCard = ({ 
  name, 
  image, 
  description, 
  link = "#" 
}: { 
  name: string; 
  image: string; 
  description: string; 
  link?: string;
}) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
    <div className="aspect-video overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end text-white">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-sm text-white/80 mb-4 line-clamp-2">{description}</p>
      <Link to={link}>
        <Button variant="outline" className="text-white border-white/30 hover:bg-white/20 hover:text-white w-full">
          Explore
        </Button>
      </Link>
    </div>
  </div>
);

const AboutUs = () => (
  <div className="px-4 py-12 bg-white rounded-lg">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">About Our Institution</h2>
      <div className="prose prose-lg max-w-none">
        <p>
          Our institution is dedicated to providing world-class education and research facilities to students and faculty. 
          With state-of-the-art infrastructure, we aim to create an environment that fosters innovation, collaboration, and academic excellence.
        </p>
        <p>
          Our campus boasts modern buildings equipped with the latest technologies, spacious auditoriums, well-equipped laboratories, 
          and specialized centers that cater to diverse academic and extracurricular needs.
        </p>
        <p>
          We believe that a conducive learning environment plays a crucial role in shaping the educational experience and future success of our students. 
          Our infrastructure is designed to support both traditional and contemporary approaches to teaching and learning, ensuring that our 
          students are prepared for the challenges of the modern world.
        </p>
      </div>
    </div>
  </div>
);

const Venues = () => (
  <div className="px-4 py-12 bg-white rounded-lg">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Buildings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <BuildingCard 
          name="Technology Tower (TT)" 
          image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop"
          description="A modern building housing computer science labs, classrooms, and faculty offices with cutting-edge facilities."
          link="/buildings/tt"
        />
        <BuildingCard 
          name="SMV Building" 
          image="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&auto=format&fit=crop"
          description="Home to engineering departments, featuring specialized labs and research centers."
          link="/buildings/smv"
        />
        <BuildingCard 
          name="SJT Building" 
          image="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&auto=format&fit=crop"
          description="The main academic complex with lecture halls, administrative offices, and student service centers."
          link="/buildings/sjt"
        />
        <BuildingCard 
          name="MGR Auditorium" 
          image="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&auto=format&fit=crop"
          description="A state-of-the-art auditorium for academic conferences, cultural events, and ceremonies."
          link="/buildings/mgr"
        />
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Venue</h2>
        <div className="bg-slate-50 rounded-xl overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&auto=format&fit=crop"
                alt="Anna Auditorium" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Anna Auditorium</h3>
              <p className="text-slate-700 mb-6">
                The Anna Auditorium is our premier venue for hosting large-scale events, conferences, and cultural performances. 
                With a seating capacity of over 2,000, this state-of-the-art facility features advanced audio-visual equipment, 
                excellent acoustics, and versatile staging options.
              </p>
              <p className="text-slate-700 mb-6">
                The auditorium is equipped with modern amenities including climate control, comfortable seating, 
                professional lighting systems, and backstage facilities for performers. Its architecture combines 
                functionality with elegance, creating an inspiring space for academic and cultural gatherings.
              </p>
              <Link to="/venues/anna-auditorium">
                <Button>Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAzIj48cGF0aCBkPSJNMzAgMEgyMHYyMGgtMjB2MTBoMjB2MjBoMTB2LTIwaDIwdi0xMGgtMjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Campus Infrastructure Explorer</h1>
            <p className="text-xl text-white/80 mb-8">Discover the amazing facilities and venues that our campus has to offer</p>
            
            <NavigationMenu className="justify-center mb-8">
              <NavigationMenuList className="bg-white/10 backdrop-blur-md px-2 py-1 rounded-full">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      "px-4 py-2 rounded-full text-white/80 hover:text-white transition-colors",
                      "data-[active]:text-white data-[active]:bg-white/10"
                    )}
                    active
                  >
                    Dashboard
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 text-white/80 hover:text-white bg-transparent hover:bg-white/10 rounded-full">
                    Buildings
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/80 to-primary p-6 no-underline outline-none focus:shadow-md"
                            href="/buildings"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              Explore All Buildings
                            </div>
                            <p className="text-sm leading-tight text-white/80">
                              Discover all academic and administrative buildings on campus.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="/buildings/tt">
                            <div className="text-sm font-medium leading-none">Technology Tower</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Computer science and IT facilities</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="/buildings/smv">
                            <div className="text-sm font-medium leading-none">SMV Building</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Engineering departments and labs</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="/buildings/sjt">
                            <div className="text-sm font-medium leading-none">SJT Building</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Main academic complex</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      "px-4 py-2 rounded-full text-white/80 hover:text-white transition-colors"
                    )}
                    href="/venues"
                  >
                    Venues
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      "px-4 py-2 rounded-full text-white/80 hover:text-white transition-colors"
                    )}
                    href="/about"
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>
      
      {/* Content Section */}
      <section className="container -mt-10 mb-20">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <Tabs defaultValue="about" className="w-full">
            <div className="px-4 py-2 bg-slate-50 border-b">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="about">About Us</TabsTrigger>
                <TabsTrigger value="venues">Venues</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="about">
              <AboutUs />
            </TabsContent>
            <TabsContent value="venues">
              <Venues />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
