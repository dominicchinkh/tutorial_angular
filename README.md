# Angular tutorial

This project was built as a hands-on exploration of Angular fundamentals, generated using Angular CLI version 21.2.7.

📚 Learning Resources

This project is a compilation of concepts and exercises from the following resources:

[Angular 101 Crash Course For Beginners: Learn Angular Fundamentals](https://www.youtube.com/watch?v=uWpgtcSxJ3E&t=3066s)

[Official Angular.dev Tutorials](https://angular.dev/tutorials)

🛠 Project Philosophy

To better understand the underlying architecture, I chose a "manual-first" approach:

**Manual Creation**: Instead of using ng generate, I manually created components, pipes, and services to master the boilerplate and configuration.

**Purely Educational**: This repository is a sandbox for learning. As the focus was on syntax and state management rather than production features, no unit tests are included.

## Development server

🚀 Getting Started

To grab the dependencies, run:

```bash
npm install
```

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Mock REST API (json-server)

This project uses [json-server](https://github.com/typicode/json-server) to simulate a REST API during development.

**Install json-server:**

```bash
npm install json-server
```

**Set up `db.json`** in the project root with your mock data, for example:

```json
{
  "cars": [
    { "id": 0, "name": "Sunflower GT", "isElectricVehicle": false },
    { "id": 1, "name": "Flexus Sport", "isElectricVehicle": true },
    { "id": 2, "name": "Sprout Mach One", "isElectricVehicle": false }
  ]
}
```

**Run json-server** (watches for changes to `db.json`):

```bash
npx json-server --watch db.json
```

The API will be available at `http://localhost:3000/`. For example, `http://localhost:3000/cars` returns the full car list.

## Building

To build the project, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
