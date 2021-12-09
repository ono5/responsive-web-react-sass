import { Link } from "react-router-dom"
import { BsChevronRight } from "react-icons/bs"
const ShowFooterLinks = (props: {links: any, external: boolean}) => {
	return props.links.map((link:any) => (
		<ul className="footer__ul" key={link.id}>
			<li className="footer__ul__li">
				{
				  props.external
				  	?
					(
						<>
							<BsChevronRight size={12} /><a href={link.route} target='_blank'>{link.name}</a>
						</>
					)
				    :
					(
						<>
						<BsChevronRight size={12} />
							<Link
								to={
									link.hasOwnProperty('route') ? link.route : `/details/${link.id}`
								}
							>
								{link.name}
							</Link>
						</>
					)
				}
			</li>
		</ul>
	))
}

export default ShowFooterLinks
