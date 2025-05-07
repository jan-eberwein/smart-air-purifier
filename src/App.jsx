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
            <li><a href="#assembly" className="text-blue-600 hover:underline">Assembly & Wiring</a></li>
            <li><a href="#sensors" className="text-blue-600 hover:underline">Sensors & LoRaWAN</a></li>
            <li><a href="#display" className="text-blue-600 hover:underline">Holographic Display</a></li>
            <li><a href="#dashboard" className="text-blue-600 hover:underline">Data & Grafana Dashboard</a></li>
            <li><a href="#dataflow" className="text-blue-600 hover:underline">MQTT & Node-RED Dataflow</a></li>
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
                

        {/* Control Step */}
        <section id="control" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Fan Control</h2>
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
