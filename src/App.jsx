// File: src/App.jsx

export default function App() {
  return (
    <>
      <main className="text-gray-900 min-h-screen container mx-auto px-4 py-8">
        {/* Title section */}
        <header className="text-center mb-12 ">

          <h1 className="text-2xl font-semibold">Smart Air Purifier 💨</h1>

          <div className="flex items-center justify-center mt-4 space-x-4">
            <img
              src="src/assets/fh-logo.png"
              alt="FH Oberösterreich Logo"
              className="h-10 w-auto"
            />
            <p className="text-lg text-gray-600">
              Pervasive Computing FH Hagenberg Project
            </p>
          </div>
          <p className="mt-4">
            Jan Eberwein, Rawan Gomaa, Florian Guggenberger, Lisa Reichl, Leonhard Schnaitl
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="#introduction" className="text-blue-600 hover:underline">Introduction</a></li>
            <li><a href="#parts" className="text-blue-600 hover:underline">Parts List</a></li>
            <li><a href="#assembly" className="text-blue-600 hover:underline">Assembly Fan + HEPA Filter</a></li>
            <li><a href="#control" className="text-blue-600 hover:underline">Wiring + Fan Control</a></li>
            <li><a href="#sensors" className="text-blue-600 hover:underline">Sensors & LoRaWAN</a></li>
            <li><a href="#display" className="text-blue-600 hover:underline">Holographic Display</a></li>
            <li><a href="#dashboard" className="text-blue-600 hover:underline">Data & Grafana Dashboard</a></li>
            <li><a href="#dataflow" className="text-blue-600 hover:underline">MQTT & Node-RED Dataflow</a></li>
    
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
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/diymore-Nodemcu-Development-Bluetooth-2-ESP32/dp/B0D9BTQRYT/ref=sr_1_3_sspa?dib=eyJ2IjoiMSJ9.0HQysaHgEqFjRs7m20z3kM_xcrtW78mFH_y8RmyvqQzLePX4-fISal3_aMWBirRvXRtX8Nh10a3ajRwbx-1sthttnNRSLyZ6Vr51j-sCN2oARa6N7SgZ7cXWoo_ptd6_FdXtu5h5luil4PcD8Ou1JoGjZ7n_jAXiUarduIBiJ9BAH-B76abPbc2Nednnfxx5wtdpDXGrVFHkQPyxgQkL5t_sGOyrX4F_UIaT6ZMJXVY.JGJFnu33OYTIhLidv9autoIb-5FWDU6OxmajTQxYqhg&dib_tag=se&keywords=wroom%2B32&qid=1746689788&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ARCTIC P12 Max - 120mm PC Fan</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/gp/product/B09VDNKL4G/ref=ox_sc_saved_image_1?smid=AUBM4K0YLFI9J&psc=1" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Amazon Basics Round True HEPA Filter</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/gp/product/B09W9GTZT2/ref=ox_sc_act_image_5?smid=A3JWKAKR8XB7XF&th=1" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">BC547 Transistor</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/Transistors-Leistungstransistor-Sortiment-Kunststoff-Aufbewahrungsbox/dp/B097XRFK3H/ref=sr_1_1_sspa?crid=2NI0M4W63LWQO&dib=eyJ2IjoiMSJ9.mpW9oGooIYqSyQCReCJ8MawJiFaJtcpkzjOIbGD-AoBrR_h84ZcDOwKHU91pZEaYNQNa74af26mWicP3WsgVw6tEJZdhebef3xn-L3W62RQdvjMzzWKRwThVbQPiZ-O6ueSPi7PBrus0weMJzkbESKpzSYWrh5G_FTefuO3Qt2fRl2y-CQz0WCmlWfvDmg4uL3yeLV3CkGYrtSSB1LRYQzLSN5EMhF0R-hePFE5uhpl0w90WNe6W-MkzxEMESXDRM-dwTnPsZMTZOyGYCVTs6vkKKiQBsqmc6UNhJWHRtqA.dS6ZEPUZtMfG67GjA7TMT194OQdB9HwDzp03TiE8-5A&dib_tag=se&keywords=bc547+transistor&qid=1746690151&sprefix=BC547+Tran%2Caps%2C107&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">10kΩ Resistor</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/Kaiserberg-10K-Widerst%C3%A4nde-St%C3%BCck-DIY-Elektronikprojekte/dp/B0DYPD6XTN/ref=sr_1_1_sspa?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=G8GDDV4AWVC2&dib=eyJ2IjoiMSJ9.pe0UK4LSgfd7x3gdYEgY1iel3jK2tgVRUG-p2XZx1lDf8Wj8-RFEgFMkAVeKLl2iNvAGRg0qEU4m1wpMX-DPBP3b-BikFfB3mgjIZLp20QqsMHJHjsmG8zEBQXT7EtHvv4KobYPeg70xm571lvPqoBuarICdiDpff2I-Tj4fUBgMwv6q2lk9rU5Y8ML4HdEB20vWsRF2pQ2ghRvtTT0chLvCr8Rs1y--u2oQAlRvohbEkdvZ5odfty9BKtQYEqDOOmC7K2wd5DTOxHzHPwAaimeQPBfdgDzsKd7cQXOHuy0.NJG-rKkF9EGtQBjGHmLBhekKfRYfQwWl0gItTxUL5V4&dib_tag=se&keywords=10+kiloohm+resistor&qid=1746689845&sprefix=10+kiloohm+resistor%2Caps%2C80&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">12V Power Supply</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/JZK-Ladeger%C3%A4t-Ersatz-Netzteil-Lichtleiste-Alarmanlage/dp/B0F18ZV715/ref=sr_1_7?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20DOUB8A5MV8L&dib=eyJ2IjoiMSJ9.nuNjI4IX-8eZWxNx0FXEDeR9OUKFsXTd-PFxZeFe8G0dCVSKnAnhorQKjegLawXCg2qzNvWKClL02et8jjPRfsJVTrdlQjUCK5FKpbhZAL-wF6WrSGd8Bfvds_Jd_QBDhuxi8-FXFC516_hWxDZKpnqlnjCHZt1Rdt52iD9AFxcCL76rQfgzwD5YFWMLzCpKS1OQBrXt-vlSvUbVqT9aTeW5wIetdvnj6N_BA1iYQkbInBZ5YSF0c8BFgCaPYcHgkZAMZYy54450ceJEywX-fKDFhuRW_qVExFwEsGMO0RA.EmTkI7o8YySFcH4MXpbbn18nDOTXR3PeZWgJoz2527E&dib_tag=se&keywords=12V+Netzteil&qid=1746689946&sprefix=12v+netzteil%2Caps%2C111&sr=8-7" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Assembly Step for Fan + HEPA Filter */}
        <section id="assembly" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Assembly Fan + HEPA Filter</h2>
          <p>
            To make an airtight connection between the HEPA filter and the fan, Jan designed a 3D-printed adapter.
            <br /><br />
            OpenSCAD Code:

          </p>
          <pre className="bg-[#262626] text-white p-4 rounded">
            <code className="language-scad">{`
// -----------------------------
// HEPA Filter Adapter
// -----------------------------
// 120mm fan to 123mm HEPA filter adapter (round flange plate, straight transition)
$fn = 200; // high resolution for smooth round shapes

// Configurable parameters
screwhole = 5;          // Diameter of the fan screw holes
filterhole = 123;       // Outer diameter of the filter insert
thickness = 1.5;        // Thickness of the flange plate
insert = 15;            // Length of the insert piece that fits into the filter
flange_diameter = 173;  // Diameter of the round flange plate

// Derived parameters
cone = 0;               // No cone → vertical (straight) transition
wall = thickness * 2;   // Wall thickness of the insert section (inner diameter)

difference() {
  union() {
    // Round flange plate
    translate([60, 60, 0])
      cylinder(h = thickness, d = flange_diameter);

    // Straight transition without cone (cylinder)
    translate([60, 60, thickness])
      cylinder(h = insert, d = filterhole);
  }

  // Inner hollow space inside the filter insert
  translate([60, 60, thickness])
    cylinder(h = insert, d = filterhole - wall);

  // Central air opening in the flange plate
  translate([60, 60, -1])
    cylinder(h = thickness + 2, d = 116);

  // Fan screw holes
  translate([7.5, 7.5, -1])
    cylinder(h = thickness + 2, d = screwhole);
  translate([7.5, 112.5, -1])
    cylinder(h = thickness + 2, d = screwhole);
  translate([112.5, 7.5, -1])
    cylinder(h = thickness + 2, d = screwhole);
  translate([112.5, 112.5, -1])
    cylinder(h = thickness + 2, d = screwhole);
}
            `}
            </code>
          </pre>
          <br />
          <p>
            After printing the adapter, you can assemble the fan and filter as follows:
          </p>
          <ul class="list-decimal list-inside mt-4 space-y-2">
            <li>
              Place the adapter on the HEPA filter and screw the fan onto the adapter.
              (Make sure to check the direction of the airflow through the fan to ensure correct assembly.)
            </li>
            <li>
              For a fully airtight seal, insulate the area where the fan is screwed onto the adapter—either with tape or, as I did, with hot glue.
            </li>
            <li>
              Once the fan is securely attached to the adapter, place the assembly on top of the HEPA filter.
              (If it doesn’t fit properly, smooth the edges with sandpaper. Ensure it sits tightly—use tape or sealing rings if necessary.)
            </li>
          </ul>
          <p>
            Now that we have assembled the fan and filter, we can start with the wiring:
          </p>

        </section>

        {/* Control Step */}
        <section id="control" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Wiring + Fan Control</h2>
          <p>
            Jan implemented PWM control with the ESP32. Example code in <code>fanControl.ino</code>:
          </p>
          <pre className="bg-[#262626] text-white p-4 rounded">
            <code className="language-arduino">{`
// -----------------------------
// PIN CONFIGURATION
// -----------------------------
const int fanPwmPin = 13;   // GPIO13 → PWM output via transistor
const int tachPin    = 12;  // GPIO12 → tachometer input

// -----------------------------
// RPM MEASUREMENT
// -----------------------------
volatile int pulseCount    = 0;
volatile unsigned long lastPulse = 0;

void IRAM_ATTR countPulse() {
  unsigned long now = micros();
  if (now - lastPulse > 1000) {   // 1 ms debounce
    pulseCount++;
    lastPulse = now;
  }
}

// -----------------------------
// Calibration Tables and Constants
// -----------------------------
const int   N = 11;
const float rpmTable[N]  = {   0,   780,  1140,  1440,  1740,  2730,  6720,  9960, 12930, 14520, 12570 };
const int   dutyTable[N] = { 255,   230,   204,   179,   153,   128,   102,    77,    51,    26,     0 };
const float maxRpm = 14520.0;    // reference maximum RPM

// runtime variables
int currentPercent = 0;
unsigned long lastRpmTime = 0;

// -----------------------------
// Interpolation Function for Duty
// -----------------------------
int getInterpolatedDuty(int percent) {
  float desiredRpm = percent / 100.0 * maxRpm;

  if (desiredRpm <= rpmTable[0]) return dutyTable[0];
  if (desiredRpm >= rpmTable[N-1]) return dutyTable[N-1];

  for (int i = 0; i < N - 1; i++) {
    if (desiredRpm <= rpmTable[i+1]) {
      float frac = (desiredRpm - rpmTable[i]) / (rpmTable[i+1] - rpmTable[i]);
      float d    = dutyTable[i] + frac * (dutyTable[i+1] - dutyTable[i]);
      return int(d + 0.5);
    }
  }
  return dutyTable[N-1];
}

void setup() {
  Serial.begin(115200);
  delay(200);

  pinMode(fanPwmPin, OUTPUT);
  analogWrite(fanPwmPin, 255);   // start at full speed (0% input)

  pinMode(tachPin, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(tachPin), countPulse, FALLING);

  Serial.println();
  Serial.println("Enter a value 0–100 in the Serial Monitor and press Enter:");
}

void loop() {
  if (Serial.available()) {
    int p = Serial.parseInt();
    if (p >= 0 && p <= 100) {
      currentPercent = p;
      int duty = getInterpolatedDuty(currentPercent);
      analogWrite(fanPwmPin, duty);
      Serial.printf("→ Fan set to %3d%% (Duty=%d)\n", currentPercent, duty);
    } else {
      Serial.println("Invalid! Please enter 0–100.");
    }
    while (Serial.available()) Serial.read();
  }

  if (millis() - lastRpmTime >= 1000) {
    lastRpmTime = millis();
    noInterrupts();
    int count = pulseCount;
    pulseCount = 0;
    interrupts();

    float rpm = (count / 2.0) * 60.0;  // 2 pulses per rev
    Serial.printf("Current RPM at %3d%%: %.0f\n", currentPercent, rpm);
  }
}
`}</code>
          </pre>
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
            Florian & Rawan developed a cloud-based monitoring dashboard using Grafana Cloud. The system is powered by a MariaDB
            database running locally on a Windows machine and exposed to the cloud using a secure TCP tunnel via ngrok.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Database Structure</h3>
          <p>Sensor data is stored in a MySQL-compatible MariaDB database using the following schema:</p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm mt-2">
            <code className="language-sql">{`
        CREATE DATABASE smartairtest;

        CREATE TABLE sensors (
          id INT AUTO_INCREMENT PRIMARY KEY,
          temperature FLOAT,
          humidity FLOAT,
          co2 INT,
          pressure INT,
          timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        );
            `}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-2">Secure Tunnel Using ngrok</h3>
          <p>
            Since the database runs locally, it is exposed to Grafana Cloud using ngrok. This allows secure, remote access to the
            database without deploying it on a public server.
          </p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm">
            <code className="language-bash">{`
        ngrok config add-authtoken <YOUR_AUTH_TOKEN>
        ngrok tcp 3306
        # Example: Forwarding tcp://0.tcp.eu.ngrok.io:19617 → localhost:3306
            `}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-2">Grafana Cloud Data Source Setup</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Log in to <a href="https://grafana.com" className="text-blue-600 hover:underline">Grafana Cloud</a></li>
            <li>Go to <strong>Connections → Data Sources → Add New → MySQL</strong></li>
            <li>Use the following configuration:</li>
          </ul>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm mt-2">
            <code>{`
        Host:     0.tcp.eu.ngrok.io:19617
        Database: smartairtest
        Username: grafana_user
        Password: adminadmin
        SSL Mode: disable
            `}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-2">Sample Panel Query</h3>
          <p>
            Grafana uses SQL queries to visualize the data. Here's an example for a time series panel showing temperature:
          </p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm mt-2">
            <code className="language-sql">{`
        SELECT
          timestamp AS time,
          temperature
        FROM sensors
        ORDER BY timestamp DESC
        LIMIT 100;
            `}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-2">Dashboard Output</h3>
          <p>
            The dashboard includes time series charts for temperature and humidity, gauges for CO₂ and pressure, and a table for
            recent measurements.
          </p>
          <p className="mt-4">
            🌐 Live Dashboard:{' '}
            <a href="https://smartairproject.grafana.net/d/smart-air-mariadb/smart-air-monitoring-dashboard?orgId=1&from=2025-04-30T14:20:36.000Z&to=2025-04-30T14:22:52.000Z&timezone=browser&refresh=5s" className="text-blue-600 hover:underline" target="_blank">
              smartairproject.grafana.net
            </a>
          </p>
        </section>

        {/* Dataflow Step */}
        <section id="dataflow" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">MQTT & Node-RED Dataflow</h2>
          <p>
            The air quality sensors publish real-time environmental data to the MQTT broker using the topic <code>smartair/sensors</code>.
            A Node-RED flow running locally subscribes to this topic, parses the incoming JSON data, and builds SQL INSERT statements that are executed to store the data in the remote MariaDB database (tunneled via ngrok).
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Node-RED Flow Structure</h3>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm">
            <code>{`
        [MQTT IN] → [JSON Parser] → [Function Node] → [MariaDB Output]
            `}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-2">Function Node Example</h3>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm">
            <code className="language-javascript">{`
        const d = new Date();
        const isoTime = d.toISOString();

        msg.topic = \`
          INSERT INTO sensors (temperature, humidity, co2, pressure, timestamp)
          VALUES (
            \${parseFloat(msg.payload.temperature)},
            \${parseFloat(msg.payload.humidity)},
            \${parseInt(msg.payload.co2)},
            \${parseInt(msg.payload.pressure)},
            '\${isoTime}'
          );
        \`;
        return msg;
            `}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-2">Simulating Sensor Input with mosquitto_pub</h3>
          <p>You can simulate an MQTT message using this command from the terminal:</p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm mt-2">
            <code className="language-bash">{`
        mosquitto_pub -h 192.168.1.1 -p 1883 -t smartair/sensors -m "{\\"temperature\\":24.5,\\"humidity\\":40,\\"co2\\":600,\\"pressure\\":1010}"
            `}</code>
          </pre>

          <p className="mt-4">
            Node-RED receives this data, builds an SQL INSERT statement, and sends it to the MariaDB instance running behind a secure <code>ngrok</code> tunnel. The data is then visualized in real-time using Grafana Cloud.
          </p>
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
