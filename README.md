# Learning With Kate

Live-ready static ESL teacher website.

## Publish with GitHub Pages
1. Put `index.html`, `style.css`, and `script.js` in the root of the repository.
2. GitHub → Settings → Pages.
3. Under Build and deployment, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then Save.
5. Your project site will normally be:
   `https://lora1027.github.io/learningwithkate/`

GitHub Pages hosts HTML, CSS and JavaScript directly from a repository.

## Booking
The current booking form is a safe request form that opens an email draft. The Contact email and booking destination share one setting in `script.js`. To make submissions automatically collect into a Google Sheet for free, create a Google Form and connect its responses to a Google Sheet, then replace the form submission logic in `script.js` with the Google Forms endpoint/field mappings.

Do not put private student data, passwords, API keys, or other secrets in this public repository.


## Google Forms booking
The booking section embeds the published Google Form directly into the website. Student submissions continue to be stored in the Google Sheet connected to the form. To change the booking questions, edit the Google Form; the website does not need to be rebuilt unless the form link changes.
