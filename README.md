# NestJS + n8n Integration (MVP Proof)

Minimal NestJS service integrated with **n8n** via **ngrok**.  
This project demonstrates a working event-driven flow where **n8n orchestrates requests** and sends data to a locally running NestJS API exposed to the internet.

> ⚠️ This is an MVP / proof-of-concept created to demonstrate real integration, not a production-ready system.

---

## What is implemented

- NestJS HTTP API (local)
- Public exposure via **ngrok**
- **n8n** workflow sending HTTP requests to NestJS
- Real-time data transfer (request → log → response)
- Working end-to-end communication

---

## 🧠 n8n workflow screenshots
### n8n.io workflow
<img width="1666" height="730" alt="Screenshot 2025-12-29 142427" src="https://github.com/user-attachments/assets/aee9cb3b-cf11-45d3-8402-1ab6584af31b" />

### 💬Telegram trigger message
<img width="527" height="164" alt="Screenshot 2025-12-29 142404" src="https://github.com/user-attachments/assets/bfd35381-1267-49df-bf64-05e19a3564b8" />

### Ngrok
<img width="1919" height="494" alt="Screenshot 2025-12-29 144616" src="https://github.com/user-attachments/assets/85265c6d-dc0c-49bc-a8ce-fdc2ab856ac0" />

### Example of received data to NestJS service
<img width="1172" height="523" alt="Screenshot 2025-12-29 142356" src="https://github.com/user-attachments/assets/d3ef23a4-9130-4b9e-baae-b78ff609ba6d" />

---

## 🛠 Tech Stack

- **NestJS**
- **n8n**
- **ngrok**
- Node.js

---

## ▶️ How to run locally

### 1. Start NestJS
```bash
npm install
npm run start:dev
```

### 2.Start Ngrok 
```bash
ngrok http <nestjs port>
```



