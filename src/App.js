import { Route, Routes } from 'react-router-dom';
import EditUser from './components/EditUser';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/edit-user/:id' element={<EditUser />} />
            </Routes>
        </>
    );
}

export default App;
