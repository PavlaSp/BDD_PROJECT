// Generated from: features\4_dotaznik_schvaleni.feature
import { test } from "playwright-bdd";

test.describe('Schvalovatel schvaluje nebo zamítá', () => {

  test('Schvalovatel vidí odpovědi bez komentáře', async ({ Given, Then, page }) => { 
    await Given('schvalovatel otevře aplikaci', null, { page }); 
    await Then('vidí odpovědi uživatele', null, { page }); 
  });

  test('Schvalovatel vidí odpovědi a schválí', async ({ Given, When, Then, And, page }) => { 
    await Given('schvalovatel otevře aplikaci', null, { page }); 
    await Then('vidí odpovědi uživatele', null, { page }); 
    await When('schvalovatel přidá komentář "Komentář schvalovatele"', null, { page }); 
    await And('schvalovatel schválí dotazník', null, { page }); 
    await Then('vidí zprávu "Dotazník byl schválen."', null, { page }); 
  });

  test('Schvalovatel se pokusí schválit bez komentáře', async ({ Given, When, Then, page }) => { 
    await Given('schvalovatel otevře aplikaci', null, { page }); 
    await Then('vidí odpovědi uživatele', null, { page }); 
    await When('schvalovatel schválí dotazník', null, { page }); 
    await Then('vidí zprávu "Komentář je povinný!"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\4_dotaznik_schvaleni.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given schvalovatel otevře aplikaci","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then vidí odpovědi uživatele","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given schvalovatel otevře aplikaci","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then vidí odpovědi uživatele","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When schvalovatel přidá komentář \"Komentář schvalovatele\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Komentář schvalovatele\"","children":[{"start":29,"value":"Komentář schvalovatele","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And schvalovatel schválí dotazník","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then vidí zprávu \"Dotazník byl schválen.\"","stepMatchArguments":[{"group":{"start":12,"value":"\"Dotazník byl schválen.\"","children":[{"start":13,"value":"Dotazník byl schválen.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given schvalovatel otevře aplikaci","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then vidí odpovědi uživatele","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When schvalovatel schválí dotazník","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then vidí zprávu \"Komentář je povinný!\"","stepMatchArguments":[{"group":{"start":12,"value":"\"Komentář je povinný!\"","children":[{"start":13,"value":"Komentář je povinný!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end