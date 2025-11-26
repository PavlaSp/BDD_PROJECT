// Generated from: features\1_nadpis.feature
import { test } from "playwright-bdd";

test.describe('Na stránce je viditelný nadpis', () => {

  test('Uživatel vidí nadpis', async ({ Given, Then, page }) => { 
    await Given('uživatel otevře aplikaci', null, { page }); 
    await Then('vidí text "Ukázka BDD projektu"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\1_nadpis.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given uživatel otevře aplikaci","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then vidí text \"Ukázka BDD projektu\"","stepMatchArguments":[{"group":{"start":10,"value":"\"Ukázka BDD projektu\"","children":[{"start":11,"value":"Ukázka BDD projektu","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end