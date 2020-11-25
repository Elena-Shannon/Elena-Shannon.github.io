
     const t = parseFloat(document.getElementById('highT').textContent);
     const s = parseFloat(document.getElementById('windSpeed').textContent);
       let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
       windChill = Math.round(f);
    if (t <= 50 && s > 3) {
         document.getElementById("windChill").textContent = windChill + "\u00B0 F";
     }
    else {
           document.getElementById("windChill").textContent = "N/A";
}

