Package.describe({
  name: "kljensen:accounts-coursera",
  summary: "Login service for Coursera accounts",
  version: "0.1.0",
  documentation: 'README.md',
  git: 'https://github.com/kljensen/meteor-accounts-coursera'
});

Package.onUse(function(api) {
  api.use('accounts-base@1.2.0', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base@1.2.0', ['client', 'server']);
  api.use('accounts-oauth@1.1.5', ['client', 'server']);
  api.use('kljensen:coursera@0.1.0', ['client', 'server']);

  api.addFiles('coursera_login_button.css', 'client');

  api.addFiles("coursera.js");
});
