import { expect, test } from "@playwright/test";

test("index page has image anchor in navbar", async ({ page }) => {
	await page.goto("/");

	await expect(page.getByRole("link").first()).toBeVisible();
});

test("index page has two links by default on medium to large screens with no hamburger menu", async ({
	page,
}) => {
	await page.goto("/");

	await expect(page.getByRole("link", { name: "Home", exact: true })).toBeVisible();
	await expect(page.getByRole("link", { name: "Other Home", exact: true })).toBeVisible();
	await expect(page.getByTestId("hamburger")).toBeHidden();
});

test("index page has expected h1", async ({ page }) => {
	await page.goto("/");

	await expect(page.getByRole("heading", { name: "Play games online", exact: true })).toBeVisible();
});
