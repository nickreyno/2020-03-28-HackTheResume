import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
// import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			keys: [],
			values: [],
			htmlToAppend: [],
			rawObject: {
				basics: {
					name: "John Doe",
					label: "Programmer",
					picture: "",
					email: "john@gmail.com",
					phone: "(912) 555-4321",
					website: "http://johndoe.com",
					summary: "A summary of John Doe...",
					location: {
						address: "2712 Broadway St",
						postalCode: "CA 94115",
						city: "San Francisco",
						countryCode: "US",
						region: "California"
					},
					profiles: [
						{
							network: "Twitter",
							username: "john",
							url: "http://twitter.com/john"
						}
					]
				},
				work: [
					{
						company: "Company",
						position: "President",
						website: "http://company.com",
						startDate: "2013-01-01",
						endDate: "2014-01-01",
						summary: "Description...",
						highlights: ["Started the company"]
					}
				],
				volunteer: [
					{
						organization: "Organization",
						position: "Volunteer",
						website: "http://organization.com/",
						startDate: "2012-01-01",
						endDate: "2013-01-01",
						summary: "Description...",
						highlights: ["Awarded 'Volunteer of the Month'"]
					}
				],
				education: [
					{
						institution: "University",
						area: "Software Development",
						studyType: "Bachelor",
						startDate: "2011-01-01",
						endDate: "2013-01-01",
						gpa: "4.0",
						courses: ["DB1101 - Basic SQL"]
					}
				],
				awards: [
					{
						title: "Award",
						date: "2014-11-01",
						awarder: "Company",
						summary: "There is no spoon."
					}
				],
				publications: [
					{
						name: "Publication",
						publisher: "Company",
						releaseDate: "2014-10-01",
						website: "http://publication.com",
						summary: "Description..."
					}
				],
				skills: [
					{
						name: "Web Development",
						level: "Master",
						keywords: ["HTML", "CSS", "Javascript"]
					}
				],
				languages: [
					{
						language: "English",
						fluency: "Native speaker"
					}
				],
				interests: [
					{
						name: "Wildlife",
						keywords: ["Ferrets", "Unicorns"]
					}
				],
				references: [
					{
						name: "Jane Doe",
						reference: "Reference..."
					}
				]
			}
		};
	}

	componentDidMount() {
		const keys = Object.keys({ ...this.state.rawObject });
		const values = Object.values({ ...this.state.rawObject });
		keys.forEach((item, index) => {});
		this.setState({
			keys,
			values
		});
	}

	createInfo = i => {
		const section = Object.values([...this.state.values]);
		let htmlToAppend = [];
		for (let item in section[i]) {
			if (typeof section[i][item] != "object") {
				htmlToAppend.push(`${item}: ${section[i][item]}`);
			} else if (typeof section[i][item] == "array") {
				for (let innerItem in section[i][item]) {
					htmlToAppend.push(`${innerItem}: ${section[i][item][innerItem]}`);
				}

				// come back to this
				// } else if (Array.isArray(section[i][item])) {
				// 	console.log(section[i][item][0]);
				// 	for (let b = 0; b < section[i][item].length; b++) {
				// 		htmlToAppend.push(`${Object.keys(section[i][item][b])}: ${Object.values(section[i][item][b])}`);
				// 	}
			}
		}
		return htmlToAppend.map((item, index) => {
			return <p key={index + "info"}>{item}</p>;
		});
	};


  // I know this is unfinished but it's as far as I got
	createInfoArray = i => {
		let htmlToAppend = [];
		const section = Object.values([...this.state.values]);
    section[i].map((item, index) =>{
      const myKeys = Object.keys(item)
      const myValues = Object.values(item)
      for (let b = 0; b < section[i].length; b++) {
        htmlToAppend.push(`${myKeys[b]}: ${myValues[b]}`);
      }
    })
    return htmlToAppend.map((item, index) => {
			return <p key={index + "info"}>{item}</p>;
		});
  }

	render() {
		const app = this.state;
		const appRaw = this.state.rawObject;
		return (
			<Fragment>
				<header>
					<h1>{appRaw.basics.name}'s Resume</h1>
				</header>
				<main>
					{app.keys.map((item, index) => {
						return (
							<div className="resumeSection" key={index + "header"}>
								<h2>{item}</h2>
								{index == 0 ? this.createInfo(index) : this.createInfoArray(index)}
							</div>
						);
					})}
				</main>
				<footer>{/* <p>copyright Nick Reyno</p> */}</footer>
			</Fragment>
		);
	}
}

export default App;
