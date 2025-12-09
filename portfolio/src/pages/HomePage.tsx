import { Button } from "@/components/ui/button";
import TypeIt from "typeit-react";

function HomePage() {
  return (
    <div className="min-h-[calc(100vh_-_6.5rem)] grid grid-cols-2 justify-items-center content-center p-4 gap-4">
      <div className="w-[40rem] p-4 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Hey</h1>
        <h1 className="text-4xl font-bold">
          I'm{" "}
          <span className="text-primary">
            <TypeIt
            options={{
              strings: ["Nikhilkumar Madan Jha "],
              speed: 250,
              waitUntilVisible: true,
            }}
          />
          </span>
        </h1>
        <div>
          <p className="text-lg font-bold mb-2">A Bit About me</p>
          <p className="text-muted-foreground">
            I am a product engineer in TCS. I have worked in frontend and
            backend technologies for software requirement. I am interested in
            software development and system design. Please feel free to reach
            out to me for any discussion.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="default" size="default">
            Download CV
          </Button>
          <Button variant="outline" size="default">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
