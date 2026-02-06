import Image from "next/image";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/theme-switcher";

const HeroSection = () => {
    return (
        <section
            className="relative w-full min-h-[65vh] overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/background02.png')" }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 z-0 bg-cover bg-no-repeat mix-blend-screen opacity-35" 
            style={{ backgroundImage: "url('/assets/texture.png')" }}
            />

            {/* CONTENT WRAPPER */}
            <div className="relative mx-auto flex min-h-[65vh] items-center justify-between px-6 lg:px-12">

                {/* IMAGE — BACK LAYER ON SMALL/MD */}
                <div
                    className="
                        absolute inset-y-0 right-0 w-full
                        flex justify-end
                        z-10
                        lg:z-30 lg:w-auto
                    "
                >
                    <Image
                        src="/assets/vivekananda02.png"
                        alt="Swami Vivekananda"
                        width={350}
                        height={350}
                        priority
                        className="
                            h-full max-h-[65vh]
                            w-auto object-contain
                            opacity-95
                            lg:opacity-100
                        "
                    />
                </div>

                {/* TEXT — FRONT LAYER */}
                <div className="relative z-30 w-full max-w-2xl text-shadow-hero">
                    <div className="pl-6 md:pl-6">
                        <h3 className="quote-text italic relative mb-4 text-2xl font-bold text-primary md:text-4xl font-heading">
                            <span className="absolute -left-4 -top-4 text-6xl font-serif leading-none text-primary">
                                &#8220;
                            </span>
                            Arise! Awake!
                        </h3>

                        <p className="quote-text italic text-wrap relative text-lg leading-relaxed text-primary md:text-2xl">
                            And stop not until the <br className="md:sr-only block"/> goal is reached.
                            <span className="absolute -bottom-4 text-6xl font-serif leading-none text-primary">
                                &#8221;
                            </span>
                        </p>

                        <cite className="mt-3 block text-primary body-text text-sm not-italic leading-relaxed md:text-xl">
                            – Swami Vivekananda
                        </cite>

                        <div className="mt-8 flex flex-wrap *:text-white gap-4 body-text">
                            <Button className="px-8 py-5  bg-primary/95 hover:bg-primary">
                                Explore College
                            </Button>
                            <Button className="px-8 py-5 btn-saffron">
                                Learn More
                            </Button>
                            {/* <ModeToggle/> */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
