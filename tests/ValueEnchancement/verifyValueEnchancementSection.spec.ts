import { test } from "@playwright/test";
import {
  scrollAndVerifyValueEnhancementExampleSecictionIsVisible,
  verifyAndClickOnValueEngineeringNavItem,
  verifySubSectionsAreVisible,
  verifyThatUserSuccessfullyLandedOnHomePage,
  verifyThatUserSuccessfullyLandedOnValueEngineeringPage,
} from "./valueEnchancementSection.steps";

test.describe("Feature - Dashboard - Plans", () => {
  test.beforeEach(async ({ page }) => {
    await test.step("Visit Home Page and Verify user landed on home page Successfully", async () => {
      await page.goto("/");
      await verifyThatUserSuccessfullyLandedOnHomePage(page);
    });
  });
  test("As User verify that Value Enhancement Examples are vivible on Value Engineering Page", async ({
    page,
  }) => {
    await test.step("Verify and Click Value engineering navigation Item", async () => {
      await verifyAndClickOnValueEngineeringNavItem(page);
    });
    await test.step("Verify that user landed on Value Engineering page Successfully ", async () => {
      await verifyThatUserSuccessfullyLandedOnValueEngineeringPage(page);
    });
    await test.step("Verify and Scroll into view if needed Value Enhancement Example Section", async () => {
      await scrollAndVerifyValueEnhancementExampleSecictionIsVisible(page);
    });
    await test.step("Verify that 'Headless Solutions' sub Section is Visible and has Paragraph", async () => {
      const headlessSolutionSubsection = 'Headless Solutions'
      await verifySubSectionsAreVisible(page, headlessSolutionSubsection);
    });
    await test.step("Verify that 'Corezoid' sub Section is Visible and has Paragraph", async () => {
      const CorezoidSubsection = 'Corezoid'
      await verifySubSectionsAreVisible(page, CorezoidSubsection);
    });
    await test.step("Verify that 'DevOps' sub Section is Visible and has Paragraph", async () => {
      const DevOpsSubsection = 'DevOps'
      await verifySubSectionsAreVisible(page, DevOpsSubsection);
    });
    await test.step("Verify that 'AI Chatbots' sub Section is Visible and has Paragraph", async () => {
      const AIChatbotsSubsection = 'AI Chatbots'
      await verifySubSectionsAreVisible(page, AIChatbotsSubsection);
    });
  });
});
