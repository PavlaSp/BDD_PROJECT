// Generated from: features\2_dotaznik_uzivatel.feature
import { test } from "playwright-bdd";

test.describe('Uživatel vidí dotazník', () => {

  test('Uživatel vidí dotazník', async ({ Given, Then, And, page }) => { 
    await Given('uživatel otevře aplikaci', null, { page }); 
    await Then('vidí dotazník', null, { page }); 
    await And('role je "uzivatel"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\2_dotaznik_uzivatel.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given uživatel otevře aplikaci","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then vidí dotazník","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"And role je \"uzivatel\"","stepMatchArguments":[{"group":{"start":8,"value":"\"uzivatel\"","children":[{"start":9,"value":"uzivatel","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end