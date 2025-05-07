// File: src/App.jsx

export default function App() {
  return (
    <>
      <main className="text-gray-900 min-h-screen container mx-auto px-4 py-8">
        {/* Title section */}
        <header className="text-center mb-12">

          <h1 className="text-2xl font-semibold">Smart Air Purifier 💨</h1>

          <div className="flex items-center justify-center mt-4 space-x-4">
            <img
              src="/fh-logo.png"
              alt="FH Oberösterreich Logo"
              className="h-10 w-auto"
            />
            <p className="text-lg text-gray-600">
              Pervasive Computing FH Hagenberg Project
            </p>
          </div>
          <p className="mt-4">
            Team: Jan Eberwein, Rawan Gomaa, Florian Guggenberger, Lisa Reichl, Leonhard Schnaitl
          </p>
        </header>


        {/* Table of Contents */}
        <nav className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="#introduction" className="text-blue-600 hover:underline">Introduction</a></li>
            <li><a href="#parts" className="text-blue-600 hover:underline">Parts List</a></li>
            <li><a href="#assembly" className="text-blue-600 hover:underline">Assembly & Wiring</a></li>
            <li><a href="#sensors" className="text-blue-600 hover:underline">Sensors & LoRaWAN</a></li>
            <li><a href="#display" className="text-blue-600 hover:underline">Holographic Display</a></li>
            <li><a href="#dashboard" className="text-blue-600 hover:underline">Data & Grafana Dashboard</a></li>
            <li><a href="#control" className="text-blue-600 hover:underline">Fan Control</a></li>
          </ul>
        </nav>

        {/* Introduction */}
        <section id="introduction" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
          <p>
            In this tutorial, we will build a smart air purifier with a HEPA filter and PC fan attachment. This project is
            part of the Pervasive Computing course at FH Hagenberg. Each team member contributed key components:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Jan Eberwein:</strong> HEPA Filter Enclosure, Fan-Filter assembly and Fan control</li>
            <li><strong>Leonhard Schnaitl:</strong> Air Quality Sensors & LoRaWAN Data Transfer</li>
            <li><strong>Lisa Reichl:</strong> Holographic display + LoRaWAN Data Transfer</li>
            <li><strong>Florian Guggenberger &amp; Rawan Gomaa:</strong> Grafana Dashboard and DB storage</li>
          </ul>
        </section>

        {/* Parts List */}
        <section id="parts" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Parts List</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Component</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">ESP32 WROOM32</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://amzn.to/esp32" className="text-blue-600 hover:underline">Amazon</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">120mm PC Fan</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://amzn.to/fan" className="text-blue-600 hover:underline">Amazon</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Round HEPA Filter</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://amzn.to/hepa" className="text-blue-600 hover:underline">Amazon</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2N2222 Transistor</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://amzn.to/2n2222" className="text-blue-600 hover:underline">Amazon</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">10kΩ Resistor</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://amzn.to/10k" className="text-blue-600 hover:underline">Amazon</a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Assembly Step */}
        <section id="assembly" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Assembly & Wiring</h2>
          <p>
            First, assemble the 3D-printed adapter onto the HEPA filter and attach the PC fan. Then wire the power and
            PWM control:
          </p>
          <ul className="list-decimal list-inside mt-4 space-y-2">
            <li>Place the adapter on the HEPA filter and screw the fan onto the adapter.</li>
            <li>Connect the fan's +12V and GND to the breadboard power rails.</li>
            <li>
              Insert the 2N2222 transistor: base via 10kΩ resistor to ESP32 GPIO13, emitter to GND, collector to the fan's
              PWM pin.
            </li>
            <li>Connect the ESP32 GND to the breadboard GND.</li>
          </ul>
        </section>

        {/* Sensors Step */}
        <section id="sensors" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Sensors & LoRaWAN</h2>
          <p>
            Air quality is measured with PM2.5 and CO₂ sensors. Data is sent over LoRaWAN to The Things Network. Sample code:
          </p>
          <pre className="bg-[#262626] text-white p-4 rounded">
            <code className="language-cpp">{`
              /* Leonhard's LoRaWAN Code */
              // Setup sensor and LoRa
              // Serial.begin(9600);
              // Sensor.readPM();
              // LoRa.begin();
              // LoRa.send(data);
            `}</code>
          </pre>
        </section>

        {/* Display Step */}
        <section id="display" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Holographic Display</h2>
          <p>
            The holographic display uses a transparent pyramid and a small OLED. Sample code:
          </p>
          <pre className="bg-[#262626] text-white p-4 rounded">
            <code className="language-javascript">{`
              /* Lisa's OLED Code */
              // OLED.init();
              // OLED.print("Air Quality: " + data.value);
            `}</code>
          </pre>
        </section>

        {/* Dashboard Step */}
        <section id="dashboard" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Data & Grafana Dashboard</h2>
          <p>
            Florian & Rawan store data in MariaDB and visualize it in Grafana. SQL schema:
          </p>
          <pre className="bg-[#262626] text-white p-4 rounded">
            <code className="language-sql">{`
              CREATE TABLE air_quality (
                id INT AUTO_INCREMENT,
                timestamp DATETIME,
                pm25 FLOAT,
                co2 FLOAT,
                PRIMARY KEY(id)
              );
            `}</code>
          </pre>
          <p>
            Dashboard URL:{' '}
            <a href="https://grafana.example.com" className="text-blue-600 hover:underline">
              https://grafana.example.com
            </a>
          </p>
        </section>

        {/* Control Step */}
        <section id="control" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Fan Control</h2>
          <p>
            Jan implemented PWM control with the ESP32. Example code in <code>fanControl.ino</code>:
          </p>
          <pre className="bg-[#262626] text-white p-4 rounded">
            <code className="language-arduino">{`
              /* fanControl.ino */
              // Setup PWM on GPIO13 using analogWrite
              // void loop() {
              //   analogWrite(13, duty);
              // }
            `}</code>
          </pre>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-sm text-gray-600">
          &copy; 2025 FH Hagenberg. Jan Eberwein, Rawan Gomaa, Florian Guggenberger, Lisa Reichl, Leonhard
          Schnaitl
        </div>
      </footer>
    </>
  );
}
