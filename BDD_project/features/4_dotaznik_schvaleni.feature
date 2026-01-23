Feature: Schvalovatel schvaluje nebo zamítá

  Background:
    Given uživatel otevře aplikaci


  Scenario: Schvalovatel vidí odpovědi bez komentáře
    When uživatel vyplní dotazník
    Then vidí odpovědi uživatele

  Scenario: Schvalovatel vidí odpovědi a schválí
    When uživatel vyplní dotazník
    And přepnu roli na schvalovatele
    Then vidí odpovědi uživatele
    When schvalovatel přidá komentář "Komentář schvalovatele"
    And schvalovatel schválí dotazník
    Then vidí zprávu "Dotazník byl schválen."


  Scenario: Schvalovatel se pokusí schválit bez komentáře
    When uživatel vyplní dotazník
    And přepnu roli na schvalovatele
    Then vidí odpovědi uživatele
    Then vidí odpovědi uživatele
    When schvalovatel schválí dotazník
    Then vidí zprávu "Komentář je povinný!"