# 🔁 ProxyPass

**ProxyPass** is a lightweight Node.js proxy server that reads a target URL from environment variables and transparently forwards **all incoming HTTP requests** — including **query parameters, headers, and body** — to the specified target.

Perfect for use cases like:

* Subdomain-to-subdomain transparent routing
* Testing API redirects
* Debugging request forwarding
* Local-to-remote tunneling

---

## 🚀 Features

* 🌐 Supports all HTTP methods (`GET`, `POST`, `PUT`, `DELETE`, etc.)
* 🧠 Forwards headers, body, query params as-is
* 🔐 Preserves original request structure
* ⚙️ Configurable via `.env`
* 🧪 Lightweight and easy to deploy

---

## 📦 Installation

```bash
git clone https://github.com/rahoolsingh/proxypass.git
cd proxypass
npm install
```

---

## ⚙️ Configuration

Create a `.env` file in the root:

```env
TARGET_URL=https://namaste.hello.com
PORT=3000
```

* `TARGET_URL`: The destination URL to which all traffic is forwarded.
* `PORT`: The local port ProxyPass listens on (default: 3000).

---

## ▶️ Usage

```bash
node server.js
```

Then send a request:

```bash
curl -X POST http://localhost:3000/api/data -d '{"hello":"world"}' -H "Content-Type: application/json"
```

This will be proxied to:

```
https://namaste.hello.com/api/data
```

Preserving headers and body.

---

## 🧪 Example Request

### Input:

```http
POST /submit-form
Host: localhost:3000
Content-Type: application/json

{ "name": "Veer" }
```

### Output (to `TARGET_URL`):

```http
POST /submit-form
Host: namaste.hello.com
Content-Type: application/json

{ "name": "Veer" }
```

---

## 📁 File Structure

```
proxypass/
├── .env
├── server.js
├── package.json
```

---

## 🛡️ Notes

* Ensure `TARGET_URL` is reachable and has a valid SSL certificate if using HTTPS.
* For local testing with fake domains, update your `/etc/hosts`.

---

## ✨ Future Ideas

* Logging middleware
* Authentication support
* Rate limiting
* Optional header filtering
* Support for static fallback pages

---

## 👨‍💻 Author

**Veer Rajpoot**
🔗 [veerrajpoot.com](https://veerrajpoot.com)

---

## 📝 License

MIT – feel free to fork and use.

