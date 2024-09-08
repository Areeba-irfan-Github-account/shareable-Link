document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const resultDiv = document.getElementById('result');
    const shareLink = document.getElementById('share-link');
    const copyLinkbtn = document.getElementById('copy-link');
    const downloadbtn = document.getElementById('download-btn');

    const displayName = document.getElementById('displayName');
    const displayEmail = document.getElementById('displayEmail');
    const displayPhone = document.getElementById('displayPhone');
    const displayEducation = document.getElementById('displayEducation');
    const displaySkills = document.getElementById('displaySkills');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submitForm();
    });

    function submitForm() {
        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        const phoneInput = document.getElementById('phone').value;
        const educationInput = document.getElementById('education').value;
        const skillsInput = document.getElementById('skills').value;

        // Display input values on the page
        displayName.textContent = `Name: ${nameInput}`;
        displayEmail.textContent = `Email: ${emailInput}`;
        displayPhone.textContent = `Phone: ${phoneInput}`;
        displayEducation.textContent = `Education: ${educationInput}`;
        displaySkills.textContent = `Skills: ${skillsInput}`;
        form.classList.add('hidden');
        resultDiv.classList.remove('hidden');

        // Generate a unique URL for the resume
        const userName = nameInput.toLowerCase().replace(/\s+/g, '');
        const uniqueUrl = `resume-viewer.html?username=${userName}`;
        localStorage.setItem(userName, JSON.stringify({
            name: nameInput,
            email: emailInput,
            phone: phoneInput,
            education: educationInput,
            skills: skillsInput
        }));

        shareLink.href = uniqueUrl;
        shareLink.textContent = `Open Resume: ${uniqueUrl}`;
        shareLink.style.display = 'inline';

        copyLinkbtn.style.display = 'inline-block';
        copyLinkbtn.addEventListener('click', function () {
            copyToClipboard(uniqueUrl);
            alert('Link copied to clipboard!');
        });
    }

    function generateResume() {
        const resumeContent = document.getElementById('resume-content');
        resumeContent.innerHTML = `
            <h3>${displayName.textContent.replace('Name: ', '')}</h3>
            <p>Email: ${displayEmail.textContent.replace('Email: ', '')}</p>
            <p>Phone: ${displayPhone.textContent.replace('Phone: ', '')}</p>
            <p>Education: ${displayEducation.textContent.replace('Education: ', '')}</p>
            <p>Skills: ${displaySkills.textContent.replace('Skills: ', '')}</p>
        `;
    }

    function copyToClipboard(text) {
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
    }

    downloadbtn.addEventListener('click', function () {
        const resumeElement = document.getElementById('resume-content');
        if (resumeElement) {
            const opt = {
                margin: 1,
                filename: 'Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(resumeElement).set(opt).save();
        } else {
            console.error('Resume content not found');
        }
    });
});
