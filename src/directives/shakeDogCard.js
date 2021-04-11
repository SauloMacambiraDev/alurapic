import Vue from 'vue'

function animateEl(element, animationType = 'rotate', animationValue = 15, isAnimationFast = false){
    const allowedAnimations = ['rotate', 'translate', 'scale']
    const animation = allowedAnimations.includes(animationType) ? animationType : 'rotate'

    console.log(animation)
    if(animation == 'rotate'){
        element.animate([
            { transform: `rotate(-${animationValue}deg)` },
            { transform: `rotate(${animationValue}deg)` },
            { transform: `rotate(-${animationValue}deg)` },
            { transform: `rotate(${animationValue}deg)` },
            { transform: `rotate(0deg)` },
        ],
        {
            duration: isAnimationFast ? 600 : 2000, // milliseconds
            iterations: 1,
            easing: "ease-out"
        })
    }

    if(animation == 'translate'){
        element.animate([
            { transform: `translate(-${animationValue}px)` },
            { transform: `translate(${animationValue}px)` },
            { transform: `translate(-${animationValue}px)` },
            { transform: `translate(${animationValue}px)` },
            { transform: `translate(0px)` },
        ],
        {
            duration: isAnimationFast ? 600 : 2000, // milliseconds
            iterations: 1,
            easing: "ease-out"
        })
    }
    if(animation == 'scale'){
        element.animate([
            { transform: `scale(-${animationValue}, -${animationValue})` },
            { transform: `scale(${animationValue}), (${animationValue})` },
            { transform: `scale(-${animationValue}), -${animationValue})` },
            { transform: `scale(${animationValue}, (${animationValue}))` },
            { transform: `scale(0)` },
        ],
        {
            duration: isAnimationFast ? 600 : 2000, // milliseconds
            iterations: 1,
            easing: "ease-out"
        })
    }
}

Vue.directive('shake-dogcard', {
    bind(el, binding, vnode) {
        console.log('binding:')
        console.log(binding)

        const degrees = binding.value || 15
        const typeOfAnimation = binding.arg || 'rotate'

        el.addEventListener('click', function(){
            animateEl(el, binding.arg, binding.value, binding.modifiers.fastAnimation)
        })
    }
})
