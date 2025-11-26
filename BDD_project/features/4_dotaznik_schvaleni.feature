Feature: Schvalovatel schvaluje nebo zamítá

  Scenario: Schvalovatel vidí odpovědi bez komentáře
    Given schvalovatel otevře aplikaci
    Then vidí odpovědi uživatele

  Scenario: Schvalovatel vidí odpovědi a schválí
    Given schvalovatel otevře aplikaci
    Then vidí odpovědi uživatele
    When schvalovatel přidá komentář "Komentář schvalovatele"
    And schvalovatel schválí dotazník
    Then vidí zprávu "Dotazník byl schválen."


  Scenario: Schvalovatel se pokusí schválit bez komentáře
    Given schvalovatel otevře aplikaci
    Then vidí odpovědi uživatele
    When schvalovatel schválí dotazník
    Then vidí zprávu "Komentář je povinný!"
