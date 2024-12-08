import type { Code } from "src/types";

const htmlCode = `<section class="py-32">
    <div class="mx-auto max-w-5xl px-6">
        <div class="text-center">
            <h2 class="text-title text-balance text-4xl font-semibold lg:text-5xl">Built to cover your needs</h2>
            <p class="text-body mt-4">Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.</p>
        </div>
        <div class="bg-ui *:group rounded-card mt-16 grid divide-y overflow-hidden border *:p-[--card-padding] *:text-center sm:grid-cols-2 sm:divide-x lg:grid-cols-3 lg:divide-y-0">
            <div class="group">
                <div class="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)] dark:[--ui-border-color:theme(colors.white/0.15)] dark:group-hover:bg-primary-950 dark:group-hover:[--ui-border-color:theme(colors.white/0.2)]">
                    <div class="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                    <div class="absolute inset-0 bg-gradient-to-r from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                    <div class="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <h3 class="text-title mt-6 font-medium">Customizable</h3>
                <p class="mt-3 text-sm">Extensive customization options, allowing you to tailor every aspect to meet your specific needs.</p>
            </div>
            <div class="group">
                <div class="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)] dark:[--ui-border-color:theme(colors.white/0.15)] dark:group-hover:bg-primary-950 dark:group-hover:[--ui-border-color:theme(colors.white/0.2)]">
                    <div class="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                    <div class="absolute inset-0 bg-gradient-to-r from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                    <div class="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z"></path>
                            <path
                                fill-rule="evenodd"
                                d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <h3 class="text-title mt-6 font-medium">You have full control</h3>
                <p class="mt-3 text-sm">From design elements to functionality, you have complete control to create a unique and personalized experience.</p>
            </div>
            <div class="group">
                <div class="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)] dark:[--ui-border-color:theme(colors.white/0.15)] dark:group-hover:bg-primary-950 dark:group-hover:[--ui-border-color:theme(colors.white/0.2)]">
                    <div class="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                    <div class="absolute inset-0 bg-gradient-to-r from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                    <div class="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path
                                fill-rule="evenodd"
                                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <h3 class="text-title mt-6 font-medium">Powered By AI</h3>
                <p class="mt-3 text-sm">Elements to functionality, you have complete control to create a unique experience.</p>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `export default function Features(){
    return (
        <section className="py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-title text-balance text-4xl font-semibold lg:text-5xl">Built to cover your needs</h2>
                    <p className="text-body mt-4">Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.</p>
                </div>
                <div className="bg-ui *:group rounded-card mt-16 grid divide-y overflow-hidden border *:p-[--card-padding] *:text-center sm:grid-cols-2 sm:divide-x lg:grid-cols-3 lg:divide-y-0">
                    <div className="group">
                        <div className="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)] dark:[--ui-border-color:theme(colors.white/0.15)] dark:group-hover:bg-primary-950 dark:group-hover:[--ui-border-color:theme(colors.white/0.2)]">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                            <div className="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-title mt-6 font-medium">Customizable</h3>
                        <p className="mt-3 text-sm">Extensive customization options, allowing you to tailor every aspect to meet your specific needs.</p>
                    </div>
                    <div className="group">
                        <div className="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)] dark:[--ui-border-color:theme(colors.white/0.15)] dark:group-hover:bg-primary-950 dark:group-hover:[--ui-border-color:theme(colors.white/0.2)]">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                            <div className="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z"></path>
                                    <path
                                        fillRule="evenodd"
                                        d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-title mt-6 font-medium">You have full control</h3>
                        <p className="mt-3 text-sm">From design elements to functionality, you have complete control to create a unique and personalized experience.</p>
                    </div>
                    <div className="group">
                        <div className="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)] dark:[--ui-border-color:theme(colors.white/0.15)] dark:group-hover:bg-primary-950 dark:group-hover:[--ui-border-color:theme(colors.white/0.2)]">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                            <div className="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path
                                        fillRule="evenodd"
                                        d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-title mt-6 font-medium">Powered By AI</h3>
                        <p className="mt-3 text-sm">Elements to functionality, you have complete control to create a unique experience.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}`

const nuxtjsCode = `
    <section class="py-32">
        <div class="mx-auto max-w-5xl px-6">
            <div class="text-center">
                <h2 class="text-title text-balance text-4xl font-semibold lg:text-5xl">Built to cover your needs</h2>
                <p class="text-body mt-4">Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.</p>
            </div>
            <div class="bg-ui *:group rounded-card mt-16 grid divide-y overflow-hidden border *:p-[--card-padding] *:text-center sm:grid-cols-2 sm:divide-x lg:grid-cols-3 lg:divide-y-0">
                <div class="group">
                    <div class="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)] dark:[--ui-border-color:theme(colors.white/0.15)] dark:group-hover:bg-primary-950 dark:group-hover:[--ui-border-color:theme(colors.white/0.2)]">
                        <div class="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        <div class="absolute inset-0 bg-gradient-to-t from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                        <div class="absolute inset-0 bg-gradient-to-r from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                        <div class="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <h3 class="text-title mt-6 font-medium">Customizable</h3>
                    <p class="mt-3 text-sm">Extensive customization options, allowing you to tailor every aspect to meet your specific needs.</p>
                </div>
                <div class="group">
                    <div class="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)] dark:[--ui-border-color:theme(colors.white/0.15)] dark:group-hover:bg-primary-950 dark:group-hover:[--ui-border-color:theme(colors.white/0.2)]">
                        <div class="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        <div class="absolute inset-0 bg-gradient-to-t from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                        <div class="absolute inset-0 bg-gradient-to-r from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                        <div class="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z"></path>
                                <path
                                    fillRule="evenodd"
                                    d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <h3 class="text-title mt-6 font-medium">You have full control</h3>
                    <p class="mt-3 text-sm">From design elements to functionality, you have complete control to create a unique and personalized experience.</p>
                </div>
                <div class="group">
                    <div class="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)] dark:[--ui-border-color:theme(colors.white/0.15)] dark:group-hover:bg-primary-950 dark:group-hover:[--ui-border-color:theme(colors.white/0.2)]">
                        <div class="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        <div class="absolute inset-0 bg-gradient-to-t from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                        <div class="absolute inset-0 bg-gradient-to-r from-[--ui-bg] via-transparent to-[--ui-bg]"></div>
                        <div class="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path
                                    fillRule="evenodd"
                                    d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <h3 class="text-title mt-6 font-medium">Powered By AI</h3>
                    <p class="mt-3 text-sm">Elements to functionality, you have complete control to create a unique experience.</p>
                </div>
            </div>
        </div>
    </section>
`

export const stackedCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}