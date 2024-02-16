import { Page, expect } from "@playwright/test"
import { TestLocators } from "../Constants/Locators"

export const verifyThatUserSuccessfullyLandedOnHomePage = async(page: Page) =>{
    const landingPage  = page.getByRole('heading', {level: 1}).filter({hasText: TestLocators.textLocators.landingPageHeadingTxt}).first()
    await expect(landingPage).toBeVisible()
}

export const verifyAndClickOnValueEngineeringNavItem = async (page:Page) => {
    const valueEngineeringNavItem = page.locator(TestLocators.classlocators.navItemLocator).filter({hasText: TestLocators.textLocators.valueEngineeringTxt}).first()
    await expect(valueEngineeringNavItem).toBeVisible()
    await valueEngineeringNavItem.click()
}

export const verifyThatUserSuccessfullyLandedOnValueEngineeringPage = async (page:Page) => {
    const valueEngineeringPageHeading = page.getByRole('heading', {level: 2}).filter({hasText: TestLocators.textLocators.valueEngineeringServicesPageHeadingTxt}).first()
    await expect(valueEngineeringPageHeading).toBeVisible()
}

export const scrollAndVerifyValueEnhancementExampleSecictionIsVisible = async (page:Page) => {
    const valueEnchancementExampleSection = page.getByRole('heading', {level: 3}).filter({hasText: TestLocators.textLocators.valueEnchancementExamplesTxt}).first()
    await valueEnchancementExampleSection.scrollIntoViewIfNeeded()
    await expect(valueEnchancementExampleSection).toBeVisible()
}

export const verifySubSectionsAreVisible = async (page:Page, headingName: string) => {
    const headingCheck = page.getByRole('heading', {level: 5}).filter({hasText: headingName}).first();
    await expect(headingCheck).toBeVisible()
    const checkParagraph = page.locator(TestLocators.classlocators.cardBodyLocator).filter({has: headingCheck}).locator('p').first();
    await expect(checkParagraph).toBeVisible()
    expect(await checkParagraph.innerText()).toBeTruthy()
}