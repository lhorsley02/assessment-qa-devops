
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking Draw button displays "choices"', async () => {
    const draw = await driver.findElement(By.id('draw'))
    const clickDraw = await draw.click()
    const choices = await driver.findElement(By.id('choices'))
    const displayedChoices = await choices.isDisplayed()
    expect(clickDraw).toHaveReturnedWith(displayedChoices)
})