Package.describe({
  summary: "Login service for Coursera accounts",
  version: "0.1.0",
  documentation: 'README.md',
  git: 'https://github.com/kljensen/meteor-accounts-coursera'
});

Package.onUse(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('coursera', ['client', 'server']);

  api.addFiles('coursera_login_button.css', 'client');

  api.addFiles("coursera.js");
});
