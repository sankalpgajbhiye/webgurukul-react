import './App.css';
import Header from './Components/Header';
import { Section, Footer } from './Components/Footer';

import SectionOne from './Components/SectionOne';
// import SectionThree from './Components/SectionThree';

import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

function App() {
	// console.log('jhfds');
	// const myArr = [
	//   { name: "sankalp", city: "nagpur" }
	// ];

	// const myObj = { 
	//   name: "akansha", city: "nagpur"
	// };

	return (
		<div className='App'>
			<div>

			</div>
			<p>React Router Dom (V6)</p>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Header />} />
					<Route path="/card" element={<SectionOne />} />
					<Route path="/footer/:id/:page" element={<Footer />} />

					{/* <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            
          </Route> */}
				</Routes>
			</BrowserRouter>


			{/* <Header 
          heading="calculator one"
          address={myArr}
          myObj={myObj}
        /> */}
			{/* <Footer />
        <Section /> */}

			{/* <SectionOne />
        <SectionThree /> */}
		</div>
	);
}

export default App;
