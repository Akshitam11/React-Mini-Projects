import { useState, useEffect } from "react";

function useNetworkStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const online = () => setIsOnline(true);
        const offline = () => setIsOnline(false);

        window.addEventListener("online", online);
        window.addEventListener("offline", offline);
    }, []);

    return isOnline;
}

export default useNetworkStatus
