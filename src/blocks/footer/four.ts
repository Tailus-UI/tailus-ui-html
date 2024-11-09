import type { Code } from "src/types";

const htmlCode = `<footer class="border-b bg-white py-12 dark:bg-transparent">
    <div class="mx-auto max-w-5xl px-6">
        <div class="flex flex-wrap justify-between gap-6">
            <span class="text-caption order-last block text-center text-sm md:order-first">&copy 2024 Tailus UI, All rights reserved</span>
            <div class="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                <a href="#" class="text-body block hover:text-title">
                    <span>Features</span>
                </a>
                <a href="#" class="text-body block hover:text-title">
                    <span>Solution</span>
                </a>
                <a href="#" class="text-body block hover:text-title">
                    <span>Customers</span>
                </a>
                <a href="#" class="text-body block hover:text-title">
                    <span>Pricing</span>
                </a>
                <a href="#" class="text-body block hover:text-title">
                    <span>Help</span>
                </a>
                <a href="#" class="text-body block hover:text-title">
                    <span>About</span>
                </a>
            </div>
        </div>
    </div>
</footer>`

const nextjsCode = `import Link from 'next/link';

export default function FooterSection(){
    return (
        <footer className="border-b bg-white py-12 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap justify-between gap-6">
                    <span className="text-caption order-last block text-center text-sm md:order-first">&copy 2024 Tailus UI, All rights reserved</span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        <Link href="#" className="text-body block hover:text-title">
                            <span>Features</span>
                        </Link>
                        <Link href="#" className="text-body block hover:text-title">
                            <span>Solution</span>
                        </Link>
                        <Link href="#" className="text-body block hover:text-title">
                            <span>Customers</span>
                        </Link>
                        <Link href="#" className="text-body block hover:text-title">
                            <span>Pricing</span>
                        </Link>
                        <Link href="#" className="text-body block hover:text-title">
                            <span>Help</span>
                        </Link>
                        <Link href="#" className="text-body block hover:text-title">
                            <span>About</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}`

const nuxtjsCode = `
    <footer class="border-b bg-white py-12 dark:bg-transparent">
        <div class="mx-auto max-w-5xl px-6">
            <div class="flex flex-wrap justify-between gap-6">
                <span class="text-caption order-last block text-center text-sm md:order-first">&copy 2024 Tailus UI, All rights reserved</span>
                <div class="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                    <NuxtLink to="/" class="text-body block hover:text-title">
                        <span>Features</span>
                    </NuxtLink>
                    <NuxtLink to="/" class="text-body block hover:text-title">
                        <span>Solution</span>
                    </NuxtLink>
                    <NuxtLink to="/" class="text-body block hover:text-title">
                        <span>Customers</span>
                    </NuxtLink>
                    <NuxtLink to="/" class="text-body block hover:text-title">
                        <span>Pricing</span>
                    </NuxtLink>
                    <NuxtLink to="/" class="text-body block hover:text-title">
                        <span>Help</span>
                    </NuxtLink>
                    <NuxtLink to="/" class="text-body block hover:text-title">
                        <span>About</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
`

export const fourCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}