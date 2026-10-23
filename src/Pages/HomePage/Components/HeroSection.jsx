import React from 'react'
import { AnimatedMarqueeHero } from '@/components/ui/hero-3'

const JEWELRY_IMAGES = [
	'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=500&h=800&q=85',
	'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&h=800&q=85',
	'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&h=800&q=85',
	'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=500&h=800&q=85',
	'https://plus.unsplash.com/premium_photo-1663956141524-14ad9478e72e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
	'https://images.unsplash.com/photo-1628058494685-6c2f796ac24a?auto=format&fit=crop&w=900&h=700&q=85',
	'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&h=800&q=85',
	'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=500&h=800&q=85',
]

const HeroSection = () => {
	return (
		<AnimatedMarqueeHero
			tagline="Aurvanta Jewels · Made to be treasured"
			title={
				<>
					Made with care,
					<br />
					meant to last.
				</>
			}
			description="Discover thoughtfully designed jewelry, shaped by skilled hands and finished with an eye for every detail. Aurvanta brings enduring materials and modern design together in pieces to keep close."
			ctaText="Explore the Collection"
			ctaHref="#contact"
			images={JEWELRY_IMAGES}
		/>
	)
}

export default HeroSection
