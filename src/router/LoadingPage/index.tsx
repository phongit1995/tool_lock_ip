import LoadingProgress from '../../components/LoadingProgress';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoadingPage() {
    const [percent, setPercent] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (percent >= 100) {
            const addressService = localStorage.getItem('addressService');
            if (addressService) {
                const address = JSON.parse(addressService);
                if (!address.link) {
                    navigate('/');
                    return;
                } else {
                    navigate(address.link);
                }
            }
        }
        setTimeout(() => { setPercent(prev => prev + 1) }, 50);
    }, [percent]);

    return <LoadingProgress percent={percent} fullscreen />;
}

export default LoadingPage;