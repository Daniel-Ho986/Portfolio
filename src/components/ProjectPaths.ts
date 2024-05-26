export const projects = [
	{
		title: "My Portfolio",
		description: "Explore my professional journey, skills, and projects in one place with my portfolio.",
		image: "../../assets/project-images/portfolio.png",
		code: "https://github.com/Daniel-Ho986/Portfolio",
		site: "https://daniel-ho986-portfolio.netlify.app/",
		techStack: [
            { path: "astro.svg", alt: "Astro", modeClasses: ["light-mode-only"] },
            { path: "astro-dark.svg", alt: "Astro", modeClasses: ["dark-mode-only"] },
			{ path: "javascript.svg", alt: "JavaScript", modeClasses: [] },	
			{ path: "typescript.svg", alt: "TypeScript", modeClasses: [] },
			{ path: "css3.svg", alt: "CSS3", modeClasses: [] },
		]
	},
	{
		title: "Campsite",
		"description": "Discover and share the best camping spots with Campsite. Browse, create, and review campgrounds with full CRUD functionality, interactive maps, image uploads, and user authentication.",
		image: "../../assets/project-images/campsite.png",
		code: "https://github.com/Daniel-Ho986/campsite",
		site: "https://campsite-5u82.onrender.com/",
		techStack: [
			{ "path": "nodejs.svg", "alt": "Node.js", "modeClasses": [] },
			{ "path": "express.svg", "alt": "Express", "modeClasses": [] },
			{ "path": "mongodb.svg", "alt": "MongoDB", "modeClasses": [] },
			// { "path": "mongoose.svg", "alt": "Mongoose", "modeClasses": [] },
			// { "path": "cloudinary.svg", "alt": "Cloudinary", "modeClasses": [] },
			// { "path": "bootstrap.svg", "alt": "Bootstrap", "modeClasses": [] },
		]
	},
	{
		title: "Mini Project Showcase",
		description: "Discover a collection of creative mini-projects showcasing HTML, CSS, and JavaScript skills.",
		image: "../../assets/project-images/mini-project-showcase.png",
		code: "https://github.com/Daniel-Ho986/mini-project-showcase",
		site: "https://daniel-ho986-mini-project-showcase.netlify.app/",
		techStack: [
			{ path: "html5.svg", alt: "HTML5", modeClasses: [] },
			{ path: "css3.svg", alt: "CSS3", modeClasses: [] },
			{ path: "javascript.svg", alt: "JavaScript", modeClasses: [] },
		]
	}
]