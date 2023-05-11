set windows-shell := ["pwsh.exe", "-NoLogo", "-Command"]

# builds both the web server and web app
build-all: build-server build-web

# builds release version of web server
build-server:
	cargo build --release --package server

# builds production version of web app
build-web:
	pnpm --filter web run build

# run Rust web server
dev-server:
	cargo run --bin server

# run development server for web app
dev-web:
	pnpm --filter web dev

# initialise project
init:
	pnpm install
	pnpx playwright install

# runs web server and web app test suites
test-all: test-server test-web

# runs all test suites on Rust web server
test-server:
	cargo test --workspace

# runs both Playwright and Vitest test suites for web app
test-web: test-web-browser test-web-unit

# runs Playwright test suite for web app
test-web-browser:
	pnpm --filter web run test

# runs Vitest test suite for web app
test-web-unit:
	pnpm --filter web exec vitest run