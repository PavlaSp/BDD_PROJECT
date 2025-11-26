Feature: Uživatel vidí dotazník

  Scenario: Uživatel vidí dotazník
    Given uživatel otevře aplikaci
    Then vidí dotazník
    And role je "uzivatel"
