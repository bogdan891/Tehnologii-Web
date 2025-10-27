async function getPlanesOverRomania() {
    const URL = "https://opensky-network.org/api/states/all";
    try {
        const response = await fetch(URL);
        if(!response.ok) throw new Error(`(!) HTTP ERROR (!) Status: ${response.status}`);

        const data = await response.json();
        
        const planes = data.states.filter(p => {
            const lat = p[6], lon = p[5];
            return lat && lon && lat >= 43.6 && lat <= 48.3 && lon >= 20.2 && lon <= 29.7
        });

        console.log("Planes over Romania: ");
        planes.forEach(p => console.log(p));
    } catch (e) {
        console.error("Error: ", e.message);
    }
}

getPlanesOverRomania();