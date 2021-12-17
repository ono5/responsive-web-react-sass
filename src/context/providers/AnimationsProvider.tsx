import { useEffect } from "react";
import AnimationsContext from "../AnimationsContext";

const AnimationsProvider = (props: any) => {
	const scrollAnimations = () => {
		const animation = (elements: NodeListOf<Element>, className: string) => {
			elements.forEach((element: Element) => {
				const elementPosition = element.getBoundingClientRect().top
				const viewPortHeight = window.innerHeight - 150
				if (elementPosition < viewPortHeight) {
					element.classList.add(className)
				} else {
					element.classList.remove(className)
				}
			})
		}
		const elements = document.querySelectorAll('.animation')
		const headingElements = document.querySelectorAll('.headingAnimation')
		animation(elements, 'animate')
		animation(headingElements, 'headingAnimate')
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollAnimations)
	}, [])

	return (
		<AnimationsContext.Provider value={{}}>
			{props.children}
		</AnimationsContext.Provider>
	)
}

export default AnimationsProvider
