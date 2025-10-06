from playwright.sync_api import sync_playwright, Page, expect

def run(page: Page):
    # 1. Arrange: Go to the homepage.
    page.goto("http://localhost:3000")

    # 2. Assert: Confirm the title is correct.
    expect(page).to_have_title("Kilele University - Empowering Minds, Shaping Futures")

    # 3. Assert: Check for the new heading.
    heading = page.get_by_role("heading", name="Kilele University", level=1)
    expect(heading).to_be_visible()

    # 4. Assert: Check for the new tagline
    tagline = page.get_by_text("A New Peak in Kenyan Education")
    expect(tagline).to_be_visible()

    # 5. Assert: Check for the "Recent News" section
    news_heading = page.get_by_role("heading", name="Recent News")
    expect(news_heading).to_be_visible()

    # 6. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png", full_page=True)


with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    run(page)
    browser.close()