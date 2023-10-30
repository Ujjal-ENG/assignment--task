import Aos from 'aos';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import LoadingSpinner from './components/layouts/shared/LoadingSpinner';
import Navbar from './components/layouts/shared/Navbar';
import Home from './components/pages/Home/Home';

const App = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 400
        });
    }, []);
    const [isLoading, setIsLoading] = useState(document.readyState !== 'complete');

    useLayoutEffect(() => {
        const handlePageLoad = () => {
            setIsLoading(false);
            Aos.refresh();
        };

        if (!isLoading) {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        return () => {
            window.removeEventListener('load', handlePageLoad);
        };
    }, [isLoading]);
    if (isLoading) {
        return (
            <div>
                <LoadingSpinner />
            </div>
        );
    }
    return (
        <div>
            <Navbar />
            <Home />
        </div>
    );
};

export default App;
