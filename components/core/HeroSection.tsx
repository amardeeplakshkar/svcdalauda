import Image from "next/image";
import { Button } from "../ui/button";
import { useIntlayer } from "next-intlayer/server";
import Link from "next/link";

const HeroSection = () => {
    const content = useIntlayer("heroSection");
    const bg = "https://ik.imagekit.io/qazwsx90/assets/image.png?tr=w-1600,q-auto,f-webp";
    const texture = "https://ik.imagekit.io/qazwsx90/assets/texture.png?tr=w-600,q-auto,f-auto";
    return (
        <section className="relative w-full min-h-[65vh] overflow-hidden">

            <Image
                src={bg}
                alt="SVGC Dalauda Campus"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#ff9933]/40 via-yellow-300/20 to-yellow-500/30" />

            {/* TEXTURE OVERLAY */}
            <Image
                src={texture}
                alt="Texture"
                fill
                className="object-cover mix-blend-screen opacity-40 z-20"
            />

            {/* CONTENT */}
            <div className="relative mx-auto flex min-h-[65vh] items-center justify-between px-6 lg:px-12 z-30">

                {/* IMAGE */}
                <div className="absolute inset-y-0 right-0 w-full flex justify-end lg:w-auto z-30">
                    <Image
                        src="https://ik.imagekit.io/qazwsx90/assets/vivekananda02.png?tr=w-400,q-auto,f-auto"
                        alt="Swami Vivekananda"
                        width={350}
                        height={350}
                        priority
                        className="h-full max-h-[65vh] w-auto object-contain"
                    />
                </div>

                {/* TEXT */}
                <div className="relative z-30 w-full max-w-2xl text-shadow-hero"> <div className="pl-6 md:pl-6"> <h3 className="quote-text italic relative mb-4 text-2xl font-bold text-primary md:text-4xl font-heading"> <span className="absolute -left-6 -top-4 text-6xl font-serif leading-none text-primary"> &#8220; </span> {content.quote.head} </h3> <p className="quote-text italic text-wrap relative text-lg leading-relaxed text-primary md:text-2xl"> {content.quote.subHead}<br className="md:sr-only block" /> {content.quote.subHead2} <span className="absolute -bottom-4 text-6xl font-serif leading-none text-primary"> &#8221; </span> </p> <cite className="mt-3 block text-primary body-text text-sm not-italic leading-relaxed md:text-xl"> – {content.quote.leader} </cite> <div className="mt-8 flex flex-wrap *:text-white gap-4 body-text"> <Button asChild className="px-8 py-5 bg-primary/95 hover:bg-primary"><Link href={'/about'}>{content.quote.button1}</Link></Button> <Button asChild className="px-8 py-5 btn-saffron">
                     <a href={'#campusinfo'}>
                     {content.quote.button2}
                     </a>
                      </Button> </div> </div> </div>
            </div>
        </section>
    );
};

export default HeroSection;
