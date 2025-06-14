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
              src="./fhlogo.png"
              alt="FH Oberösterreich Logo"
              className="h-10 w-auto"
            />
            <p className="text-lg text-gray-600">
              Pervasive Computing <a
                href="https://fh-ooe.at/campus-hagenberg?gad_source=1&gad_campaignid=22140940681&gbraid=0AAAAADx1u-wDlQGEdp4TzTMVuhqbWJ-1n&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBPT8g12vNk7GINfkCXVhyhDcqi6ZpXcNJsvGlBPc9Iuuz6uc1uMlQYaAk9sEALw_wcB"
                className="
    !text-red-700 
    visited:!text-red-700 
    hover:underline
  "
                target="_blank"
                rel="noopener noreferrer"
              >
                FH Hagenberg

              </a>&nbsp;
              Project
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
            <li><a href="#introduction" className="text-red-700 hover:underline">Introduction</a></li>
            <li><a href="#parts" className="text-red-700  hover:underline">Parts List</a></li>
            <li><a href="#assembly" className="text-red-700 hover:underline">Assembly Fan + HEPA Filter</a></li>
            <li><a href="#control" className="text-red-700 hover:underline">Wiring + Fan Control</a></li>
            <li><a href="#sensors" className="text-red-700 hover:underline">Sensors & LoRaWAN</a></li>
            <li><a href="#display" className="text-red-700 hover:underline">Holographic Display</a></li>
            <li><a href="#raspberry" className="text-red-700 hover:underline">Raspberry Pi Set-Up & MariaDB</a></li>
            <li><a href="#dashboard" className="text-red-700 hover:underline">Data & Grafana Dashboard</a></li>
            <li><a href="#dataflow" className="text-red-700 hover:underline">MQTT & Node-RED Dataflow</a></li>

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
            <li><strong>Lisa Reichl:</strong> Holographic display + WiFi</li>
            <li><strong>Florian Guggenberger:</strong> Raspberry Pi Set-Up + MariaDB Connections</li>
            <li><strong>Rawan Gomaa:</strong> Grafana Dashboard + NodeRED</li>
          </ul>
        </section>

        {/* Parts List */}
        <section id="parts" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Parts List</h2>
          <table className="w-full table-auto border border-gray-400 border-collapse">

            <thead>
              <tr>
                <th className="border px-4 py-2">Component</th>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">ESP32 WROOM32</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <img
                    src="./ImagesJan/esp32.jpg"
                    alt="ESP32 WROOM32"
                    className="object-cover w-40"
                  />
                </td>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/diymore-Nodemcu-Development-Bluetooth-2-ESP32/dp/B0D9BTQRYT/ref=sr_1_3_sspa?dib=eyJ2IjoiMSJ9.0HQysaHgEqFjRs7m20z3kM_xcrtW78mFH_y8RmyvqQzLePX4-fISal3_aMWBirRvXRtX8Nh10a3ajRwbx-1sthttnNRSLyZ6Vr51j-sCN2oARa6N7SgZ7cXWoo_ptd6_FdXtu5h5luil4PcD8Ou1JoGjZ7n_jAXiUarduIBiJ9BAH-B76abPbc2Nednnfxx5wtdpDXGrVFHkQPyxgQkL5t_sGOyrX4F_UIaT6ZMJXVY.JGJFnu33OYTIhLidv9autoIb-5FWDU6OxmajTQxYqhg&dib_tag=se&keywords=wroom%2B32&qid=1746689788&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ARCTIC P12 Max - 120mm PC Fan</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <img
                    src="./ImagesJan/arcticp12max.jpg"
                    alt="Artic P12 Max"
                    className="object-cover w-40"
                  />
                </td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/gp/product/B09VDNKL4G/ref=ox_sc_saved_image_1?smid=AUBM4K0YLFI9J&psc=1" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Amazon Basics Round True HEPA Filter</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <img
                    src="./ImagesJan/amazonbasicsfilter.jpg"
                    alt="Amazon Basics HEPA Filter"
                    className="object-cover w-40"
                  />
                </td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/gp/product/B09W9GTZT2/ref=ox_sc_act_image_5?smid=A3JWKAKR8XB7XF&th=1" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">BC547 Transistor</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <img
                    src="./ImagesJan/transistors.jpg"
                    alt="BC547 Transistor"
                    className="object-cover w-40"
                  />
                </td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/Transistors-Leistungstransistor-Sortiment-Kunststoff-Aufbewahrungsbox/dp/B097XRFK3H/ref=sr_1_1_sspa?crid=2NI0M4W63LWQO&dib=eyJ2IjoiMSJ9.mpW9oGooIYqSyQCReCJ8MawJiFaJtcpkzjOIbGD-AoBrR_h84ZcDOwKHU91pZEaYNQNa74af26mWicP3WsgVw6tEJZdhebef3xn-L3W62RQdvjMzzWKRwThVbQPiZ-O6ueSPi7PBrus0weMJzkbESKpzSYWrh5G_FTefuO3Qt2fRl2y-CQz0WCmlWfvDmg4uL3yeLV3CkGYrtSSB1LRYQzLSN5EMhF0R-hePFE5uhpl0w90WNe6W-MkzxEMESXDRM-dwTnPsZMTZOyGYCVTs6vkKKiQBsqmc6UNhJWHRtqA.dS6ZEPUZtMfG67GjA7TMT194OQdB9HwDzp03TiE8-5A&dib_tag=se&keywords=bc547+transistor&qid=1746690151&sprefix=BC547+Tran%2Caps%2C107&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">10kΩ Resistor</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <img
                    src="./ImagesJan/resistor.jpg"
                    alt="10kΩ Resistor"
                    className="object-cover w-40"
                  />
                </td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/Kaiserberg-10K-Widerst%C3%A4nde-St%C3%BCck-DIY-Elektronikprojekte/dp/B0DYPD6XTN/ref=sr_1_1_sspa?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=G8GDDV4AWVC2&dib=eyJ2IjoiMSJ9.pe0UK4LSgfd7x3gdYEgY1iel3jK2tgVRUG-p2XZx1lDf8Wj8-RFEgFMkAVeKLl2iNvAGRg0qEU4m1wpMX-DPBP3b-BikFfB3mgjIZLp20QqsMHJHjsmG8zEBQXT7EtHvv4KobYPeg70xm571lvPqoBuarICdiDpff2I-Tj4fUBgMwv6q2lk9rU5Y8ML4HdEB20vWsRF2pQ2ghRvtTT0chLvCr8Rs1y--u2oQAlRvohbEkdvZ5odfty9BKtQYEqDOOmC7K2wd5DTOxHzHPwAaimeQPBfdgDzsKd7cQXOHuy0.NJG-rKkF9EGtQBjGHmLBhekKfRYfQwWl0gItTxUL5V4&dib_tag=se&keywords=10+kiloohm+resistor&qid=1746689845&sprefix=10+kiloohm+resistor%2Caps%2C80&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">12V Power Supply</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <img
                    src="./ImagesJan/12vpower.jpg"
                    alt="12V Power Supply"
                    className="object-cover w-40"
                  />
                </td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/JZK-Ladeger%C3%A4t-Ersatz-Netzteil-Lichtleiste-Alarmanlage/dp/B0F18ZV715/ref=sr_1_7?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20DOUB8A5MV8L&dib=eyJ2IjoiMSJ9.nuNjI4IX-8eZWxNx0FXEDeR9OUKFsXTd-PFxZeFe8G0dCVSKnAnhorQKjegLawXCg2qzNvWKClL02et8jjPRfsJVTrdlQjUCK5FKpbhZAL-wF6WrSGd8Bfvds_Jd_QBDhuxi8-FXFC516_hWxDZKpnqlnjCHZt1Rdt52iD9AFxcCL76rQfgzwD5YFWMLzCpKS1OQBrXt-vlSvUbVqT9aTeW5wIetdvnj6N_BA1iYQkbInBZ5YSF0c8BFgCaPYcHgkZAMZYy54450ceJEywX-fKDFhuRW_qVExFwEsGMO0RA.EmTkI7o8YySFcH4MXpbbn18nDOTXR3PeZWgJoz2527E&dib_tag=se&keywords=12V+Netzteil&qid=1746689946&sprefix=12v+netzteil%2Caps%2C111&sr=8-7" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2,8" ILI9341 240 * 320 TFT LC Display</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <img
                    src="./ImagesJan/display.jpg"
                    alt="2,8'' ILI9341 240 * 320 TFT LC Display"
                    className="object-cover w-40"
                  />
                </td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/ILI9341-Display-Seriell-Arduino-Raspberry/dp/B07YTWRZGR/ref=pd_sbs_d_sccl_2_1/258-8095385-4630869?pd_rd_w=patiM&content-id=amzn1.sym.7587be5d-90aa-4d4b-87a9-869040b4f29f&pf_rd_p=7587be5d-90aa-4d4b-87a9-869040b4f29f&pf_rd_r=XGWWTF0FN8JPNZQGWEYF&pd_rd_wg=g6ole&pd_rd_r=c6ba693c-fade-483c-a1be-04712c09eafe&pd_rd_i=B07YTWRZGR&psc=1" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Breadboard set with wires for assembly</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <img
                    src="./ImagesJan/breadboard.jpg"
                    alt="Breadboard set with wires for assembly"
                    className="object-cover w-40"
                  />
                </td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/BOJACK-Breadboard-Steckbrett-Steckplatine-Steckbrett-%C3%9Cberbr%C3%BCckungsdr%C3%A4hte/dp/B0B18G3V5T/ref=sr_1_1_sspa?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=I4T788B78H7P&dib=eyJ2IjoiMSJ9.Q6x6rXniD6T82he2ZYZ9ppfIOxZEI4ZJd8ZesNPQVZmQCXpm9KtntteznVy30fw7jJC9eZ4NkO-qxdVUvQeHn9xqyOkmJvzNcqtoT5WQO5Z_vwJlQD08izKiAob0v5EBEu3Zx73UhbqRvzN2YaTJhFgClByelO6hn1_5S6fOfjz2vBL8QB5pIhS_cqVq-AMRG-AHarjB2gVLMW5nHLGHc3_MgImG4RuwvbREVux2lZum7UTTzB8MDVgXfrw67ua12TKy8TVOGhKFWbW4b592WtiY6_XDtd_jtVwJ2ujuY-E.pmc1TLnNSsdewFK9uwkuR5IexGDXQTZ1nNJ5F4CPI7E&dib_tag=se&keywords=breadboard&qid=1746691778&s=industrial&sprefix=breadboard%2Cindustrial%2C102&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Waveshare SX1262 LoRa Node Module</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <img
                    src="./ImagesJan/loramodule.jpg"
                    alt="Waveshare SX1262 LoRa Node Module"
                    className="object-cover w-40"
                  />
                </td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/Waveshare-Raspberry-Support-LoRaWAN-Protocol/dp/B09GK753VY/ref=sr_1_2?dib=eyJ2IjoiMSJ9.yzQYZplujBG_3gNb8GcAPcu7G-yzxRzD-U0LqHX_wXnp1ty7A1EZaChbUdixMbzfq-OeXW5hMcfCG9qUjXL28IllvixpwDPX6rxdfuAzrPTjmDItteM_kGr9CNQfqnhW_GHqXnsmFZ8ihr1eQBebXYm4h6QdbpSCvZlZV77Fw4KTmNU5drDvShExCtlUAZek8aaC83MpL7KC8fJi93TnUqV6fRr31AphMRtZnH1evaI.PR1Zqui5Lh93mvHlukDQoYk_62GadfnhYU5mXxH872s&dib_tag=se&keywords=sx1262+lora+node&qid=1746692025&sr=8-2" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">PM2.5 Air Particle/Dust Sensor</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <img
                    src="./ImagesJan/particlesensor.jpg"
                    alt="PM2.5 Air Particle/Dust Sensor"
                    className="object-cover w-40"
                  />
                </td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/particle-Digital-Purifier-PMS5003-Precision/dp/B071J5LL8V/ref=sr_1_3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=JHYPPXGWSN0N&dib=eyJ2IjoiMSJ9.FAXILI3-lRQuZkfSCQPJcviTviRFPk9WbfBNUWrDbsvxdvdWq6NzwCulpY0H1viLyvP2WNyS1SNmpbu3wA1wJz9R0fwA5iC-G8EBpsKGdLtlP9jqOqrLn0z0vMGRGKVcgNHoezaVC_j6IauPU0Hz_pmQS179bl_C2tG34C4PbxW8sr1oKeePqTYqbDR46kMeuB6tC7XlqAW-aqKRqJanbEJLWgiS6gVXjwl6ytEMozC42GrBlK0qjIJU-4h86QMyK2EI2EkcS1VA5eMiDdWaoTVmfgLtlBCP4HG1FKCYb1w.KJgOXlUlnRV7jlcZfj7et2W9Bjrfsjg47HPUO-uIeI8&dib_tag=se&keywords=pm2.5+sensor+particle&qid=1746692111&sprefix=pm2.5+sensor+particle%2Caps%2C93&sr=8-3" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Adafruit BME680 Temperature, Humidity, Preassure Sensor</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <img
                    src="./ImagesJan/bme680.jpg"
                    alt="Adafruit BME680 Sensor"
                    className="object-cover w-40"
                  />
                </td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/-/en/Adafruit-BME680-Temperature-Humidity-Pressure/dp/B07LGWS2S1?dib=eyJ2IjoiMSJ9.r9A8PJ3-WJkXxN1cwo2hBBj26NSYwDLx243kVyycXwf8qOHahY0gcUcWfqI7HJZlbIKp5ZWm1_o2eCwIiNb6NQ3_govLZ-ykBqtGLpSNLl9KMlatnkQ5_6kBQ3DwKNEFQZjwg8t1kDROv279wEubZQYgKPT4v5u0ap949nbhircjxLoQzl2IpSj8wrS8nS4nZbZqxL2YlyePV9xJbaMpnUPyAZqSHgOXxWmHTQheSQdkRgevaH8DCSCa5iF-e7_PZDEIz5mb0lIIHv-L3UNH-Cj7KfSCp0r95uyN1ZWdMtA.LESl47ZuG_HXoefio4Y5_FwduMB0mjYGuMK-J-1TkJg&dib_tag=se&keywords=adafruit+bme680&qid=1745439236&sr=8-1" className="text-blue-600 hover:underline">Amazon Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Epoxy Resin + Hardener</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <img
                    src="./ImagesLisa/resin.png"
                    alt="Epoxy Resin & Hardener"
                    className="object-cover w-40"
                  />
                </td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <a href="https://www.amazon.de/Epoxidharz-18-5oz-Glasklar-Beschichtung-Transparentes/dp/B0B24W3P3H/ref=sr_1_5?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=37PWF47JK2B4U&dib=eyJ2IjoiMSJ9.pymRp8BQmvMRailacllJ2WVFZ4JsRO7Xt4BbVGx2LerU_7VbPsJv1UlBNGAhBHGwpkUfX5z7jDt-Sbu0oe0YBphPillTtU0h9OQxuhBRHTk1ofGu0UOziOCKEq9fYftTX1NfYkAIiU_ao52p86FmOd6zAnbqTQiGPf_T-3NNSRi0c3n7NLDgiQZGdX2SUDbo0sUY6dZ5Nj2kcIhd1_6esTPJejT4tbPq-iunYJJaYfcCcIQAKbE8AC8wARm_9-Sd7Xn3QEMFXBMuMfu9GZvCIJXssmb5jajYVZdPPWZbj-k.IfP81WQijALmtxk53Cv_wAwsxenOTvI14CcP2G2n340&dib_tag=se&keywords=epoxidharz%2Bsuper%2Bclear&qid=1745434538&sprefix=epoxidharz%2Bsuper%2Bclear%2Caps%2C104&sr=8-5&th=1" className="text-blue-600 hover:underline">Amazon Link</a>
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
            <br />
            <img
              src="./ImagesJan/filterAdapter3DPrint.png"
              alt="filterAdapter3DPrint"
              className="w-auto"
            />
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
flange_diameter = 169;  // Diameter of the round flange plate

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
          <br />
          <div className="grid grid-cols-4 gap-4">
            <img
              src="./ImagesJan/screwphoto.png"
              alt="Screw Photo"
              className="w-full h-auto object-cover"
            />
            <img
              src="./ImagesJan/sidephoto.png"
              alt="Side Photo"
              className="w-full h-auto object-cover"
            />
            <img
              src="./ImagesJan/topphoto.png"
              alt="Top Photo"
              className="w-full h-auto object-cover"
            />
            <img
              src="./ImagesJan/fullphoto.png"
              alt="Full Photo"
              className="w-full h-auto object-cover"
            />
          </div>
          <br />
          <p>
            Now that we have assembled the fan and filter, we can start with the wiring.
          </p>
        </section>

        {/* Control Step */}
        <section id="control" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Wiring + Fan Control</h2>
          <p>Wiring of the Fan</p>
          <br />
          <p>
            The 12 V supply from your PSU powers the fan’s red lead, while the black lead and the ESP32 GND are tied together on the breadboard ground rail.
          </p>
          <ul class="list-disc list-inside mt-4">
            <li>
              The BC547 transistor is wired as a low‐side switch: its <strong>emitter</strong> goes to ground, its <strong>collector</strong> to the fan’s PWM control wire, and its <strong>base</strong> is driven by ESP32 GPIO 13 through a 10 kΩ resistor.
            </li>
            <li>
              The fan’s tachometer lead connects to ESP32 GPIO 12 (configured with an internal pull-up) so the microcontroller can count falling edges for RPM measurement.
            </li>
          </ul>
          <br />
          <div className="flex flex-wrap  gap-4 mb-4">
            <img
              src="./ImagesJan/wiring_fan_control.JPEG"
              alt="Wiring of the Fan"
              className="max-w-xs w-full h-auto"
            />
            <img
              src="./ImagesJan/pwm_pins.jpg"
              alt="PWM Pins"
              className="w-150 h-auto"
            />
          </div>

          <br />
          <p>
            <code>fanControl.ino</code> for ESP32:
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
          <br />
          When you drive a fan with a simple map(0,100 → 255,0), you assume: <br />
          - 50 % input → 50 % of maximum RPM <br /><br />
          But in practice the motor’s characteristics (coil inductance, back-EMF, friction, bearing drag, nonlinear torque curve) mean that:<br />
          - Low PWM duty barely overcomes static friction, so the fan may stall or creep at 10 – 20 % input. <br />
          Around mid-range, the fan “takes off” and RPM jumps more rapidly.
          Near maximum, efficiency can drop and friction rises, so you see diminishing RPM gains.
          <br /><br />
          To overcome this problem, we implement a calibration‐based interpolation that maps each input percentage to the exact PWM duty needed to achieve the corresponding real RPM.
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
            The holographic display prototype consists of a 2.8" 240x230 LCD display, a holographic prism made of resin, a 3d printed case and a ESP32 for the logic. 
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">3D printed Case</h3>
          <p>The 3D-printed case encloses the wiring and ESP32, while providing support to stabilize the display so that the prism stands evenly on a flat surface. 
            Measurements of the display and ESP32 were taken to determine the required dimensions. 
            The case was then designed using 3D modeling software and printed with an Anycube 3D printer.
          </p>
          <br />
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <img
              src="./ImagesLisa/case_front.png"
              alt="Case from top right view."
              className="w-150 h-auto"
            />
            <img
              src="./ImagesLisa/case_bottom.png"
              alt="Case from bottom view."
              className="w-150 h-auto"
            />
          </div>
          <p>
            Due to the plastic breaking when using pre printed holes (we did not have other resin), we used an approach with four self threaded holes to fit the matching screws. 
            The display was then fastened from below with four small screws.
          </p>
          <br />
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <img
              src="./ImagesLisa/inside_display.png"
              alt="inside of 3d printed case from inside with screws"
              className="w-150 h-auto"
            />
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-2">Holographic prism</h3>
          <p>
            A resin-based holographic display functions by using a transparent, pyramidal prism to reflect images from a screen, creating the illusion of a floating three-dimensional object. 
            Each face of the prism reflects a different angle of a pre-rendered animation, which the viewer perceives as a cohesive volumetric image due to angular light reflection 
            and human depth perception. The most common way is to fold thick plastic films or similar. However, casting the prism from clear resin improves optical clarity and durability 
            compared to plastic, allowing for more precise geometries and higher image fidelity. 
            This is the reason why why chose to use resin for out project. To achieve our result, a mold was 3d printed. 
            Since non-stick spray did not have any effect, we applied a thin layer of plastic to the sides of the mold. 
            Then, resin and hardener were mixed in a 1:1 ratio to a total of 30 ml, poured into the mold, and left to dry for 24 hours. 
            It is important to keep it at warmer temperatures around 20-25°C degrees, because lower temperatures can hinder the drying process, as well as it affects the clarity of the liquid.
            After 24 hours seperated the prism from the mold by breaking off the plastic mold. Since we used a thin layer of plastic underneath, it was very easy to separate. 
          </p>
          <br />
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <img
              src="./ImagesLisa/prism_1.png"
              alt="Resin prism"
              className="w-150 h-auto"
            />
            <img
              src="./ImagesLisa/prism_2.png"
              alt="Resin prism"
              className="w-150 h-auto"
            />
          </div>  
          <h3 className="text-xl font-semibold mt-6 mb-2">Wiring</h3>   
          <p>
            In the beginning, breadboards were used to test the wiring. After some successful test runs the breadboards were removed and instead, we connected the ESP32 and the display directly. 
            The following YouTube tutorial was used to gather information about the technical components and the wiring:  
            <a href="https://www.youtube.com/watch?v=NvBblQnWhsQ&ab_channel=YellowPurple"> ESP32 Tutorial: Using 2.8 Inch SPI TFT LCD Touch Display (ST7789 & ILI9341)</a>.
            To connect the 3V3 output from the ESP32 to two separate pins on another component, I combined two wires manually. 
            I stripped a section of insulation from the first wire, then stripped the end of the second wire and twisted it around the exposed section of the first. 
            After twisting, I soldered the connection to ensure stability and conductivity, then insulated the joint with electrical tape. 
            This allowed both wires to reliably draw 3.3V from the same output pin.
            To get everything working, the following pins were connected.
             </p> 
            <div className="flex flex-wrap justify-center gap-4 mb-4">
            <img
              src="./ImagesLisa/schematic_view.png"
              alt="Schemativ view and display regions."
              className="w-150 h-auto"
            />
          </div>
          <div class="overflow-x-auto p-4">
            <table class="min-w-full table-auto border border-gray-300 shadow-lg rounded-lg">
              <thead class="bg-gray-200">
                <tr>
                  <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">TFT Pin</th>
                  <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">ESP32 Pin</th>
                  <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-4 py-2">TFT_VCC</td>
                  <td class="px-4 py-2">VIN / 3V3</td>
                  <td class="px-4 py-2">Power</td>
                </tr>
                <tr>
                  <td class="px-4 py-2">TFT_GND</td>
                  <td class="px-4 py-2">GND</td>
                  <td class="px-4 py-2">Ground</td>
                </tr>
                <tr>
                  <td class="px-4 py-2">TFT_CS</td>
                  <td class="px-4 py-2">D15 / GPIO 15</td>
                  <td class="px-4 py-2">Chip Select</td>
                </tr>
                <tr>
                  <td class="px-4 py-2">TFT_RST</td>
                  <td class="px-4 py-2">D4 / GPIO 4</td>
                  <td class="px-4 py-2">Reset Pin</td>
                </tr>
                <tr>
                  <td class="px-4 py-2">TFT_DC</td>
                  <td class="px-4 py-2">D2 / GPIO 2</td>
                  <td class="px-4 py-2">Data/Command</td>
                </tr>
                <tr>
                  <td class="px-4 py-2">TFT_MOSI</td>
                  <td class="px-4 py-2">D23 / GPIO 23</td>
                  <td class="px-4 py-2">MOSI</td>
                </tr>
                <tr>
                  <td class="px-4 py-2">TFT_SCK</td>
                  <td class="px-4 py-2">D18 / GPIO 18</td>
                  <td class="px-4 py-2">Clock</td>
                </tr>
                <tr>
                  <td class="px-4 py-2">TFT_LED</td>
                  <td class="px-4 py-2">3V3</td>
                  <td class="px-4 py-2">LED Backlight</td>
                </tr>
                <tr>
                  <td class="px-4 py-2">TFT_MISO</td>
                  <td class="px-4 py-2">D19 / GPIO 19</td>
                  <td class="px-4 py-2">MISO</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-2">Image Libraries</h3> 
          <p>
            The <a href="https://github.com/Bodmer/TFT_eSPI">TFT_eSPI</a> library by Bodmer is a graphics library designed for ESP32 and ESP8266 boards to interface with TFT displays via SPI. 
            It supports multiple display drivers and provides functions for drawing primitives, text, and images. 
            In this project, it is used to initialize and control a TFT screen, define colors, and draw graphical content. 
            The library handles low-level SPI communication and offers optimized routines for efficient rendering, which is necessary for updating the display with minimal delay.
            In order to select the correct settings for our specific display (ILI9341), we had to adjust the library settings. In the User_Setup_Select file, the line "#include &lt;User_Setup.h&gt;" had to be commented out. 
            Then Setup 42 ("#include &lt;User_Setups/Setup42_ILI9341_ESP32.h&gt;") had to be uncommented. Next, in the Setup42_ILI9341_ESP32 file we had to make sure that the line "#define ILI9341_DRIVER" was not commented out.
            <br /><br />
            The <a href="https://github.com/bitbank2/AnimatedGIF">AnimatedGIF</a> library by Larry Bank allows playback of GIF files on microcontrollers by decoding the image frames and rendering them sequentially. 
            It supports in-memory GIF data as well as file-based input, and manages frame timing, disposal, and transparency. 
            In this project, the library is used to decode and display animated plant face images on the TFT screen. 
            It works in conjunction with TFT_eSPI to draw each frame directly to the screen, allowing animated feedback based on sensor data or MQTT input.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">WIFI connection</h3> 
          <p>
            Wi-Fi is used as the communication channel through which the ESP32 receives environmental sensor data, facilitating remote interaction. 
            The Wi-Fi setup and MQTT functionality are clearly laid out in the code in the next section, illustrating the mechanism by which data is obtained.
            The ESP32 connects to a local wireless network using the specified SSID ("PCO-01") and password. 
            Upon successful connection (WiFi.begin(ssid, password)), the device attempts to establish communication with an MQTT broker ("192.168.1.1"), authenticating via username and password. 
            MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol ideal for IoT applications due to its low bandwidth requirement.
            Once connected, the ESP32 subscribes to a topic ("smartair/processed"), which allows it to listen to all incoming messages sent to this topic. 
            When a new message arrives, the callback function is triggered. This function receives the message payload, interprets it as a JSON object, and extracts the value for the airquality.
            This score is then passed to the SetImage function, where based on the score, the device then selects and displays an appropriate GIF image to visually represent the environmental state.
            In summary, the Wi-Fi component serves as the crucial data acquisition layer, enabling the ESP32 to receive real-time environmental data over the network via MQTT, which it then interprets and displays.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">GIF visualization</h3> 
          <p>
            To display the GIFs, the system uses pre-converted image data stored in .h header files. 
            Each GIF is first processed externally — using a conversion tool—to transform the binary animation into a C-compatible array format. 
            This format allows the image data to be embedded directly into the program’s memory at compile time.
            The system displays GIFs by rendering preloaded image data directly onto a TFT screen. 
            The graphics library manages the decoding and playback of the animated images, ensuring smooth frame transitions. 
            When a specific condition is met — based on the analysis of incoming data — a corresponding GIF is selected from memory. 
            This selection determines the visual representation of the current environmental state.
            The chosen GIF is then streamed frame-by-frame onto the display, with drawing operations handled efficiently to maintain performance. 
            Playback is synchronized within the main loop, allowing the animation to run continuously while the system remains responsive. 
            This visual feedback mechanism provides an immediate and intuitive way to convey the device's assessment of its surroundings.
            <br/> <br/>
          </p>
          <div className="grid grid-cols-4 gap-4">
            <img
              src="./ImagesLisa/happy_plants_holo_faces.gif"
              alt="Good air quality gif"
              className="w-full h-auto object-cover"
            />
            <img
              src="./ImagesLisa/solala.gif"
              alt="Okay air quality gif"
              className="w-full h-auto object-cover"
            />
            <img
              src="./ImagesLisa/sad.gif"
              alt="Bad air quality gif"
              className="w-full h-auto object-cover"
            />
            <img
              src="./ImagesLisa/dead_row_4.gif"
              alt="Horrible air quality gif"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-2">C++ Code for the ESP32 handling the display</h3> 
          <pre className="bg-[#262626] text-white p-4 rounded">
            <code className="language-javascript">{`
#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <TFT_eSPI.h>
#include <AnimatedGIF.h>
AnimatedGIF gif;

// gif .h files
#include "happy_plants_holo_faces.h"
#include "meh_row_2.h"
#include "sad_row_3.h"
#include "dead_row_4.h"

// PINS
#define SCLK_PIN GPIO_NUM_18
#define MOSI_PIN GPIO_NUM_0
#define RST_PIN GPIO_NUM_4

// color definitions to test
#define BLACK 0x0000
#define BLUE 0x001F
#define RED 0xF800
#define GREEN 0x07E0
#define CYAN 0x07FF
#define MAGENTA 0xF81F
#define YELLOW 0xFFE0
#define WHITE 0xFFFF

// image
TFT_eSPI tft = TFT_eSPI();
#define imagewidth 320
#define imageHeight 240
#define GIF_IMAGE dead_row_4
#define NORMAL_SPEED
const uint8_t* selectedGIF = nullptr;
size_t selectedGIFSize = 0;

// WiFi
const char *ssid = "PCO-01"; //  Wi-Fi name
const char *password = "password";  // Wi-Fi password

// MQTT Broker
const char *mqtt_broker = "192.168.1.1";
const char *topic = "smartair/processed";
const char *mqtt_username = "root";
const char *mqtt_password = "password";
const int mqtt_port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
    // Set serial baud rates for both Serial communication and debugging
    Serial.begin(115200);
    Serial.println("TFT Screen Initialising");

    // Initialize TFT screen
    tft.begin();
    tft.fillScreen(BLACK);

    // Initialize GIF rendering
    gif.begin(BIG_ENDIAN_PIXELS);
    setImage(1);
    Serial.println("Image has been rendered onto screen");
    
    // Connecting to Wi-Fi
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.println("Connecting to WiFi..");
    }
    Serial.println("Connected to the Wi-Fi network");

    // Connecting to MQTT broker
    client.setServer(mqtt_broker, mqtt_port);
    client.setCallback(callback);
    while (!client.connected()) {
        String client_id = "esp32-client-";
        client_id += String(WiFi.macAddress());
        Serial.printf("The client %s connects to the public MQTT broker", client_id.c_str());
        if (client.connect(client_id.c_str(), mqtt_username, mqtt_password)) {
            Serial.println("Public EMQX MQTT broker connected");
        } else {
            Serial.print("failed with state ");
            Serial.print(client.state());
            delay(2000);
        }
    }

    // Publish and subscribe to MQTT topic
    //client.publish(topic, "Hi, I'm ESP32 ^^");
    client.subscribe(topic);
    if (client.subscribe("topic")) {
      Serial.println("Subscribed to topic successfully");
    } else {
      Serial.println("Subscription to # failed");
    }
    
    setImage(3);  // default image
}


// callback when data arrives
void callback(char *topic, byte *payload, unsigned int length) {

    Serial.print("Received message on topic: ");
    Serial.println(topic);
    // Convert payload to string
    String payloadStr;
    for (unsigned int i = 0; i < length; i++) {
        payloadStr += (char)payload[i];
    }
    Serial.print("Payload: ");
    Serial.println(payloadStr);
    Serial.println("-----------------------");

    // Parse JSON
    StaticJsonDocument<200> doc;
    DeserializationError error = deserializeJson(doc, payloadStr);

    if (error) {
        Serial.print("deserializeJson() failed: ");
        Serial.println(error.c_str());
        return;
    }

    assessAirQuality(doc["s"]);  // extract score
}


// map score to image
void assessAirQuality(float score) {
  if(score <= 0.25f) {
    setImage(1);
  } else if(score <= 0.5f) {
    setImage(2);
  } else if(score <= 0.75f) {
    setImage(3);
  } else  {
    setImage(4);
  }
}

// set image to display
void setImage(int imageNumber) {
  switch (imageNumber) {
    case 4:
      selectedGIF = happy_plants_holo_faces;
      selectedGIFSize = sizeof(happy_plants_holo_faces);
      break;
    case 3:
      selectedGIF = meh_row_2;
      selectedGIFSize = sizeof(meh_row_2);
      break;
    case 2:
      selectedGIF = sad_row_3;
      selectedGIFSize = sizeof(sad_row_3);
      break;
    case 1:
      selectedGIF = dead_row_4;
      selectedGIFSize = sizeof(dead_row_4);
      break;
    default:
      selectedGIF = meh_row_2;
      selectedGIFSize = sizeof(meh_row_2);
      break;
  }
} 

void loop() {
    // Handle MQTT client communication
    client.loop();
    // Handle GIF display if a GIF is selected
    if (selectedGIF != nullptr && gif.open((uint8_t *)selectedGIF, selectedGIFSize, GIFDraw)) {
        // Start TFT screen drawing
        tft.startWrite();
        // Play the GIF frames
        while (gif.playFrame(true, NULL)) {
          client.loop();  // again
          yield(); // Allow the processor to handle other tasks
        }
        gif.close();
        tft.endWrite();
    }
    
}
            `}</code>
          </pre>
          <h3 className="text-xl font-semibold mt-6 mb-2">Final Look</h3>
          <div className="grid grid-cols-3 gap-4">
            <img
              src="./ImagesLisa/final_01.png"
              alt="Final display from the front and slightly above"
              className="w-full h-auto object-cover"
            />
            <img
              src="./ImagesLisa/final_02.png"
              alt="Final display from the front "
              className="w-full h-auto object-cover"
            />
            <img
              src="./ImagesLisa/final_3.png"
              alt="Final display from above"
              className="w-full h-auto object-cover"
            />
          </div>
          <br />
          <video class="w-full max-w-3xl mx-auto" autoPlay muted loop>
            <source
              src="./ImagesLisa/display_loop.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        
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

          <br></br>

          <section id="raspberry" className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Raspberry Pi Set-Up & MariaDB</h3>

          <h4 className="text-lg font-semibold mb-2">Introduction</h4>
          <p className="mb-4">
          For the Smart Air environmental monitoring system, we configured a **Raspberry Pi 4** as the core data processing unit. The process involved overcoming SD card corruption issues, intermittent USB keyboard detection, and headless-access challenges. The final setup includes an operating system, secure SSH access, a **MariaDB** database for sensor data, and Prometheus-compatible metrics for visualization in Grafana.
          </p>

          <h4 className="text-lg font-semibold mb-2">Hardware Preparation</h4>
          <p className="mb-4">
            A Raspberry Pi 4 starter kit was used, which included the board, a protective case, and necessary power and data cables. 
            The Raspberry Pi was mounted in the case, and peripherals such as power supply and networking cables were connected.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="./ImagesFlo/raspberrysetup.jpg"
              alt="Setup of the Raspberry Pi"
              className="w-full h-auto object-cover"
            />
            <img
              src="./ImagesFlo/Raspberrybootup.jpg"
              alt="Raspberry Pi booting up"
              className="w-full h-auto object-cover"
            />
          </div>
          <br></br>
          <h4 className="text-lg font-semibold mb-2">Operating System Installation</h4>
          <p className="mb-4">
            The <strong>Raspberry Pi Imager</strong> tool was used to flash <strong>Raspberry Pi OS (64-bit)</strong> onto a microSD card 
            using a USB/SD card adapter. The Imager is available from the 
            <a href="https://www.raspberrypi.com/software/" className="text-blue-600 hover:underline"> official Raspberry Pi website</a>. 
            Predefining system settings such as user credentials, Wi-Fi, and SSH access is possible but was omitted due to SD card issues. 
            A fresh SD card and basic OS installation resolved these issues for us, so we woudn't be sztuck on the OS BootUp Screen.
          </p>
          <div>
            <img
              src="./ImagesFlo/Imager.png"
              alt="Raspberry Pi boot"
              className="width: 75% h-auto object-cover"
            />
          </div>
          <br></br>
          <h4 className="text-lg font-semibold mb-2">First Boot & Initial Setup</h4>
          <p className="mb-4">
            On first boot, the setup wizard was used to configure language, region, Wi-Fi, and user credentials. With those commands, system updates were installed:
          </p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm overflow-x-auto">
            <code>
        {`sudo apt update
sudo apt upgrade -y`}
            </code>
          </pre>
          <p className="mb-4">
            <br></br>
            SSH access was enabled using <code>raspi-config</code>, allowing remote administration from any PC:
          </p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm overflow-x-auto">
            <code>ssh smartair@192.168.1.203</code>
          </pre>
          <img src="ImagesFlo/ShellRaspberryPI.png" alt="SSH terminal session" className="rounded shadow my-4" />

          <h4 className="text-lg font-semibold mb-2">MariaDB Installation and Configuration</h4>
          <p className="mb-4">
            For the next step, a MariaDB server and client packages were installed onto the raspberry pi.:
          </p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm overflow-x-auto">
            <code>sudo apt install -y mariadb-server mariadb-client</code>
          </pre>
          <p className="mb-4">Database hardening was performed using:</p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm overflow-x-auto">
            <code>sudo mysql_secure_installation</code>
          </pre>
          <p className="mb-4">
            A database <code>sensordata</code> and a user <code>sensoruser</code> were created:
          </p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm overflow-x-auto">
            <code>
        {`CREATE DATABASE sensordata;
CREATE USER 'sensoruser'@'%' IDENTIFIED BY 'sensorpass';
GRANT ALL PRIVILEGES ON sensordata.* TO 'sensoruser'@'%';`}
            </code>
          </pre>
          
          <h4 className="text-lg font-semibold mb-2">Table Creation & Test Data</h4>
          <p className="mb-4">We then proceeded with creating a table for the sensor data:</p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm overflow-x-auto">
            <code>
        {`CREATE TABLE sensors (
          timestamp DATETIME NOT NULL,
          temperature FLOAT,
          humidity FLOAT,
          gas resistance INT,
          pressure FLOAT
        );`}
            </code>
          </pre>
          <p className="mb-4">For testing purposes we injected some test samples into the database just to get a visual feedback for grafana:</p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm overflow-x-auto">
            <code>
        {`INSERT INTO sensors (timestamp, temperature, humidity, co2, pressure) VALUES
(NOW(), 22.5, 45.3, 410, 1012.5),
(NOW(), 22.7, 44.8, 420, 1012.3);`}
            </code>
          </pre>
          

          
          
          <p className="mb-4">What was still missing was a way the overall air quality and rounds per minutes, so we also additionally added an air_quality_score and fans_rpm to our sensordata database</p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm overflow-x-auto">
            <code>
          {`ALTER TABLE sensors ADD COLUMN air_quality_score FLOAT;`}<br></br>
          {`ALTER TABLE sensors ADD COLUMN fan_rpm INT;`}
            </code>
          </pre>
          

          <p className="mb-4">Finally our MariaDB looks like this in the picture below and was ready to receive data from our sensors to display it onto the Grafana dashboard:</p>
          <img src="ImagesFlo/MariaDBfinal.png" alt="Example sensor data in MariaDB" className="rounded shadow my-4" />
          <img
            src="ImagesFlo/DBBeaverMariaDb.png"
            alt="MariaDB setup"
            className="rounded shadow my-4 w-300 mx-auto"
          />
          <h4 className="text-lg font-semibold mb-2">MySQL Exporter for Metrics</h4>
          <p className="mb-4">That the data is then transfered to the Grafan CLoud we needed a MySQL Exporter to expose database metrics:</p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm overflow-x-auto">
            <code>sudo apt install prometheus-mysqld-exporter -y</code>
          </pre>
          <p className="mb-4">The exporter was  then configured to use the MariaDB root credentials:</p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm overflow-x-auto">
            <code>DATA_SOURCE_NAME="root:rootpass@(localhost:3306)/"</code>
          </pre>
          <p className="mb-4">Finally, the Exporter service was restarted and metrics verified:</p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm overflow-x-auto">
            <code>
        {`sudo systemctl restart prometheus-mysqld-exporter
curl http://localhost:9104/metrics | grep mysql_up`}
            </code>
          </pre>
          <p className="mb-4">Expected output:</p>
          <pre className="bg-[#262626] text-white p-4 rounded text-sm overflow-x-auto">
            <code>mysql_up 1</code>
          </pre>
          <img src="images/mysql-exporter-metrics.png" alt="MySQL Exporter metrics output" className="rounded shadow my-4" />

          <h4 className="text-lg font-semibold mb-2">Integration with Grafana</h4>
          <p className="mb-4">
            The system was prepared to forward database metrics to <strong>Grafana Cloud</strong> using a <strong>Grafana Agent</strong> or a local 
            Grafana OSS instance. Once connected, <strong>Grafana dashboards</strong> provided visualization of both the database metrics and the 
            real-time sensor data.
          </p>
          <img src="images/grafana-dashboard.png" alt="Grafana dashboard showing sensor data" className="rounded shadow my-4" />
        </section>


         <h2 className="text-3xl font-semibold mb-4">PDC-Agent</h2> 

          
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
          &copy; 2025{' '}
          <a
            href="https://fh-ooe.at/campus-hagenberg?gad_source=1&gad_campaignid=22140940681&gbraid=0AAAAADx1u-wDlQGEdp4TzTMVuhqbWJ-1n&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBPT8g12vNk7GINfkCXVhyhDcqi6ZpXcNJsvGlBPc9Iuuz6uc1uMlQYaAk9sEALw_wcB"
            className="hover:underline text-red-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            FH Hagenberg
          </a>
          . Jan Eberwein, Rawan Gomaa, Florian Guggenberger, Lisa Reichl, Leonhard
          Schnaitl
        </div>

      </footer>
    </>
  );
}
