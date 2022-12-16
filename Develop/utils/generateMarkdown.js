// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if   (license === 'Apache version 2.0') {
    return '![License: Apache version 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
}
if (license === 'MIT') {
  return '![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)';

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
