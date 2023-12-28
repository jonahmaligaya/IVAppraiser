function changeattack(selected) {
    attackiv = selected.options[selected.selectedIndex].text;
}
function changedefense(selected) {
    defenseiv = selected.options[selected.selectedIndex].text;
}
function changehp(selected) {
    hpiv = selected.options[selected.selectedIndex].text;
}
function calculation() {
    let percentage = ((Number(attackiv) + Number(defenseiv) + Number(hpiv)) / 45) * 100;
    if (percentage == 100) {
        percentagecomment = "That is the best of the best!";
    } else if (percentage == 0) {
        percentagecomment = "That is extremely rare!"
    } else if (percentage == 97.77777777777777 || percentage == 2.2222222222222223) {
        percentagecomment = "Your OCD must be killing you."
    } else {
        percentagecomment = "";
    }
    percentage = percentage.toFixed(2);
    percentagetextline = "Your Pokémon has " + String(percentage) + "% IVs! " + percentagecomment;
    document.getElementById("percentage").innerHTML = percentagetextline;

    if (percentage == 100.00) {
        staramount = "★★★★";
        usecomment = "the Master League of Go Battle League or raids!"
        isitworthkeepingtextline = "This Pokémon has perfect IVs and is definitely worth keeping. To put it in perspective, a wild Pokémon this has a nearly 0.02% chance of having these statistics! Congratulations!"
        audio = new Audio('assets/shiny-sound.mp3');
        audio.play();
    } else if (percentage < 100 && percentage > 80) {
        staramount = "★★★";
        usecomment = "the Master League of Go Battle League or raids!"
        isitworthkeepingtextline = "This Pokémon has really good IVs and is worth keeping until you get one with better IVs!";
        audio = new Audio('assets/good.mp3');
        audio.play();
    } else if (percentage < 80 && percentage > 66.7) {
        staramount = "★★☆";
        if (Number(attackiv) <= 5 && Number(hpiv) > 10 && Number(hpiv) > 10) {
            usecomment = "the Little Cup, Great League, or Ultra League of Go Battle League!";
            isitworthkeepingtextline = "This Pokémon has really good IVs for the Go Battle League! It is worth keeping if you plan to participate in it.";
            audio = new Audio('assets/good.mp3');
            audio.play();
        } else {
            usecomment = "absolutely nothing. This Pokémon is not worth investing Stardust or candy into. Generally, for Go Battle League, your Pokémon is better with low attack IV, high defense IV, and high HP IV.";
            isitworthkeepingtextline = "This Pokémon has average IVs. This is not worth keeping.";
            audio = new Audio('assets/mid.mp3');
            audio.play();
        }
    } else if (percentage < 66.7 && percentage > 50) {
        staramount = "★☆☆";
        if (Number(attackiv) <= 5 && Number(hpiv) > 10 && Number(hpiv) > 10) {
            usecomment = "the Little Cup, Great League, or Ultra League of Go Battle League!";
            isitworthkeepingtextline = "This Pokémon has really good IVs for the Go Battle League! It is worth keeping if you plan to participate in it.";
            audio = new Audio('assets/good.mp3');
            audio.play();
        } else {
            usecomment = "absolutely nothing. This Pokémon is not worth investing Stardust or candy into. Generally, for Go Battle League, your Pokémon is better with low attack IV, high defense IV, and high HP IV.";
            isitworthkeepingtextline = "This Pokémon has average IVs. This is not worth keeping.";
            audio = new Audio('assets/mid.mp3');
            audio.play();
        }
    } else if (percentage < 50 && percentage >= 0) {
        staramount = "☆☆☆";
        if (percentage == 0) {
            usecomment = "absolutely nothing, but you can invest Stardust and candy into it if you like.";
            isitworthkeepingtextline = "This Pokémon has an extremely rare set of IVs. This is worth keeping because a Pokémon has a 0.02% chance to have this IV set. Congratulations!";
            audio = new Audio('assets/shiny-sound.mp3');
            audio.play();
        } else {
            usecomment = "absolutely nothing. This Pokémon is not worth investing Stardust or candy into.";
            isitworthkeepingtextline = "This Pokémon has absolutely awful IVs. This is not worth keeping at all.";
            audio = new Audio('assets/cry.mp3');
            audio.play();
        }
    }
    starstextline = "In game, your Pokémon would be rated " + staramount + ".";
    document.getElementById("stars").innerHTML = starstextline;

    usetextline = "Your Pokémon would be best used in " + usecomment;
    document.getElementById("use").innerHTML = usetextline;
    document.getElementById("isitworthkeeping").innerHTML = isitworthkeepingtextline;
}
function defaultstat() {
    attackiv = 0;
    defenseiv = 0;
    hpiv = 0;
}