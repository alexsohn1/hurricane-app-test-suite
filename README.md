# hurricane-app-test-suite
Test automation project for testing hurricane application.  Includes Component, end-to-end, and api automation coverage.  

#### Install dependencies
```
npm install
```

#### Run Tests
```
npx cypress run
```

#### Open Test Runner
```
npx cypress open
```

## Project Structure
```
.
├── README.md
├── cypress
│   ├── downloads
│   ├── e2e                         # Store spec files for ui/tests
│   ├── fixtures                    # Store test data
│   ├── pages                       # Store page object files
│   ├── reports                     # Store test results
│   ├── screenshots
│   └── support                     # Store reusable commands and global test setup
├── cypress.config.js               # Store cypress configurations 
├── package-lock.json               # dependencies
└── package.json                    # dependencies

```
