import gsap from 'gsap';

export default class Anchor {
    constructor(options = {}) {
        this.nodes = [...document.querySelectorAll('[data-anchor]')];
        this.offset = options?.offset || 0;

        // Bind functions and events
        this.handlePopState = this.handlePopState.bind(this);
        window.addEventListener('popstate', this.handlePopState);

        // Scroll on load if hash is active
        this.handlePopState();

    }

    handlePopState() {

        if (!window.location.hash) return;

        // Get element to scroll towards
        const target = document.querySelector(window.location.hash);
        if (!target) return;


        // Scroll animation property
        const scrollPos = {
            y: window.scrollY
        }

        // Animate body scroll
        gsap.to(scrollPos, {
            duration: 1,
            y: getOffsetTop(target) + this.offset,
            onUpdate: () => {
                window.scrollTo(0, scrollPos.y)
            }
        })
    }
}


const getOffsetTop = element => {
    let offsetTop = 0;
    while (element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
    }
    return offsetTop;
}