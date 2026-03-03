import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin((nuxtApp) => {
    if (import.meta.client) {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.2,
            smoothTouch: true,
            touchMultiplier: 2,
            infinite: false,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Provide lenis instance globally if needed
        nuxtApp.provide('lenis', lenis)
    }
})
