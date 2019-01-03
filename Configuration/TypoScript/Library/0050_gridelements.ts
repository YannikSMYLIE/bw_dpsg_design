# Ausgabe der Grid Elemente anpassen
tt_content.gridelements_pi1.20.10.setup {
# ID des gridelements
    1 < lib.gridelements.defaultGridSetup
    1 {
        columns {
        # colPos ID
            1 < .default
            1.wrap = <div class="col-3">|</div>

     # colPos ID
            2 < 1
            3 < 1
            4 < 1
        }
   # Optional kann das gesamte Element noch einen wrap bekommen
        wrap = <div class="row">|</div>
    }
}