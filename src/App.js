import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import CalendarPage from './pages/CalendarPage';
import InboxPage from './pages/InboxPage';
import AnalyticsPage from './pages/AnalyticsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column vh-100">
        <Header />
        <div className="d-flex flex-grow-1">
          <Sidebar />
          <main className="p-4 flex-grow-1">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/calendar" component={CalendarPage} />
              <Route path="/inbox" component={InboxPage} />
              <Route path="/analytics" component={AnalyticsPage} />
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;