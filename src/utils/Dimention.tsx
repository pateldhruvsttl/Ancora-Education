import React, { useEffect, useState } from 'react'

function Dimention() {
    const [dimensions, setDimensions] = useState(getDimensions());

    function getDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }
    useEffect(() => {
        function handleResize() {
            setDimensions(getDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (dimensions)
}

export default Dimention