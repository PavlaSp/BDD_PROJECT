Feature: Uživatel vidí rekapitulaci

  Background:
    Given uživatel otevře aplikaci



  Scenario: Uživatel vidí odpovědi a stanovisko schvalovatele
    When uživatel vyplní dotazník
    And přepnu roli na schvalovatele
    And schvalovatel přidá komentář "Schváleno"
    And schvalovatel schválí dotazník
    And přepnu roli na uživatele
    Then vidí své odpovědi
    And vidí komentář schvalovatele
    And vidí stanovisko schvalovatele
    And nelze nic editovat
