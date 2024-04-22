import Blogs from "@/components/website/home-page/blogs/Blogs";
import Coverage from "@/components/website/home-page/coverage/Coverage";
import Experience from "@/components/website/home-page/experience/Experience";
import Facts from "@/components/website/home-page/facts/Facts";
import Landing from "@/components/website/home-page/landing/Landing";
import Services from "@/components/website/home-page/whyUs/Services";
import Testimony from "@/components/website/home-page/testimony/Testimony";
export default function Home() {
  return (
    <main>
      <Landing />
      <Services />
      <Facts />
      <Experience />
      <Coverage />
      <Testimony />
      <Blogs /> 
    </main>
  );
}
