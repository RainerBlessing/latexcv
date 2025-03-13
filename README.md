# LaTeX CV Backend

Ein einfaches Node.js-Backend mit Express und TypeScript für die LaTeX-Generierung von Lebensläufen.

## Funktionalitäten

- Gestaltet für die LaTeX-Generierung ohne Datenspeicherung
- RESTful API für CV-Generierung
- Einfache Erweiterbarkeit für neue LaTeX-Vorlagen

## Entwicklung

### Voraussetzungen

- Node.js (v14 oder höher)
- npm oder yarn

### Installation

```bash
# Repository klonen und ins Verzeichnis wechseln
git clone <repository-url>
cd latex-cv-backend

# Abhängigkeiten installieren
npm install
```

### Entwicklungsserver starten

```bash
npm run dev
```

Der Server startet auf Port 3001 (oder dem in der Umgebungsvariable PORT angegebenen Port).

### Tests ausführen

```bash
npm test
```

### Bauen für Produktion

```bash
npm run build
```

## API-Dokumentation

### Health Check

- URL: `/api/health`
- Methode: `GET`
- Beschreibung: Prüft den Serverstatus
- Antwort: `200 OK`
  ```json
  {
    "status": "success",
    "message": "Server is healthy",
    "timestamp": "2023-12-01T12:00:00.000Z",
    "uptime": 123.45
  }
  ```

## Projektstruktur

```
latex-cv-backend/
├── src/
│   ├── controllers/     # Request handlers
│   ├── services/        # Business logic
│   ├── utils/           # Hilfsfunktionen
│   ├── middleware/      # Express middleware
│   ├── routes/          # API routes
│   ├── templates/       # LaTeX-Vorlagen
│   ├── app.ts           # Express app configuration
│   └── server.ts        # Server entry point
├── tests/               # Testfiles
└── ...
```
