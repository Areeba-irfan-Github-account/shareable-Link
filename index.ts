document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLDivElement;
    const displayName = document.getElementById('displayName') as HTMLParagraphElement;
    const displayEmail = document.getElementById('displayEmail') as HTMLParagraphElement;
    const displayPhone = document.getElementById('displayPhone') as HTMLParagraphElement;
    const displayEducation = document.getElementById('displayEducation') as HTMLParagraphElement;
    const displaySkills = document.getElementById('displaySkills') as HTMLParagraphElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const nameInput = (document.getElementById('name') as HTMLInputElement).value;
        const emailInput = (document.getElementById('email') as HTMLInputElement).value;
        const phoneInput = (document.getElementById('phone') as HTMLInputElement).value;
        const educationInput = (document.getElementById('education') as HTMLInputElement).value;
        const skillsInput = (document.getElementById('skills') as HTMLInputElement).value;

        displayName.textContent = `Name ${nameInput}`;
        displayEmail.textContent = `email  ${emailInput}`;
        displayPhone.textContent = `Phone ${phoneInput}`;
        displayEducation.textContent = `Education ${educationInput}`;
        displaySkills.textContent = `Skills ${skillsInput}`;

        resultDiv.classList.remove('hidden');

        form.reset();
    });
});