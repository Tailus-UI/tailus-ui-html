import type { Code } from "src/types";

const htmlCode = `<section class="py-32">
    <div class="mx-auto max-w-5xl px-6">
        <div class="mx-auto max-w-2xl">
            <blockquote>
                <p class="text-title text-lg font-semibold sm:text-xl md:text-3xl">"Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly."</p>

                <div class="mt-12 flex items-center gap-6 divide-x">
                    <img class="h-7 w-fit dark:invert" src="/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
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
                <div className="mx-auto max-w-2xl">
                    <blockquote>
                        <p className="text-title text-lg font-semibold sm:text-xl md:text-3xl">"Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly."</p>

                        <div className="mt-12 flex items-center gap-6 divide-x">
                            <img className="h-7 w-fit dark:invert" src="/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
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

export const plainCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}