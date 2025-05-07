# 🌬️ Smart Air Web Dashboard

A React + Vite frontend for visualizing your Smart Air data via Grafana and controlling devices via SnodeC over MQTT.


## 🚀 Tech Stack
- 🛠️ **Vite** – super-fast dev server & build  
- ⚛️ **React** – declarative UI  
- 🎨 **Tailwind CSS v4.1** – utility-first styling  
- 🔗 **React Router** – client-side routing  
- 📡 **SNodeC** – https://github.com/SNodeC/snode.c
- 🌐 **Grafana** – embedded time-series panels (via iframe)  
- ☁️ **MQTT (Mosquitto)** – sensor/control bus  
- 🐬 **MariaDB** – time-series & config storage  

## 🔧 Setup

1. **Clone & install**  
   ```bash
   git clone https://github.com/your-org/smart-air-web.git
   cd smart-air-web
   npm install
   ```
2. **Tailwind v4.1**  
   Make sure your `src/index.css` uses the new imports:
   ```css
   @import "tailwindcss/theme.css" layer(theme);
   @import "tailwindcss/preflight.css" layer(base);
   @import "tailwindcss/utilities.css" layer(utilities);
   ```
3. **MQTT Broker**  
   Install Mosquitto and subscribe to the sensor topic:
   ```bash
   sudo apt install mosquitto-clients
   mosquitto_sub -h 192.168.1.1 -p 1883 -t "smartair/sensors"
   ```
4. **Database**  
   Configure your MariaDB connection in `.env.local` (git-ignored).

## 🏃‍♂️ Run in Development

```bash
npm run dev
```

- Frontend:  http://localhost:5173  
- Grafana:   http://localhost:3000  
- SnodeC API: http://localhost:5000  

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├─ components/     # Reusable UI components (e.g. GrafanaPanel.jsx)
├─ pages/          # Route-level pages (Dashboard.jsx, Control.jsx)
├─ services/       # API client modules (mqttApi.js, dbService.js)
└─ index.css       # Tailwind entry (theme, preflight, utilities)
```

- **Env file:** `.env.local` (contains MariaDB URI, MQTT creds, etc.)  

## ⚡ Scripts

```bash
npm run dev     # start dev server + HMR
npm run build   # bundle for production
npm run preview # serve production build locally
```
