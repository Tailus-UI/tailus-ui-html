import type { Code } from "src/types";

const htmlCode = `<section class="py-32">
    <div class="mx-auto max-w-5xl px-6">
        <div class="mx-auto max-w-2xl text-center">
            <blockquote>
                <p class="text-title text-lg font-medium sm:text-xl md:text-3xl">"Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly."</p>

                <div class="mt-12 flex items-center justify-center gap-6 divide-x">
                    <div class="avatar sz-xl">
                        <img src="https://tailus.io/images/reviews/shekinah.webp" alt="Shekinah Tshiokufila" height="400" width="400" loading="lazy" />
                    </div>
                    <div class="space-y-1 pl-6">
                        <cite class="text-title font-medium">John Doe</cite>
                        <span class="text-caption block text-sm">CEO, Nvidia</span>
                    </div>
                </div>
            </blockquote>
        </div>
    </div>
</section>`

const nextjsCode = `export default function TestimonialsSection(){
    return (
        <section className="py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <blockquote>
                        <p className="text-title text-lg font-medium sm:text-xl md:text-3xl">"Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly."</p>

                        <div className="mt-12 flex items-center justify-center gap-6 divide-x">
                            <div className="avatar sz-xl">
                                <img src="https://tailus.io/images/reviews/shekinah.webp" alt="Shekinah Tshiokufila" height="400" width="400" loading="lazy" />
                            </div>
                            <div className="space-y-1 pl-6">
                                <cite className="text-title font-medium">John Doe</cite>
                                <span className="text-caption block text-sm">CEO, Nvidia</span>
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}`

const nuxtjsCode = ``

export const centeredCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}