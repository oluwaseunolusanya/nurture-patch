# Nurture Patch 🌱
> Safe, caring, and fun childcare for school-age children.

[Nurture Patch Website](https://nurturepatch.co.uk)

## Overview
Nurture Patch provides a responsive platform offering after-school and holiday childcare services. With a user-friendly booking system and detailed service description, the site is designed to be mobile-first with a focus on simplicity.

## Features
- Responsive design with smooth navigation
- Booking form with email integration
- Contact section for quick communication
- Built using React, TailwindCSS, and React Router

## Tech Stack
- **React** (Frontend)
- **TailwindCSS** (Styling)
- **React Router DOM** (Routing)
- **EmailJS** (For email-based form submission)

## Getting Started
1. Clone the repository
   ```bash
   git clone https://github.com/oluwaseunolusanya/nurture-patch.git
   cd nurture-patch

2. Install dependencies
    ```bash
     npm install

3. Run the development server and visit http://localhost:5173/ in your browser
    ```bash
    npm run dev


## Deployment
Hosted on Vercel and linked to www.nuturepatch.co.uk

## Folder Structure
- nurture-patch/
  - node_modules/
  - public/
  - src/
    - components/
      - Booking.jsx
      - Contact.jsx
      - Hero.jsx
      - Navbar.jsx
    - pages/
      - About.jsx
      - Home.jsx
    - App.jsx
    - main.jsx
  - .gitignore
  - eslint.config.js
  - index.html
  - package.json
  - package-lock.json
  - README.md
  - vite.config.js
 
  ├───node_modules
│   ├───.bin
│   ├───.vite
│   │   └───deps
│   ├───.vite-temp
│   ├───@ampproject
│   │   └───remapping
│   │       └───dist
│   │           └───types
│   ├───@babel
│   │   ├───code-frame
│   │   │   └───lib
│   │   ├───compat-data
│   │   │   └───data
│   │   ├───core
│   │   │   ├───lib
│   │   │   │   ├───config
│   │   │   │   │   ├───files
│   │   │   │   │   ├───helpers
│   │   │   │   │   └───validation
│   │   │   │   ├───errors
│   │   │   │   ├───gensync-utils
│   │   │   │   ├───parser
│   │   │   │   │   └───util
│   │   │   │   ├───tools
│   │   │   │   ├───transformation
│   │   │   │   │   ├───file
│   │   │   │   │   └───util
│   │   │   │   └───vendor
│   │   │   └───src
│   │   │       └───config
│   │   │           └───files
│   │   ├───generator
│   │   │   └───lib
│   │   │       ├───generators
│   │   │       └───node
│   │   ├───helper-compilation-targets
│   │   │   └───lib
│   │   ├───helper-module-imports
│   │   │   └───lib
│   │   ├───helper-module-transforms
│   │   │   └───lib
│   │   ├───helper-plugin-utils
│   │   │   └───lib
│   │   ├───helper-string-parser
│   │   │   └───lib
│   │   ├───helper-validator-identifier
│   │   │   └───lib
│   │   ├───helper-validator-option
│   │   │   └───lib
│   │   ├───helpers
│   │   │   └───lib
│   │   │       └───helpers
│   │   ├───parser
│   │   │   ├───bin
│   │   │   ├───lib
│   │   │   └───typings
│   │   ├───plugin-transform-react-jsx-self
│   │   │   └───lib
│   │   ├───plugin-transform-react-jsx-source
│   │   │   └───lib
│   │   ├───template
│   │   │   └───lib
│   │   ├───traverse
│   │   │   ├───lib
│   │   │   │   ├───path
│   │   │   │   │   ├───inference
│   │   │   │   │   └───lib
│   │   │   │   └───scope
│   │   │   │       └───lib
│   │   │   └───node_modules
│   │   │       └───globals
│   │   └───types
│   │       └───lib
│   │           ├───asserts
│   │           │   └───generated
│   │           ├───ast-types
│   │           │   └───generated
│   │           ├───builders
│   │           │   ├───flow
│   │           │   ├───generated
│   │           │   ├───react
│   │           │   └───typescript
│   │           ├───clone
│   │           ├───comments
│   │           ├───constants
│   │           │   └───generated
│   │           ├───converters
│   │           ├───definitions
│   │           ├───modifications
│   │           │   ├───flow
│   │           │   └───typescript
│   │           ├───retrievers
│   │           ├───traverse
│   │           ├───utils
│   │           │   └───react
│   │           └───validators
│   │               ├───generated
│   │               └───react
│   ├───@esbuild
│   │   └───win32-x64
│   ├───@eslint
│   │   ├───config-array
│   │   │   └───dist
│   │   │       ├───cjs
│   │   │       │   └───std__path
│   │   │       └───esm
│   │   │           └───std__path
│   │   ├───config-helpers
│   │   │   └───dist
│   │   │       ├───cjs
│   │   │       └───esm
│   │   ├───core
│   │   │   └───dist
│   │   │       ├───cjs
│   │   │       └───esm
│   │   ├───eslintrc
│   │   │   ├───conf
│   │   │   ├───dist
│   │   │   ├───lib
│   │   │   │   ├───config-array
│   │   │   │   ├───shared
│   │   │   │   └───types
│   │   │   └───node_modules
│   │   │       └───globals
│   │   ├───js
│   │   │   ├───src
│   │   │   │   └───configs
│   │   │   └───types
│   │   ├───object-schema
│   │   │   └───dist
│   │   │       ├───cjs
│   │   │       └───esm
│   │   └───plugin-kit
│   │       └───dist
│   │           ├───cjs
│   │           └───esm
│   ├───@eslint-community
│   │   ├───eslint-utils
│   │   │   └───node_modules
│   │   │       └───eslint-visitor-keys
│   │   │           ├───dist
│   │   │           └───lib
│   │   └───regexpp
│   ├───@humanfs
│   │   ├───core
│   │   │   ├───dist
│   │   │   └───src
│   │   └───node
│   │       ├───dist
│   │       ├───node_modules
│   │       │   └───@humanwhocodes
│   │       │       └───retry
│   │       │           └───dist
│   │       └───src
│   ├───@humanwhocodes
│   │   ├───module-importer
│   │   │   ├───dist
│   │   │   └───src
│   │   └───retry
│   │       └───dist
│   ├───@jridgewell
│   │   ├───gen-mapping
│   │   │   └───dist
│   │   │       └───types
│   │   ├───resolve-uri
│   │   │   └───dist
│   │   │       └───types
│   │   ├───set-array
│   │   │   └───dist
│   │   │       └───types
│   │   ├───sourcemap-codec
│   │   │   └───dist
│   │   │       └───types
│   │   └───trace-mapping
│   │       └───dist
│   │           └───types
│   ├───@rollup
│   │   └───rollup-win32-x64-msvc
│   ├───@tailwindcss
│   │   ├───node
│   │   │   └───dist
│   │   ├───oxide
│   │   ├───oxide-win32-x64-msvc
│   │   └───vite
│   │       └───dist
│   ├───@types
│   │   ├───babel__core
│   │   ├───babel__generator
│   │   ├───babel__template
│   │   ├───babel__traverse
│   │   ├───estree
│   │   ├───json-schema
│   │   ├───react
│   │   │   └───ts5.0
│   │   │       └───v18
│   │   │           └───ts5.0
│   │   └───react-dom
│   │       └───test-utils
│   ├───@vitejs
│   │   └───plugin-react
│   │       └───dist
│   ├───acorn
│   │   ├───bin
│   │   └───dist
│   ├───acorn-jsx
│   ├───ajv
│   │   ├───dist
│   │   ├───lib
│   │   │   ├───compile
│   │   │   ├───dot
│   │   │   ├───dotjs
│   │   │   └───refs
│   │   └───scripts
│   ├───ansi-styles
│   ├───argparse
│   │   └───lib
│   ├───balanced-match
│   │   └───.github
│   ├───brace-expansion
│   ├───browserslist
│   ├───callsites
│   ├───caniuse-lite
│   │   ├───data
│   │   │   ├───features
│   │   │   └───regions
│   │   └───dist
│   │       ├───lib
│   │       └───unpacker
│   ├───chalk
│   │   └───source
│   ├───color-convert
│   ├───color-name
│   ├───concat-map
│   │   ├───example
│   │   └───test
│   ├───convert-source-map
│   ├───cookie
│   │   └───dist
│   ├───cross-spawn
│   │   └───lib
│   │       └───util
│   ├───csstype
│   ├───debug
│   │   └───src
│   ├───deep-is
│   │   ├───example
│   │   └───test
│   ├───detect-libc
│   │   └───lib
│   ├───electron-to-chromium
│   ├───enhanced-resolve
│   │   └───lib
│   │       └───util
│   ├───esbuild
│   │   ├───bin
│   │   └───lib
│   ├───escalade
│   │   ├───dist
│   │   └───sync
│   ├───escape-string-regexp
│   ├───eslint
│   │   ├───bin
│   │   ├───conf
│   │   ├───lib
│   │   │   ├───cli-engine
│   │   │   │   └───formatters
│   │   │   ├───config
│   │   │   ├───eslint
│   │   │   ├───languages
│   │   │   │   └───js
│   │   │   │       └───source-code
│   │   │   │           └───token-store
│   │   │   ├───linter
│   │   │   │   └───code-path-analysis
│   │   │   ├───rule-tester
│   │   │   ├───rules
│   │   │   │   └───utils
│   │   │   │       └───unicode
│   │   │   ├───services
│   │   │   ├───shared
│   │   │   └───types
│   │   └───messages
│   ├───eslint-plugin-react-hooks
│   │   └───cjs
│   ├───eslint-plugin-react-refresh
│   ├───eslint-scope
│   │   ├───dist
│   │   └───lib
│   ├───eslint-visitor-keys
│   │   ├───dist
│   │   └───lib
│   ├───espree
│   │   ├───dist
│   │   └───lib
│   ├───esquery
│   │   └───dist
│   ├───esrecurse
│   ├───estraverse
│   ├───esutils
│   │   └───lib
│   ├───fast-deep-equal
│   │   └───es6
│   ├───fast-json-stable-stringify
│   │   ├───.github
│   │   ├───benchmark
│   │   ├───example
│   │   └───test
│   ├───fast-levenshtein
│   ├───fdir
│   │   └───dist
│   │       ├───api
│   │       │   └───functions
│   │       └───builder
│   ├───file-entry-cache
│   ├───find-up
│   ├───flat-cache
│   │   └───src
│   ├───flatted
│   │   ├───cjs
│   │   ├───esm
│   │   ├───php
│   │   ├───python
│   │   └───types
│   ├───gensync
│   │   └───test
│   ├───glob-parent
│   ├───globals
│   ├───graceful-fs
│   ├───has-flag
│   ├───ignore
│   ├───import-fresh
│   ├───imurmurhash
│   ├───is-extglob
│   ├───is-glob
│   ├───isexe
│   │   └───test
│   ├───jiti
│   │   ├───dist
│   │   └───lib
│   ├───js-tokens
│   ├───js-yaml
│   │   ├───bin
│   │   ├───dist
│   │   └───lib
│   │       ├───schema
│   │       └───type
│   ├───jsesc
│   │   ├───bin
│   │   └───man
│   ├───json-buffer
│   │   └───test
│   ├───json-schema-traverse
│   │   └───spec
│   │       └───fixtures
│   ├───json-stable-stringify-without-jsonify
│   │   ├───example
│   │   └───test
│   ├───json5
│   │   ├───dist
│   │   └───lib
│   ├───keyv
│   │   └───src
│   ├───levn
│   │   └───lib
│   ├───lightningcss
│   │   └───node
│   ├───lightningcss-win32-x64-msvc
│   ├───locate-path
│   ├───lodash.merge
│   ├───lodash.throttle
│   ├───loose-envify
│   ├───lru-cache
│   ├───lucide-react
│   │   └───dist
│   │       ├───cjs
│   │       ├───esm
│   │       │   ├───icons
│   │       │   └───shared
│   │       │       └───src
│   │       └───umd
│   ├───minimatch
│   ├───ms
│   ├───nanoid
│   │   ├───async
│   │   ├───bin
│   │   ├───non-secure
│   │   └───url-alphabet
│   ├───natural-compare
│   ├───node-releases
│   │   └───data
│   │       ├───processed
│   │       └───release-schedule
│   ├───object-assign
│   ├───optionator
│   │   └───lib
│   ├───p-limit
│   ├───p-locate
│   ├───parent-module
│   ├───path-exists
│   ├───path-key
│   ├───picocolors
│   ├───picomatch
│   │   └───lib
│   ├───postcss
│   │   └───lib
│   ├───prelude-ls
│   │   └───lib
│   ├───prop-types
│   │   └───lib
│   ├───punycode
│   ├───react
│   │   └───cjs
│   ├───react-dom
│   │   └───cjs
│   ├───react-is
│   │   ├───cjs
│   │   └───umd
│   ├───react-refresh
│   │   └───cjs
│   ├───react-router
│   │   └───dist
│   │       ├───development
│   │       │   └───lib
│   │       │       └───types
│   │       └───production
│   │           └───lib
│   │               └───types
│   ├───react-router-dom
│   │   └───dist
│   ├───react-scroll
│   │   └───modules
│   │       ├───components
│   │       ├───mixins
│   │       └───__tests__
│   ├───resolve-from
│   ├───rollup
│   │   └───dist
│   │       ├───bin
│   │       ├───es
│   │       │   └───shared
│   │       └───shared
│   ├───scheduler
│   │   └───cjs
│   ├───semver
│   │   └───bin
│   ├───set-cookie-parser
│   │   └───lib
│   ├───shebang-command
│   ├───shebang-regex
│   ├───source-map-js
│   │   └───lib
│   ├───strip-json-comments
│   ├───supports-color
│   ├───tailwindcss
│   │   └───dist
│   ├───tapable
│   │   └───lib
│   ├───tinyglobby
│   │   └───dist
│   ├───turbo-stream
│   │   └───dist
│   ├───type-check
│   │   └───lib
│   ├───update-browserslist-db
│   ├───uri-js
│   │   └───dist
│   │       ├───es5
│   │       └───esnext
│   │           └───schemes
│   ├───vite
│   │   ├───bin
│   │   ├───dist
│   │   │   ├───client
│   │   │   ├───node
│   │   │   │   └───chunks
│   │   │   └───node-cjs
│   │   ├───misc
│   │   └───types
│   │       └───internal
│   ├───which
│   │   └───bin
│   ├───word-wrap
│   ├───yallist
│   └───yocto-queue

C:\Users\Oluwaseun Olusanya\workspace\nurture-patch>cd src

C:\Users\Oluwaseun Olusanya\workspace\nurture-patch\src>tree
Folder PATH listing
Volume serial number is 905E-4DC9
C:.
├───assets
├───components
└───pages

C:\Users\Oluwaseun Olusanya\workspace\nurture-patch\src>cd ..

C:\Users\Oluwaseun Olusanya\workspace\nurture-patch>tree
Folder PATH listing
Volume serial number is 905E-4DC9
C:.
├───node_modules
│   ├───.bin
│   ├───.vite
│   │   └───deps
│   ├───.vite-temp
│   ├───@ampproject
│   │   └───remapping
│   │       └───dist
│   │           └───types
│   ├───@babel
│   │   ├───code-frame
│   │   │   └───lib
│   │   ├───compat-data
│   │   │   └───data
│   │   ├───core
│   │   │   ├───lib
│   │   │   │   ├───config
│   │   │   │   │   ├───files
│   │   │   │   │   ├───helpers
│   │   │   │   │   └───validation
│   │   │   │   ├───errors
│   │   │   │   ├───gensync-utils
│   │   │   │   ├───parser
│   │   │   │   │   └───util
│   │   │   │   ├───tools
│   │   │   │   ├───transformation
│   │   │   │   │   ├───file
│   │   │   │   │   └───util
│   │   │   │   └───vendor
│   │   │   └───src
│   │   │       └───config
│   │   │           └───files
│   │   ├───generator
│   │   │   └───lib
│   │   │       ├───generators
│   │   │       └───node
│   │   ├───helper-compilation-targets
│   │   │   └───lib
│   │   ├───helper-module-imports
│   │   │   └───lib
│   │   ├───helper-module-transforms
│   │   │   └───lib
│   │   ├───helper-plugin-utils
│   │   │   └───lib
│   │   ├───helper-string-parser
│   │   │   └───lib
│   │   ├───helper-validator-identifier
│   │   │   └───lib
│   │   ├───helper-validator-option
│   │   │   └───lib
│   │   ├───helpers
│   │   │   └───lib
│   │   │       └───helpers
│   │   ├───parser
│   │   │   ├───bin
│   │   │   ├───lib
│   │   │   └───typings
│   │   ├───plugin-transform-react-jsx-self
│   │   │   └───lib
│   │   ├───plugin-transform-react-jsx-source
│   │   │   └───lib
│   │   ├───template
│   │   │   └───lib
│   │   ├───traverse
│   │   │   ├───lib
│   │   │   │   ├───path
│   │   │   │   │   ├───inference
│   │   │   │   │   └───lib
│   │   │   │   └───scope
│   │   │   │       └───lib
│   │   │   └───node_modules
│   │   │       └───globals
│   │   └───types
│   │       └───lib
│   │           ├───asserts
│   │           │   └───generated
│   │           ├───ast-types
│   │           │   └───generated
│   │           ├───builders
│   │           │   ├───flow
│   │           │   ├───generated
│   │           │   ├───react
│   │           │   └───typescript
│   │           ├───clone
│   │           ├───comments
│   │           ├───constants
│   │           │   └───generated
│   │           ├───converters
│   │           ├───definitions
│   │           ├───modifications
│   │           │   ├───flow
│   │           │   └───typescript
│   │           ├───retrievers
│   │           ├───traverse
│   │           ├───utils
│   │           │   └───react
│   │           └───validators
│   │               ├───generated
│   │               └───react
│   ├───@esbuild
│   │   └───win32-x64
│   ├───@eslint
│   │   ├───config-array
│   │   │   └───dist
│   │   │       ├───cjs
│   │   │       │   └───std__path
│   │   │       └───esm
│   │   │           └───std__path
│   │   ├───config-helpers
│   │   │   └───dist
│   │   │       ├───cjs
│   │   │       └───esm
│   │   ├───core
│   │   │   └───dist
│   │   │       ├───cjs
│   │   │       └───esm
│   │   ├───eslintrc
│   │   │   ├───conf
│   │   │   ├───dist
│   │   │   ├───lib
│   │   │   │   ├───config-array
│   │   │   │   ├───shared
│   │   │   │   └───types
│   │   │   └───node_modules
│   │   │       └───globals
│   │   ├───js
│   │   │   ├───src
│   │   │   │   └───configs
│   │   │   └───types
│   │   ├───object-schema
│   │   │   └───dist
│   │   │       ├───cjs
│   │   │       └───esm
│   │   └───plugin-kit
│   │       └───dist
│   │           ├───cjs
│   │           └───esm
│   ├───@eslint-community
│   │   ├───eslint-utils
│   │   │   └───node_modules
│   │   │       └───eslint-visitor-keys
│   │   │           ├───dist
│   │   │           └───lib
│   │   └───regexpp
│   ├───@humanfs
│   │   ├───core
│   │   │   ├───dist
│   │   │   └───src
│   │   └───node
│   │       ├───dist
│   │       ├───node_modules
│   │       │   └───@humanwhocodes
│   │       │       └───retry
│   │       │           └───dist
│   │       └───src
│   ├───@humanwhocodes
│   │   ├───module-importer
│   │   │   ├───dist
│   │   │   └───src
│   │   └───retry
│   │       └───dist
│   ├───@jridgewell
│   │   ├───gen-mapping
│   │   │   └───dist
│   │   │       └───types
│   │   ├───resolve-uri
│   │   │   └───dist
│   │   │       └───types
│   │   ├───set-array
│   │   │   └───dist
│   │   │       └───types
│   │   ├───sourcemap-codec
│   │   │   └───dist
│   │   │       └───types
│   │   └───trace-mapping
│   │       └───dist
│   │           └───types
│   ├───@rollup
│   │   └───rollup-win32-x64-msvc
│   ├───@tailwindcss
│   │   ├───node
│   │   │   └───dist
│   │   ├───oxide
│   │   ├───oxide-win32-x64-msvc
│   │   └───vite
│   │       └───dist
│   ├───@types
│   │   ├───babel__core
│   │   ├───babel__generator
│   │   ├───babel__template
│   │   ├───babel__traverse
│   │   ├───estree
│   │   ├───json-schema
│   │   ├───react
│   │   │   └───ts5.0
│   │   │       └───v18
│   │   │           └───ts5.0
│   │   └───react-dom
│   │       └───test-utils
│   ├───@vitejs
│   │   └───plugin-react
│   │       └───dist
│   ├───acorn
│   │   ├───bin
│   │   └───dist
│   ├───acorn-jsx
│   ├───ajv
│   │   ├───dist
│   │   ├───lib
│   │   │   ├───compile
│   │   │   ├───dot
│   │   │   ├───dotjs
│   │   │   └───refs
│   │   └───scripts
│   ├───ansi-styles
│   ├───argparse
│   │   └───lib
│   ├───balanced-match
│   │   └───.github
│   ├───brace-expansion
│   ├───browserslist
│   ├───callsites
│   ├───caniuse-lite
│   │   ├───data
│   │   │   ├───features
│   │   │   └───regions
│   │   └───dist
│   │       ├───lib
│   │       └───unpacker
│   ├───chalk
│   │   └───source
│   ├───color-convert
│   ├───color-name
│   ├───concat-map
│   │   ├───example
│   │   └───test
│   ├───convert-source-map
│   ├───cookie
│   │   └───dist
│   ├───cross-spawn
│   │   └───lib
│   │       └───util
│   ├───csstype
│   ├───debug
│   │   └───src
│   ├───deep-is
│   │   ├───example
│   │   └───test
│   ├───detect-libc
│   │   └───lib
│   ├───electron-to-chromium
│   ├───enhanced-resolve
│   │   └───lib
│   │       └───util
│   ├───esbuild
│   │   ├───bin
│   │   └───lib
│   ├───escalade
│   │   ├───dist
│   │   └───sync
│   ├───escape-string-regexp
│   ├───eslint
│   │   ├───bin
│   │   ├───conf
│   │   ├───lib
│   │   │   ├───cli-engine
│   │   │   │   └───formatters
│   │   │   ├───config
│   │   │   ├───eslint
│   │   │   ├───languages
│   │   │   │   └───js
│   │   │   │       └───source-code
│   │   │   │           └───token-store
│   │   │   ├───linter
│   │   │   │   └───code-path-analysis
│   │   │   ├───rule-tester
│   │   │   ├───rules
│   │   │   │   └───utils
│   │   │   │       └───unicode
│   │   │   ├───services
│   │   │   ├───shared
│   │   │   └───types
│   │   └───messages
│   ├───eslint-plugin-react-hooks
│   │   └───cjs
│   ├───eslint-plugin-react-refresh
│   ├───eslint-scope
│   │   ├───dist
│   │   └───lib
│   ├───eslint-visitor-keys
│   │   ├───dist
│   │   └───lib
│   ├───espree
│   │   ├───dist
│   │   └───lib
│   ├───esquery
│   │   └───dist
│   ├───esrecurse
│   ├───estraverse
│   ├───esutils
│   │   └───lib
│   ├───fast-deep-equal
│   │   └───es6
│   ├───fast-json-stable-stringify
│   │   ├───.github
│   │   ├───benchmark
│   │   ├───example
│   │   └───test
│   ├───fast-levenshtein
│   ├───fdir
│   │   └───dist
│   │       ├───api
│   │       │   └───functions
│   │       └───builder
│   ├───file-entry-cache
│   ├───find-up
│   ├───flat-cache
│   │   └───src
│   ├───flatted
│   │   ├───cjs
│   │   ├───esm
│   │   ├───php
│   │   ├───python
│   │   └───types
│   ├───gensync
│   │   └───test
│   ├───glob-parent
│   ├───globals
│   ├───graceful-fs
│   ├───has-flag
│   ├───ignore
│   ├───import-fresh
│   ├───imurmurhash
│   ├───is-extglob
│   ├───is-glob
│   ├───isexe
│   │   └───test
│   ├───jiti
│   │   ├───dist
│   │   └───lib
│   ├───js-tokens
│   ├───js-yaml
│   │   ├───bin
│   │   ├───dist
│   │   └───lib
│   │       ├───schema
│   │       └───type
│   ├───jsesc
│   │   ├───bin
│   │   └───man
│   ├───json-buffer
│   │   └───test
│   ├───json-schema-traverse
│   │   └───spec
│   │       └───fixtures
│   ├───json-stable-stringify-without-jsonify
│   │   ├───example
│   │   └───test
│   ├───json5
│   │   ├───dist
│   │   └───lib
│   ├───keyv
│   │   └───src
│   ├───levn
│   │   └───lib
│   ├───lightningcss
│   │   └───node
│   ├───lightningcss-win32-x64-msvc
│   ├───locate-path
│   ├───lodash.merge
│   ├───lodash.throttle
│   ├───loose-envify
│   ├───lru-cache
│   ├───lucide-react
│   │   └───dist
│   │       ├───cjs
│   │       ├───esm
│   │       │   ├───icons
│   │       │   └───shared
│   │       │       └───src
│   │       └───umd
│   ├───minimatch
│   ├───ms
│   ├───nanoid
│   │   ├───async
│   │   ├───bin
│   │   ├───non-secure
│   │   └───url-alphabet
│   ├───natural-compare
│   ├───node-releases
│   │   └───data
│   │       ├───processed
│   │       └───release-schedule
│   ├───object-assign
│   ├───optionator
│   │   └───lib
│   ├───p-limit
│   ├───p-locate
│   ├───parent-module
│   ├───path-exists
│   ├───path-key
│   ├───picocolors
│   ├───picomatch
│   │   └───lib
│   ├───postcss
│   │   └───lib
│   ├───prelude-ls
│   │   └───lib
│   ├───prop-types
│   │   └───lib
│   ├───punycode
│   ├───react
│   │   └───cjs
│   ├───react-dom
│   │   └───cjs
│   ├───react-is
│   │   ├───cjs
│   │   └───umd
│   ├───react-refresh
│   │   └───cjs
│   ├───react-router
│   │   └───dist
│   │       ├───development
│   │       │   └───lib
│   │       │       └───types
│   │       └───production
│   │           └───lib
│   │               └───types
│   ├───react-router-dom
│   │   └───dist
│   ├───react-scroll
│   │   └───modules
│   │       ├───components
│   │       ├───mixins
│   │       └───__tests__
│   ├───resolve-from
│   ├───rollup
│   │   └───dist
│   │       ├───bin
│   │       ├───es
│   │       │   └───shared
│   │       └───shared
│   ├───scheduler
│   │   └───cjs
│   ├───semver
│   │   └───bin
│   ├───set-cookie-parser
│   │   └───lib
│   ├───shebang-command
│   ├───shebang-regex
│   ├───source-map-js
│   │   └───lib
│   ├───strip-json-comments
│   ├───supports-color
│   ├───tailwindcss
│   │   └───dist
│   ├───tapable
│   │   └───lib
│   ├───tinyglobby
│   │   └───dist
│   ├───turbo-stream
│   │   └───dist
│   ├───type-check
│   │   └───lib
│   ├───update-browserslist-db
│   ├───uri-js
│   │   └───dist
│   │       ├───es5
│   │       └───esnext
│   │           └───schemes
│   ├───vite
│   │   ├───bin
│   │   ├───dist
│   │   │   ├───client
│   │   │   ├───node
│   │   │   │   └───chunks
│   │   │   └───node-cjs
│   │   ├───misc
│   │   └───types
│   │       └───internal
│   ├───which
│   │   └───bin
│   ├───word-wrap
│   ├───yallist
│   └───yocto-queue
├───public
└───src
    ├───assets
    ├───components
    └───page

## Future Improvements
 - Full EmailJS integration for booking form
 - Add parent portal
 - Improve SEO and accessibility
