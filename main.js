var AToggleButton = document.getElementById('Toggle-button');
var Skill_Section = document.getElementById('Skills-Section');
AToggleButton.addEventListener('click', function () {
    if (Skill_Section.style.display === "none") {
        Skill_Section.style.display = "block";
    }
    else {
        Skill_Section.style.display = "none";
    }
    ;
});
