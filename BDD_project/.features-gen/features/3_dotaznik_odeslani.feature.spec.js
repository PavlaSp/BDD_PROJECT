// Generated from: features\3_dotaznik_odeslani.feature
import { test } from "playwright-bdd";

test.describe('Uživatel vyplní a odešle dotazník', () => {

  test('Uživatel vyplní a odešle dotazník', async ({ Given, When, Then, And, page }) => { 
    await Given('uživatel otevře aplikaci', null, { page }); 
    await When('vybere "Odpověď 1" u otázky 1', null, { page }); 
    await And('vybere "Odpověď 2" u otázky 2', null, { page }); 
    await And('vyplní komentář "Testovací komentář" u otázky 3', null, { page }); 
    await And('odešle dotazník', null, { page }); 
    await Then('vidí zprávu "Dotazník byl odeslán!"', null, { page }); 
  });

  test('Uživatel chce odeslat dotazník bez povinných polí', async ({ Given, When, Then, page }) => { 
    await Given('uživatel otevře aplikaci', null, { page }); 
    await When('odešle dotazník', null, { page }); 
    await Then('vidí zprávu "Nejsou vyplněny všechny povinné odpovědi."', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\3_dotaznik_odeslani.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given uživatel otevře aplikaci","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When vybere \"Odpověď 1\" u otázky 1","stepMatchArguments":[{"group":{"start":7,"value":"\"Odpověď 1\"","children":[{"start":8,"value":"Odpověď 1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"1","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And vybere \"Odpověď 2\" u otázky 2","stepMatchArguments":[{"group":{"start":7,"value":"\"Odpověď 2\"","children":[{"start":8,"value":"Odpověď 2","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"2","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And vyplní komentář \"Testovací komentář\" u otázky 3","stepMatchArguments":[{"group":{"start":16,"value":"\"Testovací komentář\"","children":[{"start":17,"value":"Testovací komentář","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And odešle dotazník","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then vidí zprávu \"Dotazník byl odeslán!\"","stepMatchArguments":[{"group":{"start":12,"value":"\"Dotazník byl odeslán!\"","children":[{"start":13,"value":"Dotazník byl odeslán!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given uživatel otevře aplikaci","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When odešle dotazník","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then vidí zprávu \"Nejsou vyplněny všechny povinné odpovědi.\"","stepMatchArguments":[{"group":{"start":12,"value":"\"Nejsou vyplněny všechny povinné odpovědi.\"","children":[{"start":13,"value":"Nejsou vyplněny všechny povinné odpovědi.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end