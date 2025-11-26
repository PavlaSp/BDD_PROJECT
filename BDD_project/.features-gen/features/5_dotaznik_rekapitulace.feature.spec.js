// Generated from: features\5_dotaznik_rekapitulace.feature
import { test } from "playwright-bdd";

test.describe('Uživatel vidí rekapitulaci', () => {

  test('Uživatel vidí odpovědi a stanovisko schvalovatele', async ({ Given, Then, And, page }) => { 
    await Given('uživatel přepne na rekapitulaci', null, { page }); 
    await Then('vidí své odpovědi', null, { page }); 
    await And('vidí komentář schvalovatele', null, { page }); 
    await And('vidí stanovisko schvalovatele', null, { page }); 
    await And('nelze nic editovat', null, { page }); 
  });

  test('Uživatel nemá oprávnění vidět rekapitulaci', async ({ Given, When, Then, page }) => { 
    await Given('uživatel otevře aplikaci', null, { page }); 
    await When('uživatel přepne na rekapitulaci', null, { page }); 
    await Then('vidí zprávu "Nemáte oprávnění vidět rekapitulaci!"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\5_dotaznik_rekapitulace.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given uživatel přepne na rekapitulaci","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then vidí své odpovědi","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"And vidí komentář schvalovatele","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And vidí stanovisko schvalovatele","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And nelze nic editovat","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given uživatel otevře aplikaci","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When uživatel přepne na rekapitulaci","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then vidí zprávu \"Nemáte oprávnění vidět rekapitulaci!\"","stepMatchArguments":[{"group":{"start":12,"value":"\"Nemáte oprávnění vidět rekapitulaci!\"","children":[{"start":13,"value":"Nemáte oprávnění vidět rekapitulaci!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end