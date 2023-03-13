import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './pages/Home';
import 'antd/dist/reset.css';

function App(){
    return (
        <div className="container main-layout">
            <header className="text-center d-flex row flex-column layout- header"></header>
            <div className="row layout-content"></div>
            <footer className="text-center d-flex row flex-column layout-footer"></footer>
        </div>
    );
}

export default App;