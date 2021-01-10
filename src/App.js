import React, {Fragment} from "react";
import Student from "./student";
import Footer from "./footer";
import Contents from "./contents";
import "./design/student.css";
const App = () => {
  return (
    <>
		<nav className = "fixed-top">
			<label id = "logo">ReactJS</label>
			<label id = "list">
				<ul>
					<li>Home</li>
					<li>About</li>
				</ul>
			</label>
		</nav>
		<div className = "Intro">
			<h1>ReactJs Framework</h1>
		</div>
    <div className="content container-fluid">
		<div className = "contents"><Contents info="React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries." /></div>
		<div className = "contents"><Contents info="React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries" /></div>
	</div>
	<div className="components">
		<div className = "manju"><Student name = "react"/></div>
		<div className = "contents"><Contents info="React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries." /></div>
	</div>
	<div className="components">
		<div className = "contents"><Contents info="React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries." /></div>
		<div className = "manju"><Student name = "react2"/></div>
	</div>
	<div className="components">
		<div className = "manju"><Student name = "react3"/></div>
		<div className = "contents"><Contents info="React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries." /></div>
	</div>
	<footer>
		<p><Footer detail = "Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!" /></p>
		<p><Footer detail = "Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018." /></p>
		<p><Footer detail = "Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer." /></p>
	</footer>
    </>
  );
}
export default App;
