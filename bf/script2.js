requestAnimationFrame(()=>{
    if (window.__framer_disable_appear_effects_optimization__ !== true) {
        const respectReducedMotion = true
        const reducedMotion = respectReducedMotion && window.matchMedia('(prefers-reduced-motion: reduce)').matches === true
        const breakpoints = [{
            "hash": "72rtr7",
            "mediaQuery": "(min-width: 1400px)"
        }, {
            "hash": "nkesoh",
            "mediaQuery": "(min-width: 810px) and (max-width: 1399px)"
        }, {
            "hash": "1tnyjl3",
            "mediaQuery": "(max-width: 809px)"
        }]
        if (animator) {
            const appearAnimations = {
                "1bugbru": {
                    "animate": {
                        "opacity": 1,
                        "rotate": 0,
                        "rotateX": 0,
                        "rotateY": 0,
                        "scale": 1,
                        "transition": {
                            "delay": 0,
                            "duration": 1,
                            "ease": [0.12, 0.23, 0.5, 1],
                            "type": "tween"
                        },
                        "x": 0,
                        "y": 0
                    },
                    "variantHash": "nkesoh",
                    "initial": {
                        "opacity": 0.001,
                        "rotate": 0,
                        "rotateX": 0,
                        "rotateY": 0,
                        "scale": 1,
                        "x": 0,
                        "y": 100
                    },
                    "transformTemplate": "perspective(1200px) __Appear_Animation_Transform__"
                },
                "1huijcv": {
                    "animate": {
                        "opacity": 1,
                        "rotate": 0,
                        "rotateX": 0,
                        "rotateY": 0,
                        "scale": 1,
                        "transition": {
                            "delay": 0,
                            "duration": 1,
                            "ease": [0.12, 0.23, 0.5, 1],
                            "type": "tween"
                        },
                        "x": 0,
                        "y": 0
                    },
                    "variantHash": "1tnyjl3",
                    "initial": {
                        "opacity": 0.001,
                        "rotate": 0,
                        "rotateX": 0,
                        "rotateY": 0,
                        "scale": 1,
                        "x": 0,
                        "y": 100
                    },
                    "transformTemplate": "perspective(1200px) __Appear_Animation_Transform__"
                },
                "1gozwrb": {
                    "animate": {
                        "opacity": 1,
                        "rotate": 0,
                        "rotateX": 0,
                        "rotateY": 0,
                        "scale": 1,
                        "transition": {
                            "delay": 0,
                            "duration": 1,
                            "ease": [0.12, 0.23, 0.5, 1],
                            "type": "tween"
                        },
                        "x": 0,
                        "y": 0
                    },
                    "variantHash": "72rtr7",
                    "initial": {
                        "opacity": 0.001,
                        "rotate": 0,
                        "rotateX": 0,
                        "rotateY": 0,
                        "scale": 1,
                        "x": 0,
                        "y": 100
                    },
                    "transformTemplate": "perspective(1200px) __Appear_Animation_Transform__"
                },
                "1worge9": {
                    "animate": {
                        "opacity": 0.6,
                        "rotate": 0,
                        "rotateX": 0,
                        "rotateY": 0,
                        "scale": 1,
                        "transition": {
                            "delay": 0.2,
                            "duration": 1,
                            "ease": [0.12, 0.23, 0.5, 1],
                            "type": "tween"
                        },
                        "x": 0,
                        "y": 0
                    },
                    "variantHash": "nkesoh",
                    "initial": {
                        "opacity": 0.001,
                        "rotate": -2,
                        "rotateX": 0,
                        "rotateY": 10,
                        "scale": 1,
                        "x": -20,
                        "y": 100
                    },
                    "transformTemplate": "perspective(1200px) __Appear_Animation_Transform__"
                },
                "gsdeoy": {
                    "animate": {
                        "opacity": 0.6,
                        "rotate": 0,
                        "rotateX": 0,
                        "rotateY": 0,
                        "scale": 1,
                        "transition": {
                            "delay": 0.2,
                            "duration": 1,
                            "ease": [0.12, 0.23, 0.5, 1],
                            "type": "tween"
                        },
                        "x": 0,
                        "y": 0
                    },
                    "variantHash": "72rtr7",
                    "initial": {
                        "opacity": 0.001,
                        "rotate": -2,
                        "rotateX": 0,
                        "rotateY": 10,
                        "scale": 1,
                        "x": -20,
                        "y": 100
                    },
                    "transformTemplate": "perspective(1200px) __Appear_Animation_Transform__ rotate(-4deg)"
                },
                "b5darq": {
                    "animate": {
                        "opacity": 1,
                        "rotate": 0,
                        "rotateX": 0,
                        "rotateY": 0,
                        "scale": 1,
                        "transition": {
                            "delay": 0,
                            "duration": 1,
                            "ease": [0.12, 0.23, 0.5, 1],
                            "type": "tween"
                        },
                        "x": 0,
                        "y": 0
                    },
                    "variantHash": "nkesoh",
                    "initial": {
                        "opacity": 0.001,
                        "rotate": 2,
                        "rotateX": 0,
                        "rotateY": -10,
                        "scale": 1,
                        "x": 20,
                        "y": 100
                    },
                    "transformTemplate": "perspective(1200px) __Appear_Animation_Transform__"
                },
                "1xlfpqt": {
                    "animate": {
                        "opacity": 1,
                        "rotate": 0,
                        "rotateX": 0,
                        "rotateY": 0,
                        "scale": 1,
                        "transition": {
                            "delay": 0,
                            "duration": 1,
                            "ease": [0.12, 0.23, 0.5, 1],
                            "type": "tween"
                        },
                        "x": 0,
                        "y": 0
                    },
                    "variantHash": "1tnyjl3",
                    "initial": {
                        "opacity": 0.001,
                        "rotate": 2,
                        "rotateX": 0,
                        "rotateY": -10,
                        "scale": 1,
                        "x": 20,
                        "y": 100
                    },
                    "transformTemplate": "perspective(1200px) __Appear_Animation_Transform__"
                },
                "12sylr3": {
                    "animate": {
                        "opacity": 1,
                        "rotate": 0,
                        "rotateX": 0,
                        "rotateY": 0,
                        "scale": 1,
                        "transition": {
                            "delay": 0,
                            "duration": 1,
                            "ease": [0.12, 0.23, 0.5, 1],
                            "type": "tween"
                        },
                        "x": 0,
                        "y": 0
                    },
                    "variantHash": "72rtr7",
                    "initial": {
                        "opacity": 0.001,
                        "rotate": 2,
                        "rotateX": 0,
                        "rotateY": -10,
                        "scale": 1,
                        "x": 20,
                        "y": 100
                    },
                    "transformTemplate": "perspective(1200px) __Appear_Animation_Transform__ rotate(4deg)"
                }
            }
            const activeVariantHash = animator.getActiveVariantHash(breakpoints)
            const animate = (selector,keyframesByProps,optionsByProps)=>{
                for (const [name,keyframes] of Object.entries(keyframesByProps)) {
                    const options = optionsByProps[name]
                    const element = document.querySelector(selector)
                    if (!element)
                        continue
                    const animation = animator.startOptimizedAppearAnimation(element, name, keyframes, options)
                }
            }
            animator.animateAppearEffects(appearAnimations, animate, "data-framer-appear-id", "__Appear_Animation_Transform__", reducedMotion, activeVariantHash)
        }
    }
}
)