
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

    await driver.sleep(3000)
})

test('Make sure all bots display when "All Bots" button is clicked', async() => {
    let allBtn = await driver.findElement(By.id('see-all'))
    await allBtn.click()

    let displayedBots = await driver.findElement(By.xpath('(//div[@id="all-bots"]/div[@class="bot-card outline"])[1]'))
    let displayed = await displayedBots.isDisplayed()

    expect(displayed).toBe(true)

    await driver.sleep(5000)
})

test('Draw button displays a selection of bots to choose from', async() => {
    let drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()

    let randBots = await driver.findElement(By.xpath('(//section/div[@id = "choices"])'))
    let botChoices = await randBots.isDisplayed()

    expect(botChoices).toBe(true)

    await driver.sleep(5000)
})