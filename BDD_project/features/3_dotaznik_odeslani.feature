Feature: Uživatel vyplní a odešle dotazník

  Scenario: Uživatel vyplní a odešle dotazník
    Given uživatel otevře aplikaci
    When vybere "Odpověď 1" u otázky 1
    And vybere "Odpověď 2" u otázky 2
    And vyplní komentář "Testovací komentář" u otázky 3
    And odešle dotazník
    Then vidí zprávu "Dotazník byl odeslán!"


  Scenario: Uživatel chce odeslat dotazník bez povinných polí
    Given uživatel otevře aplikaci
    When odešle dotazník
    Then vidí zprávu "Nejsou vyplněny všechny povinné odpovědi."
