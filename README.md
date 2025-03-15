# LaTeX CV Builder

Ein vollständiges System mit React-Frontend und Node.js-Backend für die Erstellung professioneller LaTeX-Lebensläufe.

## Funktionalitäten

- Benutzerfreundliche Oberfläche zur Erstellung von LaTeX-Lebensläufen
- Vorschau der erstellten Dokumente
- Gestaltet für die LaTeX-Generierung ohne Datenspeicherung
- RESTful API für CV-Generierung
- Einfache Erweiterbarkeit für neue LaTeX-Vorlagen

## Entwicklung

### Voraussetzungen

- Node.js (v18 oder höher)
- npm oder yarn

### Installation

```bash
# Repository klonen und ins Verzeichnis wechseln
git clone <repository-url>
cd latex-cv-builder

# Abhängigkeiten installieren
npm install
```

### Frontend-Entwicklungsserver starten

```bash
# Startet den Frontend-Entwicklungsserver
npx vite --port 3173
```

Das Frontend ist dann unter http://localhost:3173 erreichbar.

### Backend-Entwicklungsserver starten

```bash
# Startet den Backend-Entwicklungsserver
npm run dev
```

Der Backend-Server startet auf Port 3001 (oder dem in der Umgebungsvariable PORT angegebenen Port).

### Beide Server gleichzeitig starten (Produktion)

```bash
# Frontend bauen
npm run build

# Backend starten, das auch das Frontend ausliefert
npm run start
```

In diesem Fall ist die Anwendung über http://localhost:3001 erreichbar.

### Tests ausführen

```bash
npm test
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
latex-cv-builder/
├── public/              # Statische Dateien
├── src/
│   ├── assets/          # Frontend-Assets
│   ├── components/      # React-Komponenten
│   ├── contexts/        # React-Kontexte
│   ├── controllers/     # Backend-Controller
│   ├── hooks/           # React-Hooks
│   ├── middleware/      # Express-Middleware
│   ├── pages/           # React-Seiten
│   ├── routes/          # API-Routen
│   ├── services/        # Business-Logik
│   ├── templates/       # LaTeX-Vorlagen
│   ├── tests/           # Testdateien
│   ├── types/           # TypeScript-Typdefinitionen
│   ├── utils/           # Hilfsfunktionen
│   ├── App.tsx          # Haupt-React-Komponente
│   ├── app.ts           # Express-App-Konfiguration
│   ├── main.tsx         # Frontend-Einstiegspunkt
│   └── server.ts        # Server-Einstiegspunkt
├── tests/               # Backend-Tests
└── ...
```

## Fehlerbehebung

Wenn das Frontend nicht korrekt angezeigt wird:

1. Stellen Sie sicher, dass das Frontend gebaut wurde (`npm run build`)
2. Überprüfen Sie, ob der Backend-Server läuft und auf die Frontend-Dateien zugreifen kann
3. Bei Entwicklungsproblemen starten Sie das Frontend direkt mit `npx vite --port 3173`

Bei Backend-Fehlern überprüfen Sie die Konsolenausgabe des Servers und stellen Sie sicher, dass alle Module korrekt installiert sind.
