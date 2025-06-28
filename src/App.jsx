    import './App.css';
    import Home from './Components/Home';
    import Intro from './Components/Intro';
    import Nick from './Components/Nick';
    import Header from './Components/Header';
    import Footer from './Components/Footer';
    import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

    function App(){
        return (
            <div id="wrap">
                <Header />
                <main>
                    <BrowserRouter>
                    <nav>
                        <Link to="/">유재석</Link>
                        <Link to="/intro">인적사항</Link>
                        <Link to="/nick">별명&특징</Link>
                    </nav>
                    <Routes>
                        <Route path="/jaesuk" element={<Home />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/intro" element={<Intro />} />
                        <Route path="/nick" element={<Nick />} />
                    </Routes>
                    </BrowserRouter>
                </main>
                <Footer />
            </div>
        )
    }

    export default App;