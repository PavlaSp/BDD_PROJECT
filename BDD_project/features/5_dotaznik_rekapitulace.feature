Feature: Uživatel vidí rekapitulaci

  Scenario: Uživatel vidí odpovědi a stanovisko schvalovatele
    Given uživatel přepne na rekapitulaci
    Then vidí své odpovědi
    And vidí komentář schvalovatele
    And vidí stanovisko schvalovatele
    And nelze nic editovat


 