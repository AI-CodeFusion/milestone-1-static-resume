const AToggleButton = document.getElementById('Toggle-button') as HTMLElement
const Skill_Section = document.getElementById('Skills-Section') as HTMLElement

AToggleButton.addEventListener('click', () => {
    if (Skill_Section.style.display === "none") {
        Skill_Section.style.display = "block";
    } else {
        Skill_Section.style.display = "none";
    };
});